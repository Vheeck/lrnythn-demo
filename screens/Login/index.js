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
  LogoutCurve,
  PasswordCheck,
  Sms,
  User,
} from "iconsax-react-native";
import IconButton from "../../components/IconButton";
import LoginHead from "./LoginHead";
import LoginForm from "./LoginForm";
import authStyles from "../../styles/authStyles";

const LoginScreen = ({ navigation }) => {
  const { navigate } = navigation;

  const { width, height } = Dimensions.get("screen");

  return (
    <>
      <ScrollView
        contentContainerStyle={{ width, height }}
        alwaysBounceVertical={true}
        automaticallyAdjustKeyboardInsets={true}
      >
        <View style={authStyles.container}>
          <LoginHead />
          <LoginForm navigate={navigate} />
          <Button
            onPress={() => navigate("Create Account")}
            style={{ marginTop: 32, marginBottom: 32 }}
            backgroundColor="#F5E4FF"
            color="#51087E"
            beforeIcon={
              <LogoutCurve color="#51087E" variant="Linear" size={20} />
            }
          >
            Sign Out
          </Button>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    verticalAlign: "auto",
    backgroundColor: "#fff",
    height: Dimensions.get("screen").height,
    padding: 16,
    paddingBottom: 88,
  },
  hr: {
    flex: 1,
    height: 1,
    backgroundColor: "#9A9A9A",
  },
});

export default LoginScreen;
