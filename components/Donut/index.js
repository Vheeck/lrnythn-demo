import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import Typography from "../Typography";

const Donut = ({ currentAmount = 1, targetAmount = 100, percentage = 0 }) => {
  const radius = 70;
  const circleCircumference = 2 * Math.PI * radius;

  percentage = percentage ? percentage : (currentAmount / targetAmount) * 100;

  const strokeDashoffset =
    circleCircumference - (circleCircumference * percentage) / 100;

  return (
    <View style={styles.container}>
      <View style={styles.graphWrapper}>
        <Svg height="200" width="200">
          <G rotation={270} originX="100" originY="100">
            <Circle
              cx="100"
              cy="100"
              r={radius}
              stroke="#692096"
              fill="transparent"
              strokeWidth="24"
            />
            <Circle
              cx="100"
              cy="100"
              r={radius}
              stroke="#FFFFFF"
              fill="transparent"
              strokeWidth="24"
              strokeDasharray={circleCircumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </G>
        </Svg>
        <Typography
          color="#FFFFFF"
          bold
          size={40}
          style={{ position: "absolute" }}
        >
          {percentage}%
        </Typography>
      </View>
    </View>
  );
};

{
  /* <circle cx="100" cy="100" r="70" stroke="#692096" stroke-width="24" fill-opacity="0" />
  <circle cx="100" cy="100" r="70" stroke="#aaaaaa" stroke-width="24" fill-opacity="0" stroke-dasharray="440" stroke-dashoffset="110" stroke-linecap="round" /> */
}

export default Donut;

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
