import {
  Button as ReactButton,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Button = ({ children, style = {}, ...props }) => {
  return (
    <TouchableOpacity style={[{ width: "100%" }, style]} {...props}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width: "100%",
    backgroundColor: "#51087E",
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default Button;
