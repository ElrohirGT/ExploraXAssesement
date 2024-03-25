import { useState } from "react";
import { Pressable, Text, StyleSheet, Image } from "react-native";
import { IS_CORRECT, IS_INCORRECT, NOT_ANSWERED } from "../../lib";

const correctIcon = require("../../assets/elementos_estaticos/check.png");

/**
 * Props for the `QuestionOptions` component
 * @typedef {Object} QuestionOptionProps
 * @property {*} value - The value of the answer
 * @property {number} parentWidth - The width of the parent object
 * @property {Function} onSelected - The function to run when the value is selected
 * @property {string} isAnswered - Flag that indicates the question state
 * @property {boolean} isCorrectAnswer - Flag that indicates if this option is a correct answer
 */

/**
 * @param {QuestionOptionProps} props
 */
export default function QuestionOption({
  value,
  parentWidth,
  onSelected,
  isAnswered,
  isCorrectAnswer,
}) {
  const styles = StyleSheet.flatten(mobileStyles, webStyles);
  const [isSelected, setIsSelected] = useState(false);
  const onPress = () => {
    setIsSelected(true);
    onSelected();
  };

  const [buttonDimensions, setButtonDimensions] = useState({
    width: 0,
    height: 0,
  });
  const onLayoutChange = (e) => {
    const { width, height } = e.nativeEvent.layout;
    setButtonDimensions({ width, height });
  };

  const isSelectedAndCorrect = isSelected && isAnswered === IS_CORRECT;
  const isSelectedAndIncorrect = isSelected && isAnswered === IS_INCORRECT;
  const isCorrectButNotSelected =
    isCorrectAnswer && !isSelected && isAnswered !== NOT_ANSWERED;

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
      onLayout={onLayoutChange}
    >
      {isCorrectButNotSelected ? (
        <Image
          source={correctIcon}
          style={[
            styles.correctIcon,
            {
              transform: [
                { translateX: buttonDimensions.width * 0.85 },
                { translateY: buttonDimensions.height * -0.15 },
              ],
            },
          ]}
          resizeMode="contain"
        />
      ) : null}
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

  correctIcon: {
    width: 32,
    height: 32,
    position: "absolute",
    transform: [{ translateX: 110 }],
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
