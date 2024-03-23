import { useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { DEFAULT_QUESTIONS } from "./constants";
import Header from "./components/Header";

const background = require("./assets/elementos_estaticos/Fondo.png");

export default function App() {
  const [questions, setQuestions] = useState(DEFAULT_QUESTIONS);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Header />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  backgroundImage: {
    flexGrow: 1,
    padding: 10,
  },
});
