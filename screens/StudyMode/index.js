import { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Dimensions, StatusBar } from "react-native";
import Typography from "../../components/Typography";
import authStyles from "../../styles/authStyles";
import { LinearGradient } from "expo-linear-gradient";
// import OptionButton from "./OptionButton";
import { PlainHeader } from "../../components/Header";
import { TimePicker } from "react-native-simple-time-picker";
import Button from "../../components/Button";
import TimeCounter from "../../components/TimeCounter";
import SetTimer from "./SetTimer";
import IconButton from "../../components/IconButton";
import {
  ArrowRotateLeft,
  PauseCircle,
  PlayCircle,
  RotateLeft,
  Trash,
} from "iconsax-react-native";
import Countdown from "./Countdown";

const StudyModeScreen = ({ navigation }) => {
  const { navigate, goBack } = navigation;

  const { width, height } = Dimensions.get("screen");

  const [mode, setMode] = useState("timer");

  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  const [totalTime, setTotalTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const [paused, setPaused] = useState(false);

  const timer = useRef(0);
  const timerId = useRef(null);

  const handleChange = ({ hours, minutes, seconds }) => {
    setTime({ hours, minutes, seconds });
  };
  const handleReset = () => {
    setTime({ hours: 0, minutes: 0, seconds: 0 });
    setTotalTime(0);
    setCurrentTime(0);
    setMode("timer");
  };

  const countFunc = () => {
    if (timer.current > 0) {
      timer.current -= 1;
      setCurrentTime(timer.current);
    } else {
      stopCountdown();
    }
  };

  const startCountdown = () => {
    const totalSeconds =
      time.hours * 60 * 60 + time.minutes * 60 + time.seconds;

    setTotalTime(totalSeconds);

    timer.current = totalSeconds;
    setCurrentTime(timer.current);

    setMode("countdown");

    timerId.current = setInterval(countFunc, 1000);
  };

  const pauseCountdown = () => {
    clearInterval(timerId.current);
    setPaused(true);
  };

  const resumeCountdown = () => {
    timerId.current = setInterval(countFunc, 1000);
    setPaused(false);
  };

  const stopCountdown = () => {
    clearInterval(timerId.current);
    setMode("timer");
  };

  return (
    <>
      <View style={[authStyles.container, { paddingTop: 0 }]}>
        <LinearGradient
          colors={["#51087E", "#000027"]}
          style={{
            width,
            height,
            paddingTop: 38,
          }}
        >
          <View
            style={{
              flex: 3,
              flexDirection: "column",
              height,
              flexWrap: "nowrap",
            }}
          >
            <PlainHeader
              title="Study Mode"
              align="center"
              color="white"
              goBack={goBack}
            />
            {mode === "timer" ? (
              <SetTimer
                time={time}
                handleChange={handleChange}
                startCountdown={startCountdown}
              />
            ) : (
              <Countdown
                currentTime={currentTime}
                totalTime={totalTime}
                paused={paused}
                stopCountdown={stopCountdown}
                resumeCountdown={resumeCountdown}
                pauseCountdown={pauseCountdown}
                handleReset={handleReset}
              />
            )}
          </View>
        </LinearGradient>
        <StatusBar style="light" backgroundColor="#51087E" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    paddingTop: 36 + StatusBar.currentHeight,
    paddingBottom: 36,
  },
});

export default StudyModeScreen;
