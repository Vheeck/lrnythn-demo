import { Dimensions, TouchableOpacity, View } from "react-native";
import Typography from "../Typography";
import formatDate from "../../functions/formatDate";

const ModuleTest = ({ name, description, scoreObtained, scoreObtainable }) => {
  const { width, height } = Dimensions.get("window");

  return (
    <TouchableOpacity>
      <View
        style={{
          flex: 0,
          flexDirection: "row",
          backgroundColor: "#F9F9F9",
          alignItems: "center",
          padding: 14,
          borderRadius: 12,
          marginTop: 8,
          // marginBottom: 2,
        }}
      >
        <View style={{ width: width - 100 - 16 * 2 - 12 * 2 }}>
          <Typography
            numberOfLines={1}
            medium
            color="#222B45"
            size={16}
            style={{ marginBottom: 8 }}
          >
            {name}
          </Typography>
          <Typography numberOfLines={1} color="#8F9BB3" size={12}>
            {description}
          </Typography>
        </View>
        <View style={{ width: 100, alignItems: "center" }}>
          <Typography color="#8F9BB3" size={8}>
            Test Score
          </Typography>
          <Typography color="#51087E" size={16} medium>
            {scoreObtained}/{scoreObtainable}
          </Typography>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ModuleTest;
