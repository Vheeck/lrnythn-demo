import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import Typography from "../../components/Typography";
import {
  ArrowRight,
  EmojiHappy,
  Eye,
  EyeSlash,
  PasswordCheck,
  Sms,
  User,
} from "iconsax-react-native";
import IconButton from "../../components/IconButton";
import authStyles from "../../styles/authStyles";

const PasswordView = ({ shown, ...props }) =>
  shown ? <Eye {...props} /> : <EyeSlash {...props} />;

const CreateAccountScreen = ({ navigation }) => {
  const { navigate } = navigation;

  const { width, height } = Dimensions.get("screen");

  const [seePassword, setSeePassword] = useState(false);
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);

  return (
    <>
      <ScrollView
        contentContainerStyle={{ width, height }}
        alwaysBounceVertical={true}
        automaticallyAdjustKeyboardInsets={true}
      >
        <View style={authStyles.container}>
          <View style={{ margin: 33 }}>
            <Logo />
          </View>
          <View style={{ flex: 1, alignItems: "center", paddingBottom: 30 }}>
            <Typography
              color="#1A1A1A"
              size={28}
              bold
              style={{
                lineHeight: 33,
                textAlign: "center",
                margin: 4,
                width: 210,
              }}
            >
              Create Account
            </Typography>
            <Typography
              color="#9A9A9A"
              size={14}
              style={{
                textAlign: "center",
                paddingLeft: 104,
                paddingRight: 104,
                margin: 4,
              }}
            >
              Enter your details below to create an account
            </Typography>
          </View>
          <Input
            placeholder="Full Name"
            type="name"
            beforeIcon={<User color="#737373" variant="Linear" size={20} />}
            style={{ marginTop: 8, marginBottom: 8 }}
          />
          <Input
            placeholder="Email Address"
            type="emailAddress"
            beforeIcon={<Sms color="#737373" variant="Linear" size={20} />}
            style={{ marginTop: 8, marginBottom: 8 }}
          />
          <Input
            placeholder="Password"
            type={seePassword ? "text" : "password"}
            beforeIcon={
              <PasswordCheck color="#737373" variant="Linear" size={20} />
            }
            afterIcon={
              <TouchableOpacity onPress={() => setSeePassword(!seePassword)}>
                <PasswordView
                  shown={seePassword}
                  color="#737373"
                  variant="Linear"
                  size={20}
                />
              </TouchableOpacity>
            }
            style={{ marginTop: 8, marginBottom: 8 }}
          />
          <Input
            placeholder="Confirm Password"
            type={seeConfirmPassword ? "text" : "password"}
            beforeIcon={
              <PasswordCheck color="#737373" variant="Linear" size={20} />
            }
            afterIcon={
              <TouchableOpacity
                onPress={() => setSeeConfirmPassword(!seeConfirmPassword)}
              >
                <PasswordView
                  shown={seeConfirmPassword}
                  color="#737373"
                  variant="Linear"
                  size={20}
                />
              </TouchableOpacity>
            }
            style={{ marginTop: 8, marginBottom: 8 }}
          />
          <Button
            onPress={() => navigate("Home")}
            style={{ marginTop: 32, marginBottom: 32 }}
            afterIcon={<ArrowRight color="#fff" variant="Linear" size={20} />}
          >
            Create Account
          </Button>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={authStyles.hr} />
            <Typography
              style={{ marginLeft: 8, marginRight: 8 }}
              color="#737373"
            >
              Or sign up with
            </Typography>
            <View style={authStyles.hr} />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <IconButton
                style={{ marginRight: 6 }}
                icon={
                  <Image
                    style={{ width: 22, height: 22 }}
                    source={require("../../assets/google.png")}
                  />
                }
              />
            </View>
            <View>
              <IconButton
                style={{ marginLeft: 6 }}
                icon={
                  <Image
                    style={{ width: 18, height: 22 }}
                    source={require("../../assets/apple.png")}
                  />
                }
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography color="#737373">Already have an account? </Typography>
            <TouchableOpacity onPress={() => navigate("Login")}>
              <Typography color="#51087E" medium>
                Login{" "}
              </Typography>
            </TouchableOpacity>
          </View>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    paddingTop: 36 + StatusBar.currentHeight,
    paddingBottom: 36,
  },
});

export default CreateAccountScreen;
