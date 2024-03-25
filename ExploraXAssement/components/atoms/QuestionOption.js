import { useState } from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";
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
  const [buttonDimensions, setButtonDimensions] = useState({
    width: 0,
    height: 0,
  });
  const onLayoutChange = (e) => {
    const { width, height } = e.nativeEvent.layout;
    setButtonDimensions({ width, height });
  };

  const styles = generateStyles(
    buttonDimensions.width,
    buttonDimensions.height,
  );

  const [isSelected, setIsSelected] = useState(false);
  const onPress = () => {
    setIsSelected(true);
    onSelected();
  };

  const isSelectedAndCorrect = isSelected && isAnswered === IS_CORRECT;
  const isSelectedAndIncorrect = isSelected && isAnswered === IS_INCORRECT;
  const isCorrectButNotSelected = isCorrectAnswer && !isSelected && isAnswered !== NOT_ANSWERED;

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
      {isCorrectButNotSelected
        ? (
          <Image
            source={correctIcon}
            style={styles.correctIcon}
            resizeMode="contain"
          />
        )
        : null}
      <Text style={styles.optionText}>{value}</Text>
    </Pressable>
  );
}

function generateStyles(buttonWidth, buttonHeight) {
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
      top: -buttonHeight / 5,
      left: buttonWidth - 20,
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

  return StyleSheet.flatten(mobileStyles, webStyles);
}
