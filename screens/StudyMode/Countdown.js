import { StatusBar, Dimensions, View } from "react-native";
import TimeCounter from "../../components/TimeCounter";
import IconButton from "../../components/IconButton";
import {
  ArrowRotateLeft,
  PauseCircle,
  PlayCircle,
  Trash,
} from "iconsax-react-native";

const Countdown = ({
  currentTime,
  totalTime,
  paused,
  stopCountdown,
  resumeCountdown,
  pauseCountdown,
  handleReset,
}) => {
  const { width, height } = Dimensions.get("screen");

  return (
    <>
      <View
        style={{
          flex: 0,
          justifyContent: "center",
          height: height - 61 - 40 - 40 - 38 - StatusBar.currentHeight - 20,
        }}
      >
        <TimeCounter currentTime={currentTime} totalTime={totalTime} />
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={{ flex: 0, flexDirection: "row" }}>
          <IconButton
            onPress={handleReset}
            backgroundColor="#00000000"
            size={75}
            style={{ width: 75 }}
            icon={<Trash size={30} color="#ffffff" />}
          />
          <IconButton
            onPress={paused ? resumeCountdown : pauseCountdown}
            backgroundColor="#1C1044"
            size={75}
            style={{ width: 75 }}
            icon={
              paused ? (
                <PlayCircle size={41} color="#ffffff" />
              ) : (
                <PauseCircle size={41} color="#ffffff" />
              )
            }
          />
          <IconButton
            onPress={stopCountdown}
            backgroundColor="#00000000"
            size={75}
            style={{ width: 75 }}
            icon={<ArrowRotateLeft size={30} color="#ffffff" />}
          />
        </View>
      </View>
    </>
  );
};

export default Countdown;
