import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Svg, { G, Circle, Line } from "react-native-svg";
import Typography from "../Typography";

const ProgressBar = ({ currentAmount = 1, targetAmount = 100, percentage = 0 }) => {
  // const radius = 70;
  // const circleCircumference = 2 * Math.PI * radius;

  percentage = percentage ? percentage : (currentAmount / targetAmount) * 100;

  const x = 10 + Math.round((percentage/100) * 343);

  // const strokeDashoffset =
  //   circleCircumference - (circleCircumference * percentage) / 100;

  return (
    <View style={styles.container}>
      <View style={styles.graphWrapper}>
        <Svg height="6" width="363">
          <Line x1="10" y1="3" x2="353" y2="3" stroke="#5E168B"strokeWidth="6" strokeLinecap="round" />
          <Line x1="10" y1="3" x2={x} y2="3" stroke="#F5E4FF"strokeWidth="6" strokeLinecap="round" />
        </Svg>
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  graphWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
});
