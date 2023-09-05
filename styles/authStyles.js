import { Dimensions, StyleSheet } from "react-native";

const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    verticalAlign: "auto",
    backgroundColor: "#fff",
    // minHeight: Dimensions.get("screen").height,
    padding: 16,
    paddingTop: 38,
    paddingBottom: 88,
  },
  hr: {
    flex: 1,
    height: 1,
  },
});

export default authStyles;
