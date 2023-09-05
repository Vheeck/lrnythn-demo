import {
  AddCircle,
  Calendar,
  Home,
  Note,
  Setting2,
} from "iconsax-react-native";
import { Dimensions, TouchableOpacity, View } from "react-native";

const BottomNav = ({ open, navigate }) => {
  const { width, height } = Dimensions.get("window");

  return (
    <View
      style={{
        flex: 0,
        flexDirection: "row",
        width,
        borderTopColor: "#F1F1F1",
        borderTopWidth: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 8,
        paddingBottom: 8,
        padding: 16,
        backgroundColor: "#FFFFFF",
      }}
    >
      <TouchableOpacity onPress={() => navigate("Hub")}>
        <Home size={22} variant="Bulk" color="#51087E" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("Notes")}>
        <Note size={22} variant="Linear" color="#737373" />
      </TouchableOpacity>
      <TouchableOpacity onPress={open}>
        <AddCircle size={36} variant="Bold" color="#51087E" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("Hub")}>
        <Calendar size={22} variant="Linear" color="#737373" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("New Screen")}>
        <Setting2 size={22} variant="Linear" color="#737373" />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;
