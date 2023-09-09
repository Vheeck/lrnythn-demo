import { View } from "react-native";
import { Dimensions, StatusBar } from "react-native";
import { TimePicker } from "react-native-simple-time-picker";
import Button from "../../components/Button";
import Typography from "../../components/Typography";

const SetTimer = ({ time, handleChange, startCountdown }) => {
  const { width, height } = Dimensions.get("screen");

  return (
    <>
      <View style={{ paddingVertical: 18 }}>
        <Typography style={{ textAlign: "center" }} color="#B787D4">
          Set your study timer
        </Typography>
      </View>
      <View
        style={{
          flex: 0,
          marginTop: 8,
          height: height - 61 - 40 - 40 - 38 - StatusBar.currentHeight - 20,
          // alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <View
          style={{
            flex: 0,
            flexDirection: "row",
            marginTop: 40,
            marginBottom: 72,
          }}
        >
          <View style={{ width: width / 3 }}>
            <Typography
              style={{ textAlign: "center" }}
              color="#ffffff"
              size={15}
            >
              Hours
            </Typography>
          </View>
          <View style={{ width: width / 3 }}>
            <Typography
              style={{ textAlign: "center" }}
              color="#ffffff"
              size={15}
            >
              Minutes
            </Typography>
          </View>
          <View style={{ width: width / 3 }}>
            <Typography
              style={{ textAlign: "center" }}
              color="#ffffff"
              size={15}
            >
              Seconds
            </Typography>
          </View>
        </View>
        <TimePicker
          value={time}
          onChange={handleChange}
          pickerShows="hours|minutes|seconds"
        />
      </View>
      <View style={{ paddingHorizontal: 16 }}>
        <Button
          backgroundColor="#ffffff"
          color="#51087E"
          onPress={startCountdown}
        >
          Start Countdown
        </Button>
      </View>
    </>
  );
};

export default SetTimer;
