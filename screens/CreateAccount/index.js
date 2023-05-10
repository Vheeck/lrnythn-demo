import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Logo from "../../components/Logo";

const CreateAccountScreen = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <View style={styles.container}>
      <Logo />
      <View style={{ paddingLeft: 82, paddingRight: 82, paddingBottom: 30 }}>
        <Text
          style={{
            color: "#1A1A1A",
            fontSize: 28,
            fontWeight: "600",
            lineHeight: 33,
            textAlign: "center",
            margin: 4,
          }}
        >
          Create Account
        </Text>
        <Text
          style={{
            color: "#9A9A9A",
            fontSize: 14,
            textAlign: "center",
            paddingLeft: 36,
            paddingRight: 36,
            margin: 4,
          }}
        >
          Enter your details below to create an account
        </Text>
      </View>
      <Input
        placeholder="Full Name"
        style={{ marginTop: 8, marginBottom: 8 }}
      />
      <Input
        placeholder="Email Address"
        style={{ marginTop: 8, marginBottom: 8 }}
      />
      <Input placeholder="Password" style={{ marginTop: 8, marginBottom: 8 }} />
      <Input
        placeholder="Confirm Password"
        style={{ marginTop: 8, marginBottom: 8 }}
      />
      <Button
        onPress={() => navigate("Home")}
        style={{ marginTop: 32, marginBottom: 32 }}
      >
        Create Account
      </Button>
      <Text style={{ color: "#737373" }}>Or sign up with</Text>
      <View
        style={{
          flex: 0,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#737373" }}>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={{ color: "#51087E", fontWeight: "900" }}>Login</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});

export default CreateAccountScreen;
