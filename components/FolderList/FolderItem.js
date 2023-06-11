import { TouchableOpacity, View } from "react-native";
import Typography from "../Typography";
import { FolderOpen } from "iconsax-react-native";

const FolderItem = ({ name, contents }) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          flex: 0,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#F9F9F9",
          padding: 14,
          paddingLeft: 16,
          paddingRight: 16,
          borderRadius: 10,
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FolderOpen color="#292D32" size={20} />
          <Typography
            numberOfLines={1}
            color="#1A1A1A"
            size={15}
            style={{ marginLeft: 13 }}
          >
            {name}
          </Typography>
        </View>
        <Typography color="#737373" size={13}>
          {contents}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

export default FolderItem;
