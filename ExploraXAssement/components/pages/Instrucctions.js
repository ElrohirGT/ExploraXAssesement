import {
  View,
  StyleSheet,
  useWindowDimensions,
  Pressable,
  Text,
} from "react-native";

export default function Instructions({
  title,
  description,
  mission,
  onNextButtonPressed,
  ...props
}) {
  const styles = StyleSheet.flatten(mobileStyles, webStyles);
  const { height, width } = useWindowDimensions();
  const contentWidth = (width * 3) / 4;

  return (
    <View style={styles.container} {...props}>
      <View
        style={[
          styles.mainContent,
          { width: contentWidth, height: contentWidth },
        ]}
      >
        <Text style={styles.title}>{title}</Text>
        <View style={[styles.divider, { width: contentWidth / 2 }]} />
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.mission}>{mission}</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>¡ACEPTO EL RETO!</Text>
        </Pressable>
      </View>
    </View>
  );
}

const mobileStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  mainContent: {
    gap: 5,
    padding: 30,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "#1f4c8b",
    borderBottomWidth: 4,
    borderBottomColor: "#132f51",
  },
  divider: {
    backgroundColor: "#ae73d2",
    alignSelf: "center",
    height: 3,
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
