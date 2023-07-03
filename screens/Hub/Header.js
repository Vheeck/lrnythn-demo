import { Dimensions, Image, View } from "react-native";
import Typography from "../../components/Typography";
import IconButton from "../../components/IconButton";
import { Notification, SearchNormal1, More, Video, ArrowLeft2 } from "iconsax-react-native";

const Header = () => {
  const { width, height } = Dimensions.get("window");

  return (
    <View
      style={{
        width,
        height: 42,
        flex: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 4,
        borderColor: "#F1F1F1",
        borderBottomWidth: 1,
      }}
    >
      <View style={{ flex: 0, flexDirection: "row", alignItems: "center" }}>
        <View>
          <IconButton
            size={24}
            backgroundColor="#F4F6F8"
            icon={<ArrowLeft2 color="#51087E" variant="Linear" size={18} />}
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", margin: 8, marginLeft: 22 }}>
          <Typography size={13} color="#1A1A1A" style={{}}>
            Programming Study(12)
          </Typography>
        </View>
      </View>
      <View style={{ flex: 0, flexDirection: "row", alignItems: "center" }}>
        <View>
          <IconButton
            size={38}
            backgroundColor="#F4F6F8"
            icon={<Video color="#DA0000" variant="Linear" size={18} />}
          />
        </View>
        <View>
          <IconButton
            size={38}
            backgroundColor="#F4F6F8"
            style={{ marginLeft: 12 }}
            icon={<More color="#51087E" variant="Linear" size={18} />}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;
