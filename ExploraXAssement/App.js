import { useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { DEFAULT_QUESTIONS } from "./constants";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const background = require("./assets/elementos_estaticos/Fondo.png");

export default function App() {
  const [questions, setQuestions] = useState(DEFAULT_QUESTIONS);
  const [money, setMoney] = useState(0);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Header money={money} />
        <Main />
        <Footer />
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
  },
});
