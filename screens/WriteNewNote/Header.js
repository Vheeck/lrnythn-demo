import { Dimensions, Image, View } from "react-native";
import Typography from "../../components/Typography";
import IconButton from "../../components/IconButton";
import { Notification, SearchNormal1 } from "iconsax-react-native";

const Header = ({ back }) => {
  const { width, height } = Dimensions.get("window");

  return (
    <View
      style={{
        width,
        height: 32,
        flex: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
      <View>
        <IconButton
          size={32}
          backgroundColor="#F4F6F8"
          icon={
            <Image
              style={{ width: 13.2, height: 13 }}
              source={require("../../assets/times.png")}
            />
          }
          onPress={() => back()}
        />
      </View>
      <View>
        <Typography medium size={16}>
          Add New Note
        </Typography>
      </View>
      <View>
        <IconButton
          size={32}
          backgroundColor="#F4F6F8"
          icon={
            <Image
              style={{ width: 12, height: 8.2 }}
              source={require("../../assets/check.png")}
            />
          }
        />
      </View>
    </View>
  );
};

export default Header;
