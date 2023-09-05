import { View } from "react-native";
import authStyles from "../../styles/authStyles";

const Hr = ({ color = "#9A9A9A" }) => (
  <View style={[authStyles.hr, { backgroundColor: color }]} />
);

export default Hr;
