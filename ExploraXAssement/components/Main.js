import { View, StyleSheet } from "react-native";

export default function Main() {
  const styles = StyleSheet.flatten(mobileStyles, webStyles);
  return <View style={styles.container}></View>;
}

const mobileStyles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: "blue",
  },
});
const webStyles = StyleSheet.create({});
