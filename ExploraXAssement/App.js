import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const background = require("./assets/elementos_estaticos/Fondo.png");

export default function App() {
  const [money, setMoney] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={background}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Header money={money} />
        <Main />
        <Footer />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    overflow: "hidden",
  },
  backgroundImage: {
    flex: 1,
  },
});
