import { Dimensions, View } from "react-native";
import Logo from "../../components/Logo";
import Typography from "../../components/Typography";

const LoginHead = () => {

  const { width, height } = Dimensions.get("screen");

  return (
    <>
      <View style={{ alignItems: "center" }}>
        <View style={{ marginTop: 38, height: 57 }}>
          <Logo />
        </View>
        <View style={{ alignItems: "center", height: 90, marginTop: 32 }}>
          <Typography
            color="#1A1A1A"
            size={28}
            bold
            style={{
              lineHeight: 33,
              textAlign: "center",
              margin: 4,
              width: width * 3 / 5,
            }}
          >
            Welcome back, Isabel!
          </Typography>
          <Typography
            color="#9A9A9A"
            size={14}
            style={{
              textAlign: "center",
              width: width / 2,
              margin: 4,
            }}
          >
            Continue where you left off
          </Typography>
        </View>
      </View>
    </>
  );
};

export default LoginHead;
