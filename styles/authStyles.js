import { Dimensions, StyleSheet } from "react-native";

const authStyles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    verticalAlign: "auto",
    backgroundColor: "#fff",
    height: Dimensions.get("screen").height,
    padding: 16,
    paddingTop: 38,
    paddingBottom: 88,
  },
  hr: {
    flex: 1,
    height: 1,
    backgroundColor: "#9A9A9A",
  },
});

export default authStyles;
