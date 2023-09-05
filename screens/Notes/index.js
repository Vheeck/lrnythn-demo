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
import { LinearGradient } from "expo-linear-gradient";
import Donut from "../../components/Donut";

import Ionicons from "@expo/vector-icons/Ionicons";
import { ModuleTestList } from "../../components/ModuleTestList";
import BottomNav from "../../components/BottomNav";
import { HomeHeader } from "../../components/Header";

const NotesScreen = ({ navigation }) => {
  const { navigate } = navigation;

  const { width, height } = Dimensions.get("screen");

  const moduleTestsData = [
    {
      name: "Module Test",
      description:
        "Short description goes here, and all the details are being filled in on the information about the user's test",
      scoreObtained: 50,
      scoreObtainable: 60,
    },
    {
      name: "Module Test",
      description:
        "Short description goes here, and all the details are being filled in on the information about the user's test",
      scoreObtained: 50,
      scoreObtainable: 60,
    },
    {
      name: "Module Test",
      description:
        "Short description goes here, and all the details are being filled in on the information about the user's test",
      scoreObtained: 50,
      scoreObtainable: 60,
    },
    {
      name: "Module Test",
      description:
        "Short description goes here, and all the details are being filled in on the information about the user's test",
      scoreObtained: 50,
      scoreObtainable: 60,
    },
    {
      name: "Module Test",
      description:
        "Short description goes here, and all the details are being filled in on the information about the user's test",
      scoreObtained: 50,
      scoreObtainable: 60,
    },
    {
      name: "Module Test",
      description:
        "Short description goes here, and all the details are being filled in on the information about the user's test",
      scoreObtained: 50,
      scoreObtainable: 60,
    },
  ];

  return (
    <>
      <ScrollView
        alwaysBounceVertical={true}
        automaticallyAdjustKeyboardInsets={true}
      >
        <View style={authStyles.container}>
          <View
            style={{
              marginTop: -5,
            }}
          >
            <LinearGradient
              colors={["#51087E", "#2F005C"]}
              style={{
                // paddingBottom: -50,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                overflow: "hidden",
              }}
            >
              <HomeHeader color="white" />
              <View
                style={{
                  flex: 0,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View>
                  <Donut percentage={48} />
                </View>
                <View style={{ padding: 16 }}>
                  <Typography color="#FFFFFF" size={24} bold>
                    Modules
                  </Typography>
                  <Typography color="#BB72E8" size={16}>
                    5/11 completed
                  </Typography>
                </View>
              </View>
              <View
                style={{
                  flex: 0,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 45,
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    backgroundColor: "#570E84",
                    borderRadius: 20,
                    width: 204,
                    height: 56,
                    top: -20,
                  }}
                ></View>
                <View
                  style={{
                    position: "absolute",
                    backgroundColor: "#5C1389",
                    borderRadius: 20,
                    width: 248,
                    height: 56,
                    top: -10,
                  }}
                ></View>
                <View
                  style={{
                    backgroundColor: "#692096",
                    borderRadius: 20,
                    paddingTop: 6,
                    paddingLeft: 28,
                    paddingRight: 28,
                    paddingBottom: 32,
                    width: 284,
                    marginBottom: -22,
                  }}
                >
                  <Typography
                    color="#FFFFFF"
                    size={15}
                    style={{ textAlign: "center" }}
                  >
                    👊🏼You’re doing great, Keep it up!
                  </Typography>
                </View>
              </View>
            </LinearGradient>
          </View>
          <View style={{ flex: 1, padding: 16 }}>
            <View
              style={{
                flex: 0,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 25,
                padding: 21,
                paddingLeft: 18,
                paddingRight: 18,
                borderRadius: 12,
                backgroundColor: "#51087E",
                width: width - 16 * 2,
              }}
            >
              <View style={{ flex: 1 }}>
                <Typography numberOfLines={1} color="#FFFFFF" size={15}>
                  🔥 5 Hubs are studying...
                </Typography>
              </View>
              <View
                style={{
                  position: "absolute",
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  right: 18,
                }}
              >
                <TouchableOpacity>
                  <Typography
                    color="#A45BD1"
                    style={{ textDecorationLine: "underline", marginRight: 12 }}
                    size={14}
                  >
                    View now
                  </Typography>
                </TouchableOpacity>
                <IconButton
                  size={28}
                  backgroundColor="#692096"
                  icon={<Ionicons name="md-close" size={20} color="white" />}
                />
              </View>
            </View>
            <View style={{ paddingTop: 6 }}>
              <Typography
                color="#1A1A1A"
                size={14}
                style={{ paddingTop: 18, paddingBottom: 10 }}
              >
                Most Recent
              </Typography>
              <View style={{ marginBottom: 24 }}>
                <ModuleTestList data={moduleTestsData} />
              </View>
            </View>
          </View>
          <StatusBar style="light" backgroundColor="#51087E" />
        </View>
      </ScrollView>
      <BottomNav navigate={navigate} open={() => setNewNoteModal(true)} />
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
    // paddingBottom: 36,
  },
});

export default NotesScreen;
