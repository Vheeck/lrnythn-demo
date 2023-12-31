import {
  Button as ReactButton,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Button = ({
  children,
  style = {},
  beforeIcon = null,
  afterIcon = null,
  backgroundColor = "#51087E",
  color = "#ffffff",
  ...props
}) => {
  return (
    <TouchableOpacity style={[{ width: "100%" }, style]} {...props}>
      <View style={[styles.button, { backgroundColor }]}>
        {beforeIcon}
        <Text style={[styles.buttonText, { color }]}>{children}</Text>
        {afterIcon}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 0,
    flexGrow: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width: "100%",
    backgroundColor: "#51087E",
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Work Sans",
    marginLeft: 8,
    marginRight: 8,
  },
});

export default Button;
