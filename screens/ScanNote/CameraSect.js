import { Camera, FlashMode } from "expo-camera";
import { Dimensions, TouchableOpacity, View } from "react-native";
import Typography from "../../components/Typography";

const CameraSect = () => {
  const { width, height } = Dimensions.get("window");
  // const size = Camera.getAva
  return (
    <View style={{ flex: 1, width, height }}>
      <Camera style={{ flex: 1 }} autoFocus flashMode={FlashMode.off}>
        <View>
          {/* <TouchableOpacity onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity> */}
          <Typography>Hello World</Typography>
        </View>
      </Camera>
    </View>
  );
};

export default CameraSect;
