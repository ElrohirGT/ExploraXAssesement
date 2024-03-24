import {
  View,
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
} from "react-native";
import ProgressBar from "../atoms/ProgressBar";

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
export default function QuestionView({ question, progress }) {
  const styles = StyleSheet.flatten(mobileStyles, webStyles);
  const { width, height } = useWindowDimensions();
  const inputs = generateInputs(question);

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionTitle}>Desafíate</Text>
        <Image
          source={divider}
          style={[styles.divider, { width: width / 4 }]}
          resizeMode="stretch"
        />
        <ProgressBar max={progress.max} current={progress.min} />
      </View>
    </View>
  );
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

const mobileStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },

  divider: {
    alignSelf: "center",
    // height: 3,
  },

  questionContainer: {},

  questionTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
});
const webStyles = StyleSheet.create({});
