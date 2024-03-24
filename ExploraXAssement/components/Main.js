import { View, StyleSheet, Text } from "react-native";
import Instructions from "./pages/Instrucctions";
import { useState } from "react";

const INSTRUCTIONS_VIEW_PAGE = "instructions";
const QUESTION_VIEW_PAGE = "question";

export default function Main() {
  const styles = StyleSheet.flatten(mobileStyles, webStyles);
  const [currentView, setCurrentView] = useState(INSTRUCTIONS_VIEW_PAGE);
  const VIEWS = {};
  VIEWS[INSTRUCTIONS_VIEW_PAGE] = (
    <Instructions
      title="¡Desafíate!"
      description="Supera estos desafíos y empieza a completar la misión de:"
      mission="Jerarquía de Operaciones"
      onNextButtonPressed={() => {
        setCurrentView(QUESTION_VIEW_PAGE);
      }}
    ></Instructions>
  );

  return <View style={styles.container}>{VIEWS[currentView]}</View>;
}

const mobileStyles = StyleSheet.create({
  container: {
    flex: 8,
    justifyContent: "center",
  },
});
const webStyles = StyleSheet.create({});
