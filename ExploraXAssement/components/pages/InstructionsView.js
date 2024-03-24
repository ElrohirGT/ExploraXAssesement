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
const dGlow = require("../../assets/elementos_estaticos/pantalla_puntos/DconGlow.png");
const dGlowFire = require("../../assets/elementos_estaticos/pantalla_puntos/Llama.png");

export default function InstructionsView({
  title,
  description,
  mission,
  onNextButtonPressed,
  ...props
}) {
  const styles = StyleSheet.flatten(mobileStyles, webStyles);
  const { height, width } = useWindowDimensions();
  const contentWidth = (width * 3) / 4;
  const dGlowDimension = contentWidth / 4;

  return (
    <View style={styles.container} {...props}>
      <View style={styles.dGlowContainer}>
        <Image
          source={dGlowFire}
          style={[
            styles.dGlowFire,
            { width: dGlowDimension, height: dGlowDimension - 5 },
          ]}
          resizeMode="contain"
        />
        <Image
          source={dGlow}
          style={[
            styles.dGlowLogo,
            { width: dGlowDimension, height: dGlowDimension },
          ]}
          resizeMode="contain"
        />
      </View>
      <View
        style={[
          styles.mainContent,
          { width: contentWidth, height: contentWidth },
        ]}
      >
        <Text style={styles.title}>{title}</Text>
        <Image
          source={dividerTitulo}
          style={[styles.divider, { width: contentWidth }]}
          resizeMode="contain"
        />
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.mission}>{mission}</Text>
        <Pressable style={styles.button} onPress={onNextButtonPressed}>
          <Text style={styles.buttonText}>¡ACEPTO EL RETO!</Text>
        </Pressable>
      </View>
      <Image
        source={avatar}
        resizeMode="contain"
        style={[styles.chaninImage, { height: height / 3 }]}
      />
    </View>
  );
}

const mobileStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    transform: [{ translateY: 50 }],
  },

  dGlowContainer: {
    flexDirection: "row",
    transform: [{ scale: 1.6 }, { translateX: 75 }, { translateY: 40 }],
    zIndex: 2,
  },

  dGlowFire: {},

  dGlowLogo: {
    transform: [{ translateY: -6 }, { translateX: -15 }],
  },

  chaninImage: {
    alignSelf: "flex-start",
    width: 100,
  },

  mainContent: {
    gap: 5,
    padding: 30,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "#1f4c8b",
    borderBottomWidth: 4,
    borderBottomColor: "#132f51",
    transform: [{ translateY: 50 }],
  },

  divider: {
    alignSelf: "center",
  },

  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },

  description: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },

  mission: {
    fontSize: 20,
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
    fontSize: 20,
    textAlign: "center",
    color: "#133362",
    fontWeight: "600",
  },
});
const webStyles = StyleSheet.create({});
