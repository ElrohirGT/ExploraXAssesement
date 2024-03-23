import { useState } from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { IS_ANDROID, IS_WEB } from "../constants";

const coin = require("../assets/elementos_estaticos/moneda.png");

export default function Header() {
  const [money, setMoney] = useState(0);
  const styles = IS_WEB
    ? StyleSheet.flatten(mobileStyles, webStyles)
    : mobileStyles;

  return (
    <View style={styles.container}>
      <View style={styles.coinImageContainer}>
        <Image source={coin} style={styles.coinImage} />
      </View>
      <Text style={styles.coinsText}>{money}</Text>
      <Pressable style={styles.moreCoinsButton}>
        <Text style={styles.moreCoinsButtonText}>^</Text>
      </Pressable>
    </View>
  );
}

const mobileStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  coinImageContainer: {
    marginRight: -5,
    zIndex: 2,
    elevation: IS_ANDROID ? 2 : 0,
  },
  coinImage: {},
  coinsText: {
    backgroundColor: "#111e55",
    fontSize: 18,
    minWidth: 75,
    color: "white",
    paddingLeft: 10,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    zIndex: 1,
    elevation: IS_ANDROID ? 1 : 0,
  },
  moreCoinsButton: {
    padding: 10,
    backgroundColor: "#ec8a34",
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "flex-end",
  },
  moreCoinsButtonText: {
    color: "white",
    fontSize: 32,
    lineHeight: 32,
    textAlign: "center",
    fontWeight: "900",
  },
});

const webStyles = StyleSheet.create({
  coinImage: {
    width: 50,
    height: 50,
  },
});
