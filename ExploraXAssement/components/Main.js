import { View, StyleSheet, Text } from "react-native";
import InstructionsView from "./pages/InstructionsView";
import QuestionView from "./pages/QuestionView";
import { useState } from "react";
import { DEFAULT_QUESTIONS } from "../constants";

const INSTRUCTIONS_VIEW_PAGE = "instructions";
const QUESTION_VIEW_PAGE = "question";

export default function Main() {
  const styles = StyleSheet.flatten(mobileStyles, webStyles);
  const [currentView, setCurrentView] = useState(QUESTION_VIEW_PAGE);
  const [questions, setQuestions] = useState(DEFAULT_QUESTIONS);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];

  const VIEWS = {};
  VIEWS[INSTRUCTIONS_VIEW_PAGE] = (
    <InstructionsView
      title="¡Desafíate!"
      description="Supera estos desafíos y empieza a completar la misión de:"
      mission="Jerarquía de Operaciones"
      onNextButtonPressed={() => {
        setCurrentView(QUESTION_VIEW_PAGE);
      }}
    />
  );

  VIEWS[QUESTION_VIEW_PAGE] = (
    <QuestionView
      question={currentQuestion}
      progress={{ min: currentQuestionIndex + 1, max: questions.length }}
    />
  );

  return <View style={styles.container}>{VIEWS[currentView]}</View>;
}

const mobileStyles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: "center",
  },
});
const webStyles = StyleSheet.create({});