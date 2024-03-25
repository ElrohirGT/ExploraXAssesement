import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { IS_ANDROID, IS_WEB } from "../constants";
import UpArrowSVG from "./atoms/UpArrowSVG";

const coin = require("../assets/elementos_estaticos/moneda.png");
const planet = require("../assets/elementos_estaticos/PlanetaAritmética.png");

export default function Header({ money }) {
  const { width, height } = useWindowDimensions();
  const styles = generateStyles(width, height);

  return (
    <View style={styles.container}>
      <Image source={planet} resizeMode="contain" style={styles.planetImage} />

      <View style={styles.coinSideContainer}>
        <View style={styles.coinDisplayContainer}>
          <Image source={coin} style={styles.coinImage} resizeMode="contain" />
          <Text style={styles.coinsText}>{money}</Text>
        </View>

        <Pressable style={styles.moreCoinsButton}>
          <UpArrowSVG style={styles.moreCoinsButtonIcon} />
        </Pressable>
      </View>
    </View>
  );
}

/**
 * Generates the styles of the component with the given screen width and screen height
 * @param {number} screenWidth
 * @param {number} screenHeight
 */
function generateStyles(screenWidth, screenHeight) {
  const buttonWidth = screenWidth / 8;
  const coinTextWidth = screenWidth / 5;

  const mobileStyles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: screenWidth / 20,
    },

    coinSideContainer: {
      flexDirection: "row",
      gap: screenWidth / 20,
    },

    planetImage: {
      width: Math.min(screenHeight / 5, screenWidth / 5),
      height: Math.min(screenHeight / 5, screenWidth / 5),
    },

    coinDisplayContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },

    coinImage: {
      position: "absolute",
      zIndex: 2,

      width: screenWidth / 10,
      height: screenHeight / 20,
      left: screenWidth / -14,
    },

    coinsText: {
      backgroundColor: "#111e55",
      color: "white",
      zIndex: 1,

      minWidth: coinTextWidth,
      fontSize: screenHeight / 45,
      paddingLeft: coinTextWidth / 5,
      borderTopRightRadius: screenWidth,
      borderBottomRightRadius: screenWidth,
    },

    moreCoinsButton: {
      backgroundColor: "#ec8a34",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#e85729",
      borderBottomWidth: 4,

      width: buttonWidth,
      height: buttonWidth,
      maxWidth: 50,
      maxHeight: 50,
    },

    moreCoinsButtonIcon: {
      width: (buttonWidth * 3) / 4,
      height: (buttonWidth * 3) / 4,
    },
  });

  const webStyles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: screenWidth / 50,
    },

    coinImage: {
      position: "absolute",
      zIndex: 2,

      width: screenWidth / 10,
      height: screenHeight / 20,
      left: screenWidth / -20,
    },
  });

  return StyleSheet.flatten(mobileStyles, webStyles);
}
