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


const NewScreenScreen = ({ navigation }) => {
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
            <Typography>This is New Screen.</Typography>
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
  
  export default NewScreenScreen;