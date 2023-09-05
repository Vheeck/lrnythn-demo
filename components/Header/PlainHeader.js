import { Dimensions, Image, TouchableOpacity, View } from "react-native";
import Typography from "../../components/Typography";
import IconButton from "../../components/IconButton";
import { ArrowLeft2, Notification, SearchNormal1 } from "iconsax-react-native";

const PlainHeader = ({ title, color, goBack, align = "left" }) => {
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
      <TouchableOpacity onPress={goBack}>
        <View style={{ flex: 0, flexDirection: "row", alignItems: "center" }}>
          <View>
            <IconButton
              size={32}
              backgroundColor={iconBgColor}
              icon={<ArrowLeft2 color={iconColor} variant="Linear" size={18} />}
            />
          </View>
          <View style={{ width: width - 32 - 16 - 16 - 48 }}>
            <Typography
              style={{ textAlign: align, marginLeft: 20 }}
              size={14}
              color="#FFFFFF"
            >
              {title}
            </Typography>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PlainHeader;
