import { StyleSheet, Text } from "react-native";

const Typography = ({
  children,
  style = {},
  size,
  color,
  fontWeight,
  medium,
  bold,
  ...props
}) => {
  return (
    <Text
      style={[
        styles.text,
        {
          color,
          fontFamily: medium
            ? "Work Sans 500"
            : bold
            ? "Work Sans 600"
            : "Work Sans",
          fontSize: size,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#737373",
    fontSize: 14,
  },
});

export default Typography;
