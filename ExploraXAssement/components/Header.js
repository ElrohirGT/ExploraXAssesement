import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import Svg, { Path } from "react-native-svg";
import { IS_ANDROID, IS_WEB } from "../constants";

const coin = require("../assets/elementos_estaticos/moneda.png");

export default function Header({ money }) {
  const styles = IS_WEB
    ? StyleSheet.flatten(mobileStyles, webStyles)
    : mobileStyles;
  const a = <Text style={styles.moreCoinsButtonText}>^</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.coinImageContainer}>
        <Image source={coin} style={styles.coinImage} />
      </View>
      <Text style={styles.coinsText}>{money}</Text>
      <Pressable style={styles.moreCoinsButton}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={styles.moreCoinsButtonIcon}
        >
          <Path
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.50"
            d="m19 15-7-6-7 6"
          />
        </Svg>
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
    justifyContent: "center",
    alignItems: "center",
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
