import {
  View,
  StyleSheet,
  useWindowDimensions,
  Pressable,
  Text,
  Image,
} from "react-native";

const avatar = require("../../assets/elementos_estaticos/Chanín.png");
const dividerTitulo = require("../../assets/elementos_estaticos/Línea_título.png");
const dRocket = require("../../assets/elementos_estaticos/pantalla_puntos/DRocket.png");

export default function InstructionsView({
  title,
  description,
  mission,
  onNextButtonPressed,
  ...props
}) {
  const { height, width } = useWindowDimensions();
  const styles = generateStyles(width, height);

  return (
    <View style={styles.container} {...props}>
      <Image source={dRocket} style={styles.dGlowLogo} resizeMode="contain" />

      <View style={styles.mainContent}>
        <Text style={styles.title}>{title}</Text>
        <Image
          source={dividerTitulo}
          style={styles.divider}
          resizeMode="contain"
        />

        <Text style={styles.description}>{description}</Text>
        <Text style={styles.mission}>{mission}</Text>

        <Pressable
          style={styles.button}
          onPressOut={onNextButtonPressed}
          hitSlop="10"
        >
          <Text style={styles.buttonText}>¡ACEPTO EL RETO!</Text>
        </Pressable>
      </View>

      <Image source={avatar} resizeMode="contain" style={styles.chaninImage} />
    </View>
  );
}

/**
 * Generates the styles of the component with the given screen width and screen height
 * @param {number} screenWidth
 * @param {number} screenHeight
 */
function generateStyles(screenWidth, screenHeight) {
  const contentWidth = (screenWidth * 3) / 4;
  const contentHeight = (screenHeight * 3) / 8;
  const dGlowWidth = contentWidth / 1.5;

  const mobileStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },

    dGlowLogo: {
      position: "absolute",
      top: contentHeight / 6,
      left: -contentWidth / 20,
      width: dGlowWidth,
      height: dGlowWidth,
      zIndex: 2,
    },

    chaninImage: {
      position: "absolute",
      left: 0,
      bottom: screenHeight / 20,
      width: screenWidth / 4,
      height: screenHeight / 3,
    },

    mainContent: {
      width: contentWidth,
      height: contentHeight,

      gap: 5,
      padding: 30,
      borderRadius: 10,
      alignSelf: "center",
      backgroundColor: "#1f4c8b",
      borderBottomWidth: 4,
      borderBottomColor: "#132f51",

      // Push it up a little
      transform: [{ translateY: -contentHeight / 10 }],
    },

    divider: {
      alignSelf: "center",
      width: contentWidth,
    },

    title: {
      color: "white",
      fontSize: contentHeight / 10,
      fontWeight: "bold",
      textAlign: "center",
    },

    description: {
      fontSize: contentHeight / 15,
      color: "white",
      textAlign: "center",
    },

    mission: {
      fontSize: contentHeight / 15,
      fontWeight: "bold",
      textAlign: "center",
      color: "white",
      paddingBottom: 20,
    },

    button: {
      paddingTop: 5,
      paddingBottom: 5,
      paddingRight: 10,
      paddingLeft: 10,
      backgroundColor: "white",
      alignSelf: "center",
      borderRadius: 5,
      borderBottomWidth: 4,
      borderBottomColor: "#8d8d8d",
    },

    buttonText: {
      fontSize: contentHeight / 14,
      textAlign: "center",
      color: "#133362",
      fontWeight: "600",
    },
  });

  const webContentWidth = (screenWidth * 3) / 6;
  const webContentHeight = screenHeight / 2;
  const webDglowWidth = webContentWidth / 3;

  const webStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
    },

    dGlowLogo: {
      position: "absolute",
      top: -webContentHeight / 4,
      left: webContentWidth / 2.5,
      width: webDglowWidth,
      height: webDglowWidth,
      zIndex: 2,
    },

    chaninImage: {
      position: "absolute",
      left: screenWidth / 10,
      bottom: screenHeight / 8,
      width: screenWidth / 10,
      height: screenHeight / 3,
    },

    mainContent: {
      width: webContentWidth,
      height: webContentHeight,

      gap: 5,
      padding: 30,
      borderRadius: 10,
      alignSelf: "center",
      backgroundColor: "#1f4c8b",
      borderBottomWidth: 4,
      borderBottomColor: "#132f51",
    },

    title: {
      color: "white",
      fontSize: contentHeight / 5,
      fontWeight: "bold",
      textAlign: "center",
    },

    description: {
      fontSize: contentHeight / 8,
      color: "white",
      textAlign: "center",
    },

    mission: {
      fontSize: contentHeight / 8,
      fontWeight: "bold",
      textAlign: "center",
      color: "white",
      paddingBottom: 20,
    },

    buttonText: {
      fontSize: contentHeight / 8,
      textAlign: "center",
      color: "#133362",
      fontWeight: "600",
    },
  });

  return StyleSheet.flatten(mobileStyles, webStyles);
}
