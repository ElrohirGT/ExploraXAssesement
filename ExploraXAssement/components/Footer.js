import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

import ChestSVG from "./atoms/ChestSVG";
import HomeSVG from "./atoms/HomeSVG";
import RankingSVG from "./atoms/RankingSVG";
import StoreSVG from "./atoms/StoreSVG";

const logo = require("../assets/elementos_estaticos/logo_fondo_oscuro.png");

export default function Footer() {
  const { height, width } = useWindowDimensions();
  const styles = generateStyles(width, height);

  return (
    <View style={[styles.container]}>
      <View style={styles.menu}>
        <Pressable style={styles.menuButton}>
          <HomeSVG style={styles.menuButtonIcon} />
        </Pressable>
        <Pressable style={styles.menuButton}>
          <StoreSVG style={styles.menuButtonIcon} />
        </Pressable>

        <Image source={logo} style={styles.menuLogo} resizeMode="contain" />

        <Pressable style={styles.menuButton}>
          <ChestSVG style={styles.menuButtonIcon} />
        </Pressable>
        <Pressable style={styles.menuButton}>
          <RankingSVG styles={styles.menuButtonIcon} />
        </Pressable>
        <View></View>
      </View>
      <View style={styles.backgroundShape} />
    </View>
  );
}

/**
 * Generates the styles for this component according to some screen width and screen height
 * @param {number} screenWidth
 * @param {number} screenHeight
 */
function generateStyles(screenWidth, screenHeight) {
  const menuLogoHeight = screenHeight / 5;

  const mobileStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },

    backgroundShape: {
      position: "absolute",

      borderColor: "#61c9d2",
      borderTopWidth: 5,
      borderRightWidth: 5,
      borderLeftWidth: 5,
      backgroundColor: "#0e4c71",
      zIndex: 1,

      width: screenWidth,
      height: screenWidth,
      top: menuLogoHeight / -3.5,
      borderRadius: screenWidth,
      transform: [{ scaleX: 1.5 }],
    },

    menu: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "flex-end",
      zIndex: 2,
      paddingRight: 10,
      paddingLeft: 10,
      paddingBottom: 10,
      gap: screenWidth / 50,

      width: screenWidth,
    },

    menuLogo: {
      flex: 3,
      alignSelf: "center",
      height: menuLogoHeight,
      marginBottom: menuLogoHeight / 5,
    },

    menuButton: {
      flex: 1,
      alignSelf: "flex-end",
      alignItems: "center",
      justifyContent: "center",
      height: menuLogoHeight / 4,

      borderRadius: 5,
      borderColor: "#54a0c4",
      borderBottomWidth: 4,
      backgroundColor: "#9bdafa",
    },

    menuButtonIcon: {
      width: screenWidth / 8,
      height: menuLogoHeight / 5,
    },
  });

  const webStyles = StyleSheet.create({});

  return StyleSheet.flatten(mobileStyles, webStyles);
}
