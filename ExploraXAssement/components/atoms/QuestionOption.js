import { Pressable, Text, StyleSheet } from "react-native";

export default function QuestionOption({ value, parentWidth, onSelected }) {
  const styles = StyleSheet.flatten(mobileStyles, webStyles);

  return (
    <Pressable
      style={[styles.optionButton, { width: parentWidth / 2.1 }]}
      onPress={onSelected}
    >
      <Text style={styles.optionText}>{value}</Text>
    </Pressable>
  );
}

const mobileStyles = StyleSheet.create({
  optionButton: {
    backgroundColor: "#6ab1b5",
    borderBottomColor: "#448b8c",
    borderBottomWidth: 4,
    padding: 5,
    borderRadius: 10,
  },

  optionText: {
    color: "white",
    fontSize: 40,
    alignSelf: "center",
    fontWeight: "bold",
  },
});

const webStyles = StyleSheet.create({});
