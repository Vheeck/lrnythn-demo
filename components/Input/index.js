import {
  Dimensions,
  Button as ReactButton,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Input = ({
  style = {},
  fieldStyle = {},
  beforeIcon = null,
  afterIcon = null,
  type = "none",
  noBorder = false,
  ...props
}) => {
  const { width, height } = Dimensions.get("window");
  const mainWidth =
    beforeIcon && afterIcon
      ? width - 36 * 2 - 16 * 4
      : beforeIcon || afterIcon
      ? width - 36 - 16 * 4
      : "100%";

  return (
    <View style={[styles.input, { borderWidth: noBorder ? 0 : 1 }, style]}>
      {beforeIcon ? (
        <View style={{ width: 20, marginRight: 16 }}>{beforeIcon}</View>
      ) : null}
      <View style={{ width: mainWidth }}>
        <TextInput
          placeholderTextColor="#9A9A9A"
          style={[styles.field, fieldStyle]}
          textContentType={type}
          {...(type === "password" ? { secureTextEntry: true } : null)}
          {...props}
        />
      </View>
      {afterIcon ? (
        <View style={{ width: 20, marginLeft: 8 }}>{afterIcon}</View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 0,
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
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
    fontWeight: "400",
    fontFamily: "Work Sans",
    width: "100%",
    // display: "flex",
    // flexGrow: 0,
  },
});

export default Input;
