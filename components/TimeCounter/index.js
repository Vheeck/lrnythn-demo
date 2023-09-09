import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import Typography from "../Typography";

const TimeCounter = ({ currentTime = 1, totalTime = 100 }) => {
  const radius = 120;
  const circleCircumference = 2 * Math.PI * radius;

  percentage = (currentTime / totalTime) * 100;

  const strokeDashoffset =
    circleCircumference - (circleCircumference * percentage) / 100;

  const degrees = (360 * currentTime) / totalTime;
  const rads = (degrees * Math.PI) / 180;

  const monitorCY = 100 + radius * Math.sin(rads);
  const monitorCX = 100 + radius * Math.cos(rads);

  const hh = Math.floor(currentTime / 60 / 60)
    .toString()
    .padStart(2, "0");
  const mm = Math.floor((currentTime - hh * 60 * 60) / 60)
    .toString()
    .padStart(2, "0");
  const ss = Math.floor(currentTime - hh * 60 * 60 - mm * 60)
    .toString()
    .padStart(2, "0");

  return (
    <View style={styles.container}>
      <View style={styles.graphWrapper}>
        <Svg height="250" width="250">
          <G rotation={270} originX="125" originY="100">
            <Circle
              cx="100"
              cy="100"
              r={radius}
              stroke="#FFFFFF"
              fill="transparent"
              strokeWidth="3"
              strokeDasharray="5,5"
            />
            <Circle
              cx="100"
              cy="100"
              r={radius}
              stroke="#FFFFFF"
              fill="transparent"
              strokeWidth="3"
              strokeDasharray={circleCircumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
            <Circle cx={monitorCX} cy={monitorCY} r={7} fill="#ffffff" />
          </G>
        </Svg>
        <Typography
          color="#FFFFFF"
          size={40}
          style={{ position: "absolute" }}
        >
          {hh}:{mm}:{ss}
        </Typography>
      </View>
    </View>
  );
};

{
  /* <circle cx="100" cy="100" r="70" stroke="#692096" stroke-width="24" fill-opacity="0" />
  <circle cx="100" cy="100" r="70" stroke="#aaaaaa" stroke-width="24" fill-opacity="0" stroke-dasharray="440" stroke-dashoffset="110" stroke-linecap="round" /> */
}

export default TimeCounter;

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
