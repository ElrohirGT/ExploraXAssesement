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
    <View onLayout={onLayoutChanged} style={styles.container}>
      <Text style={styles.progressText}>
        {current} / {max}
      </Text>
      <View style={[styles.progressContainer, { borderRadius: parentWidth }]}>
        <View
          style={[
            styles.progress,
            { width: (current * parentWidth) / max, borderRadius: parentWidth },
          ]}
        />
      </View>
    </View>
  );
}

const mobileStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  progressText: {
    color: "white",
    fontSize: 18,
  },

  progressContainer: {
    backgroundColor: "white",
    minWidth: 2,
  },

  progress: {
    height: 10,
    backgroundColor: "#e8a34b",
  },
});
const webStyles = StyleSheet.create({});
