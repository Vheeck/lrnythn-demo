import {
  Button as ReactButton,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const IconButton = ({
  style = {},
  size = 42,
  backgroundColor = "#FEF7FE",
  icon = null,
  ...props
}) => {
  return (
    <TouchableOpacity style={{ width: "100%" }} {...props}>
      <View
        style={[
          styles.button,
          { width: size, height: size, backgroundColor, borderRadius: size },
          style,
        ]}
      >
        {icon}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width: "100%",
    backgroundColor: "#51087E",
    borderRadius: 6,
  },
});

export default IconButton;
