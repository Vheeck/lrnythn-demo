import { Dimensions, Image, View } from "react-native";
import Typography from "../../components/Typography";
import IconButton from "../../components/IconButton";
import { Notification, SearchNormal1 } from "iconsax-react-native";

const HomeHeader = ({ color }) => {
  const { width, height } = Dimensions.get("window");

  const textColor = color === "white" ? "#ffffff" : "#1A1A1A";
  const iconColor = color === "white" ? "#ffffff" : "#51087E";
  const iconBgColor = "rgba(255, 255, 255, 0.2)";

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
      <View style={{ flex: 0, flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{ width: 32, height: 32, borderRadius: 32 }}
          source={require("../../assets/user.png")}
        />
        <View style={{ flexDirection: "row", margin: 8 }}>
          <Typography size={15} color={textColor} style={{}}>
            Hey,{" "}
          </Typography>
          <Typography size={15} medium color={textColor} style={{}}>
            Isabel!
          </Typography>
          <Typography size={15} color={textColor} style={{}}>
            {" "}
            👋🏻
          </Typography>
        </View>
      </View>
      <View style={{ flex: 0, flexDirection: "row", alignItems: "center" }}>
        <View>
          <IconButton
            size={32}
            backgroundColor={iconBgColor}
            icon={<SearchNormal1 color={iconColor} variant="Linear" size={18} />}
          />
        </View>
        <View>
          <IconButton
            size={32}
            backgroundColor={iconBgColor}
            style={{ marginLeft: 12 }}
            icon={<Notification color={iconColor} variant="Bold" size={18} />}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
