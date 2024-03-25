import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
import ProgressBar from "../atoms/ProgressBar";
import { genericJoin } from "../../lib";
import QuestionOption from "../atoms/QuestionOption";
import { useMemo, useState } from "react";
import { IS_CORRECT, IS_INCORRECT, NOT_ANSWERED } from "../../lib";

const divider = require("../../assets/elementos_estaticos/Línea_título.png");

/**
 * QuestionView props
 * @typedef {Object} QuestionViewProps
 * @property {Question} question - The information of the current question to render
 * @property {Range} progress - How many questions have we answered and how many are left
 */

/**
 * @param {QuestionViewProps} props
 */
export default function QuestionView({ title, question, progress }) {
  const styles = StyleSheet.flatten(mobileStyles, webStyles);
  const [isAnswered, setIsAnswered] = useState(NOT_ANSWERED);
  const answeredCorrectly = () => {
    console.log("Answered correctly!");
    setIsAnswered(IS_CORRECT);
  };
  const answeredIncorrectly = () => {
    console.log("Answered incorrectly!");
    setIsAnswered(IS_INCORRECT);
  };

  const { width } = useWindowDimensions();
  const questionDescriptionWidth = (width * 3) / 4;
  const { options, inputs } = useMemo(
    () => generateOptions(question, answeredCorrectly, answeredIncorrectly),
    [question],
  );

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionTitle}>{title}</Text>
        <Image
          source={divider}
          style={[styles.divider, { width: width / 4 }]}
          resizeMode="stretch"
        />

        <View
          style={[
            styles.progressBarContainer,
            { width: questionDescriptionWidth * 1.2 },
          ]}
        >
          <Text style={styles.progressText}>
            Nivel {progress.min}/{progress.max}
          </Text>
          <ProgressBar max={progress.max} current={progress.min} />
        </View>

        <View
          style={[
            styles.questionDescriptionContainer,
            { width: questionDescriptionWidth },
          ]}
        >
          {mapQuestionDescriptionToComponents(question, inputs, styles)}
        </View>
        <View
          style={[
            styles.questionOptionsContainer,
            { width: questionDescriptionWidth },
          ]}
        >
          {mapOptionsToComponents(
            options,
            questionDescriptionWidth,
            isAnswered,
          )}
        </View>

        {isAnswered !== NOT_ANSWERED ? (
          <Pressable
            style={[
              styles.nextButton,
              { width: (questionDescriptionWidth * 3) / 5 },
            ]}
          >
            <Text style={styles.nextButtonText}>SIGUIENTE</Text>
          </Pressable>
        ) : null}
        <Pressable>
          <Text style={styles.reportQuestionText}>Reportar pregunta</Text>
        </Pressable>
      </View>
    </View>
  );
}

const mobileStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingRight: 20,
    paddingLeft: 20,
  },

  questionContainer: {
    alignItems: "center",
    gap: 12,
  },

  questionTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },

  divider: {
    alignSelf: "center",
  },

  progressBarContainer: {},

  progressText: {
    color: "white",
    fontSize: 14,
  },

  nextButton: {
    backgroundColor: "white",
    borderBottomColor: "#8d8d8d",
    borderBottomWidth: 4,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  nextButtonText: {
    color: "#133362",
    fontWeight: "bold",
  },

  reportQuestionText: {
    color: "white",
    textDecorationLine: "underline",
  },

  questionDescriptionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomColor: "#8d8d8d",
    borderBottomWidth: 4,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    gap: 5,
  },

  questionOptionsContainer: {
    flexGrow: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "space-between",
  },

  questionMark: {
    backgroundColor: "#76c7cb",
    color: "white",
    borderRadius: 5,
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
    padding: 10,
    borderRadius: 10,
  },

  questionDescription: {
    color: "#133362",
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
const webStyles = StyleSheet.create({});

/**
 * Number inputs to render a question
 * @typedef {{A: number, B: number, C: number}} QuestionInputs
 */

/**
 * @param {Question} question
 * @param {QuestionInputs} set of inputs of the question
 */
function mapQuestionDescriptionToComponents(question, inputs, styles) {
  let template = question.description;
  Object.keys(inputs).forEach(
    (k) => (template = template.replace(k, inputs[k])),
  );

  let parts = template.split("?").map((p) => (
    <Text style={styles.questionDescription} key={p + "-guaranteesKeyNotEmpty"}>
      {p}
    </Text>
  ));

  return genericJoin(
    parts,
    <Text style={styles.questionMark} key={"?"}>
      ?
    </Text>,
  );
}

/**
 * @param {Question[]} correctAnswers
 * @param {number} parentWidth
 * @param {string} isAnswered
 * @returns An array of React components
 */
function mapOptionsToComponents(answers, parentWidth, isAnswered) {
  const makeOption = (a, i) => {
    const key = a.value;
    const onPress = a.onPress;
    return (
      <QuestionOption
        value={key}
        key={`${i}-${key}`}
        parentWidth={parentWidth}
        isAnswered={isAnswered}
        onSelected={onPress}
      />
    );
  };

  return answers.map(makeOption);
}

/**
 * Function that generates the values and data of each option of the question.
 * The options generated are guaranteed to not be equal to each other.
 * @param {Question} question
 * @returns {{value: number, onPress: Function}[]} The array of generated options
 */
function generateOptions(question, answeredCorrectly, answeredIncorrectly) {
  const correctOptionsCount = question.answers.length;
  const optionArray = [];
  let inputs = {};

  while (true) {
    optionArray.splice(0);
    const optionSet = new Set();

    const { A, B, C } = generateInputs(question);
    inputs = { A, B, C };
    const addOptionsValues = (optionsArray, onPress) => {
      for (let i = 0; i < optionsArray.length; i++) {
        const optionValue = { value: optionsArray[i](A, B, C), onPress };
        if (optionSet.has(optionValue.value)) {
          return false;
        } else {
          optionSet.add(optionValue.value);
          optionArray.push(optionValue);
        }
      }

      return true;
    };

    if (
      !addOptionsValues(question.answers, answeredCorrectly) ||
      !addOptionsValues(question.other, answeredIncorrectly)
    ) {
      continue;
    }

    break;
  }

  const correctOptions = optionArray.slice(0, correctOptionsCount);
  const incorrectOptions = optionArray.slice(correctOptionsCount);

  const options = [...correctOptions, ...incorrectOptions]
    .map((i) => ({ i, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ i }) => i);

  return { options, inputs };
}

/**
 * @param {Question} question
 * @returns {{Number, Number, Number}} Computed inputs from the given ranges in `question`
 */
function generateInputs(question) {
  const [A, B, C] = [question.A, question.B, question.C].map(([min, max]) =>
    // Obtained from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    Math.floor(Math.random() * (max - min + 1) + min),
  );

  return { A, B, C };
}
