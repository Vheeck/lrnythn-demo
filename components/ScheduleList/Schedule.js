import { Dimensions, TouchableOpacity, View } from "react-native";
import Typography from "../Typography";
import formatDate from "../../functions/formatDate";
import { More } from "iconsax-react-native";

const Schedule = ({ title, description, startTime, endTime }) => {
  const { width, height } = Dimensions.get("window");

  return (
    <TouchableOpacity>
      <View
        style={{
          flex: 0,
          // flexDirection: "row",
          backgroundColor: "#F9F9F9",
          // alignItems: "center",
          paddingVertical: 16,
          paddingHorizontal: 14,
          borderRadius: 12,
          marginTop: 8,
          // marginBottom: 2,
        }}
      >
        <View
          style={{
            width: width - 32 - 28,
            flex: 0,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <View style={{ flex: 0, flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 10,
                height: 10,
                borderWidth: 3,
                borderRadius: 5,
                borderColor: "#51087E",
              }}
            ></View>
            <Typography color="#8F9BB3" size={12} style={{ marginLeft: 10 }}>
              {startTime}-{endTime}
            </Typography>
          </View>
          <TouchableOpacity>
            <More color="#8F9BB3" size={18} />
          </TouchableOpacity>
        </View>
        <View style={{ width: width - 100 - 16 * 2 - 12 * 2 }}>
          <Typography
            numberOfLines={1}
            medium
            color="#222B45"
            size={16}
            style={{ marginVertical: 8 }}
          >
            {title}
          </Typography>
          <Typography numberOfLines={1} color="#8F9BB3" size={12}>
            {description}
          </Typography>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Schedule;
