import { Dimensions, Image, View } from "react-native";
import Typography from "../../components/Typography";
import IconButton from "../../components/IconButton";
import { Notification, SearchNormal1 } from "iconsax-react-native";

const Header = () => {
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
      <View style={{ flex: 0, flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{ width: 32, height: 32, borderRadius: 32 }}
          source={require("../../assets/user.png")}
        />
        <View style={{ flexDirection: "row", margin: 8 }}>
          <Typography size={15} color="#1A1A1A" style={{}}>
            Hey,{" "}
          </Typography>
          <Typography size={15} medium color="#1A1A1A" style={{}}>
            Isabel!
          </Typography>
          <Typography size={15} color="#1A1A1A" style={{}}>
          {" "}👋🏻
          </Typography>
        </View>
      </View>
      <View style={{ flex: 0, flexDirection: "row", alignItems: "center" }}>
        <View>
          <IconButton
            size={32}
            backgroundColor="#F4F6F8"
            icon={<SearchNormal1 color="#51087E" variant="Linear" size={18} />}
          />
        </View>
        <View>
          <IconButton
            size={32}
            backgroundColor="#F4F6F8"
            style={{ marginLeft: 12 }}
            icon={<Notification color="#51087E" variant="Bold" size={18} />}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;
