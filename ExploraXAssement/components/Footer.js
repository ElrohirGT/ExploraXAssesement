import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";

import HomeSVG from "./atoms/HomeSVG";
import StoreSVG from "./atoms/StoreSVG";
import ChestSVG from "./atoms/ChestSVG";
import RankingSVG from "./atoms/RankingSVG";

const MENU_BUTTON_DIMENSIONS = {
  width: 50,
  height: 50,
};

const logo = require("../assets/elementos_estaticos/logo_fondo_oscuro.png");

export default function Footer() {
  const styles = StyleSheet.flatten(mobileStyles, webStyles);
  const { height, width } = useWindowDimensions();
  const logoDimensions = {
    width: height / 6,
    height: height / 6,
  };
  const backgroundShapeHeigth = height / 6;
  const backgroundShape = {
    width,
    height: width,
    marginTop: -backgroundShapeHeigth,
    borderRadius: width,
    transform: [{ scaleX: 1.5 }],
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.menu, { width }]}>
        <Pressable style={styles.menuButton}>
          <HomeSVG style={styles.menuButtonIcon} />
        </Pressable>
        <Pressable style={styles.menuButton}>
          <StoreSVG style={styles.menuButtonIcon} />
        </Pressable>
        <Image
          source={logo}
          style={[styles.menuLogo, logoDimensions]}
          resizeMode="contain"
        />
        <Pressable style={styles.menuButton}>
          <ChestSVG style={styles.menuButtonIcon} />
        </Pressable>
        <Pressable style={styles.menuButton}>
          <RankingSVG styles={styles.menuButtonIcon} />
        </Pressable>
      </View>
      <View style={[styles.backgroundShape, backgroundShape]} />
    </View>
  );
}

const mobileStyles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
  },

  backgroundShape: {
    borderColor: "#61c9d2",
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderLeftWidth: 5,
    backgroundColor: "#0e4c71",
    zIndex: 1,
  },

  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    zIndex: 2,
    paddingRight: 20,
    paddingLeft: 20,
  },

  menuLogo: {},

  menuButton: {
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderColor: "#54a0c4",
    borderBottomWidth: 4,
    backgroundColor: "#9bdafa",
    ...MENU_BUTTON_DIMENSIONS,
  },

  menuButtonIcon: {
    ...MENU_BUTTON_DIMENSIONS,
    width: MENU_BUTTON_DIMENSIONS.width - 10,
  },
});
const webStyles = StyleSheet.create({});
