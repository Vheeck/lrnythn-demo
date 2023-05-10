import {
  Button as ReactButton,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Input = ({ children, style = {}, ...props }) => {
  return (
    <View style={[styles.input, style]}>
      <TextInput style={styles.field} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    // flex: 0,
    // justifyContent: "center",
    // alignItems: "center",
    padding: 16,
    width: "100%",
    backgroundColor: "#F6F8FA",
    // border: 1px solid #F0F0F0, 
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderRadius: 6,
  },
  field: {
    // border: "none",
    fontSize: 14,
    fontWeight: "400"
  },
});

export default Input;
