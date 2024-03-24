import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { IS_ANDROID, IS_WEB } from "../constants";
import UpArrowSVG from "./atoms/UpArrowSVG";

const coin = require("../assets/elementos_estaticos/moneda.png");

export default function Header({ money }) {
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
        <UpArrowSVG style={styles.moreCoinsButtonIcon} />
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
    gap: 5,
    padding: 10,
  },
  coinImageContainer: {
    marginRight: -10,
    zIndex: 2,
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
  },
  moreCoinsButton: {
    padding: 10,
    backgroundColor: "#ec8a34",
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#e85729",
    borderBottomWidth: 4,
  },
  moreCoinsButtonIcon: {
    width: 32,
    height: 32,
  },
});

const webStyles = StyleSheet.create({
  coinImage: {
    width: 50,
    height: 50,
  },
});
