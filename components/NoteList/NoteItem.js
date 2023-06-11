import { Dimensions, TouchableOpacity, View } from "react-native";
import Typography from "../Typography";
import formatDate from "../../functions/formatDate";

const NoteItem = ({ title, content, date }) => {
  const { width, height } = Dimensions.get("window");

  return (
    <TouchableOpacity>
      <View
        style={{
          flex: 0,
          flexDirection: "row",
          backgroundColor: "#F9F9F9",
          padding: 12,
          borderRadius: 10,
          marginTop: 8,
          marginBottom: 2,
        }}
      >
        <View style={{ width: width - 100 - 16 * 2 - 12 * 2 }}>
          <Typography
            numberOfLines={1}
            medium
            color="#1A1A1A"
            size={15}
            style={{ marginBottom: 3 }}
          >
            {title}
          </Typography>
          <Typography numberOfLines={1} color="#737373" size={13}>
            {content}
          </Typography>
        </View>
        <View style={{ width: 100, alignItems: "center" }}>
          <Typography color="#737373" size={13}>
            {formatDate(date)}
          </Typography>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NoteItem;
