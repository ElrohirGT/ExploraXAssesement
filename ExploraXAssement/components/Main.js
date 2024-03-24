import { View, StyleSheet, Text } from "react-native";
import InstructionsView from "./pages/InstructionsView";
import { useState } from "react";

const INSTRUCTIONS_VIEW_PAGE = "instructions";
const QUESTION_VIEW_PAGE = "question";

export default function Main() {
  const styles = StyleSheet.flatten(mobileStyles, webStyles);
  const [currentView, setCurrentView] = useState(INSTRUCTIONS_VIEW_PAGE);
  const VIEWS = {};
  VIEWS[INSTRUCTIONS_VIEW_PAGE] = (
    <InstructionsView
      title="¡Desafíate!"
      description="Supera estos desafíos y empieza a completar la misión de:"
      mission="Jerarquía de Operaciones"
      onNextButtonPressed={() => {
        setCurrentView(QUESTION_VIEW_PAGE);
      }}
    ></InstructionsView>
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
