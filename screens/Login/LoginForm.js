import { Dimensions, Image, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { ArrowRight, Eye, EyeSlash, PasswordCheck } from "iconsax-react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";

const PasswordView = ({ shown, ...props }) =>
  shown ? <Eye {...props} /> : <EyeSlash {...props} />;

const LoginForm = ({ navigate }) => {
  const [seePassword, setSeePassword] = useState(false);

  return (
    <>
      <View
        style={{
          flex: 0,
          //   marginTop: 82,
          width: Dimensions.get("window").width - 32,
          alignItems: "center",
        }}
      >
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
        <Button
          onPress={() => navigate("Home")}
          style={{ marginTop: 40, marginBottom: 38 }}
          afterIcon={<ArrowRight color="#fff" variant="Linear" size={20} />}
        >
          Login
        </Button>
        <TouchableOpacity>
          <Image
            source={require("../../assets/face-id.png")}
            style={{ width: 48, height: 48 }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default LoginForm;
