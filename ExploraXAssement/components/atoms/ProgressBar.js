import { useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";

/**
 * @typedef {Object} ProgressBarProps
 * @property {Number} max - The max progress of the bar.
 * @property {Number} current - The current progress of the bar.
 */
/**
 * @param {ProgressBarProps} props
 */
export default function ProgressBar({ max, current }) {
  const styles = StyleSheet.flatten(mobileStyles, webStyles);
  const [parentWidth, setParentWidth] = useState(1);
  const onLayoutChanged = (event) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setParentWidth(width);
  };

  return (
    <View
      style={[styles.progressContainer, { borderRadius: parentWidth }]}
      onLayout={onLayoutChanged}
    >
      <View
        style={[
          styles.progress,
          { width: (current * parentWidth) / max, borderRadius: parentWidth },
        ]}
      />
    </View>
  );
}

const mobileStyles = StyleSheet.create({
  progressContainer: {
    backgroundColor: "white",
    minWidth: 2,
    alignSelf: "stretch",
    borderBottomColor: "#8d8d8d",
    borderBottomWidth: 2,
  },

  progress: {
    height: 15,
    backgroundColor: "#e8a34b",
  },
});
const webStyles = StyleSheet.create({});
