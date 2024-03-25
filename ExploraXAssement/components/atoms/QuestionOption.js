import { useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { IS_CORRECT, IS_INCORRECT, NOT_ANSWERED } from "../../lib";

export default function QuestionOption({
  value,
  parentWidth,
  onSelected,
  isAnswered,
}) {
  const styles = StyleSheet.flatten(mobileStyles, webStyles);
  const [isSelected, setIsSelected] = useState(false);
  const onPress = () => {
    setIsSelected(true);
    onSelected();
  };

  const isSelectedAndCorrect = isSelected && isAnswered === IS_CORRECT;
  const isSelectedAndIncorrect = isSelected && isAnswered === IS_INCORRECT;

  return (
    <Pressable
      style={[
        styles.optionButton,
        isSelectedAndCorrect ? styles.correctlySelectedButton : {},
        isSelectedAndIncorrect ? styles.incorrectlySelectedButton : {},
        { width: parentWidth / 2.1 },
      ]}
      onPress={onPress}
      disabled={isAnswered !== NOT_ANSWERED}
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

  correctlySelectedButton: {
    backgroundColor: "#6fba3b",
    borderBottomColor: "#4f9c2f",
  },

  incorrectlySelectedButton: {
    backgroundColor: "#e4323c",
    borderBottomColor: "#b12b41",
  },

  optionText: {
    color: "white",
    fontSize: 40,
    alignSelf: "center",
    fontWeight: "bold",
  },
});

const webStyles = StyleSheet.create({});
