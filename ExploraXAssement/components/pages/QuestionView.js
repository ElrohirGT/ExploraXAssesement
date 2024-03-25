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

const divider = require("../../assets/elementos_estaticos/Línea_título.png");

const IS_CORRECT = "is_correct";
const IS_INCORRECT = "is_incorrect";
const NOT_ANSWERED = "not_answered";

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
  const { width } = useWindowDimensions();
  const questionDescriptionWidth = (width * 3) / 4;
  const inputs = useMemo(() => generateInputs(question), [question]);
  const answeredCorrectly = () => {
    console.log("Answered correctly!");
    setIsAnswered(IS_CORRECT);
  };
  const answeredIncorrectly = () => {
    console.log("Answered incorrectly!");
    setIsAnswered(IS_INCORRECT);
  };
  const options = useMemo(
    () =>
      mapQuestionOptionsToComponents(
        question,
        inputs,
        questionDescriptionWidth,
        isAnswered,
        answeredCorrectly,
        answeredIncorrectly,
      ),
    [question],
  );

  const [isAnswered, setIsAnswered] = useState(NOT_ANSWERED);

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
          {options}
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
 * @param {Question} question
 * @param {QuestionInputs} inputs
 * @param {number} parentWidth
 * @param {string} isAnswered
 * @param {Function} answeredCorrectly
 * @param {Function} answeredIncorrectly
 */
function mapQuestionOptionsToComponents(
  question,
  { A, B, C },
  parentWidth,
  isAnswered,
  answeredCorrectly,
  answeredIncorrectly,
) {
  const makeOption = (a, i, onPress) => {
    const key = a(A, B, C);
    return (
      <QuestionOption
        value={key}
        key={`${i}-${key}`}
        parentWidth={parentWidth}
        onSelected={onPress}
      />
    );
  };

  let corrects = question.answers.map((a, i) =>
    makeOption(a, i, answeredCorrectly),
  );
  let incorrects = question.other.map((a, i) =>
    makeOption(a, i, answeredIncorrectly),
  );

  // Return randomized array...
  return [...corrects, ...incorrects]
    .map((i) => ({ i, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ i }) => i);
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
