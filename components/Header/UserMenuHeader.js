import { Dimensions, Image, View } from "react-native";
import Typography from "../../components/Typography";
import IconButton from "../../components/IconButton";
import {
  HambergerMenu,
  Menu,
  MenuBoard,
  Notification,
  SearchNormal1,
} from "iconsax-react-native";

const UserMenuHeader = ({ color, title }) => {
  const { width, height } = Dimensions.get("window");

  const textColor = color === "white" ? "#ffffff" : "#1A1A1A";
  const iconColor = color === "white" ? "#ffffff" : "#51087E";
  const iconBgColor = "rgba(255, 255, 255, 0.2)";

  return (
    <View
      style={{
        width,
        // height: 32,
        flex: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flex: 0, flexDirection: "row", alignItems: "center" }}>
        <View style={{ width: width * 0.1, paddingLeft: 16 }}>
          <IconButton
            size={32}
            backgroundColor={iconBgColor}
            icon={
              <HambergerMenu color={iconColor} variant="Linear" size={18} />
            }
          />
        </View>
        <View style={{ width: width * 0.8 }}>
          <Typography
            size={15}
            medium
            color={textColor}
            style={{ textAlign: "center" }}
          >
            {title}
          </Typography>
        </View>
        <View style={{ width: width * 0.1, paddingRight: 16 }}>
          <Image
            style={{ width: 32, height: 32, borderRadius: 32 }}
            source={require("../../assets/user.png")}
          />
        </View>
      </View>
    </View>
  );
};

export default UserMenuHeader;
