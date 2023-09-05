import { TouchableOpacity, View } from "react-native";
import Typography from "../../components/Typography";

const OptionButton = ({ icon, text, color, onPress }) => {
  const Icon = icon;
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            flex: 0,
            alignItems: "center",
            paddingHorizontal: 16,
            paddingTop: 22,
            paddingBottom: 5,
          }}
        >
          <View>
            <Icon color="#D2A8FF" />
          </View>
          <Typography color={color}>{text}</Typography>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default OptionButton;
