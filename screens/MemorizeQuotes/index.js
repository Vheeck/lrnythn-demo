import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  StatusBar,
} from "react-native";
import Typography from "../../components/Typography";
import {
  CloseCircle,
  Export,
  ExportCircle,
  ExportCurve,
  ExportSquare,
  Headphone,
  Note1,
  Play,
  TickCircle,
  Trash,
} from "iconsax-react-native";
import IconButton from "../../components/IconButton";
import authStyles from "../../styles/authStyles";
import { LinearGradient } from "expo-linear-gradient";

import Hr from "../../components/Hr";
import ProgressBar from "../../components/ProgressBar";
import { PlainHeader } from "../../components/Header";
import Card from "../../components/Card";
import Button from "../../components/Button";

const MemorizeQuotesScreen = ({ navigation }) => {
  const { navigate, goBack } = navigation;

  const { width, height } = Dimensions.get("screen");

  return (
    <>
      <View style={authStyles.container}>
        <LinearGradient
          colors={["#280055", "#3C0469", "#560D83"]}
          style={{
            width,
            height,
            marginTop: -5,
            // overflow: "hidden",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              height,
            }}
          >
            <View>
              <PlainHeader
                title="Memorize"
                color="white"
                goBack={goBack}
                align="center"
              />
              <View
                style={{
                  paddingVertical: 24,
                }}
              >
                <ProgressBar percentage={10} />
              </View>
            </View>
            <View
              style={{
                flex: 0,
                marginTop: 8,
                height:
                  height - 61 - 40 - 40 - 40 - 40 - StatusBar.currentHeight - 20,
              }}
            >
              <ScrollView
                contentContainerStyle={{
                  paddingHorizontal: 16,
                  paddingBottom: 16,
                }}
                alwaysBounceVertical={true}
                automaticallyAdjustKeyboardInsets={true}
              >
                <View style={{ paddingTop: 56 }}>
                  <Card>
                    <Typography
                      color={"#FFFFFF"}
                      style={{ marginTop: 8, marginBottom: 82 }}
                    >
                      “Law serves as the cornerstone of a just and orderly
                      society, providing a framework that governs behavior,
                      resolves conflicts, and upholds rights and
                      responsibilities.”
                    </Typography>
                    <View style={{ flex: 0, flexDirection: "row" }}>
                      <View>
                        <IconButton
                          backgroundColor="#40166D"
                          size={44}
                          icon={<Trash color="#FFFFFF" size={18} />}
                          style={{ marginRight: 16 }}
                        />
                      </View>
                      <View>
                        <IconButton
                          backgroundColor="#40166D"
                          size={44}
                          icon={<ExportCurve color="#FFFFFF" size={18} />}
                          style={{ margin: 0 }}
                        />
                      </View>
                    </View>
                  </Card>
                </View>
              </ScrollView>
            </View>
            <View style={{ margin: 16 }}>
              <Typography
                size={14}
                color={"#FFFFFF"}
                style={{ textAlign: "center" }}
              >
                Do you remember this?
              </Typography>
            </View>
            <View
              style={{
                // position: "absolute",
                // zIndex: 1,
                // bottom: 66 + 38,
                flex: 0,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 88,
              }}
            >
              <View>
                <Button
                  backgroundColor="#671E94"
                  style={{
                    width: (width - 42) / 2,
                    borderWidth: 1,
                    borderRadius: 6,
                    borderColor: "#7B39A8",
                    marginRight: 10,
                  }}
                  beforeIcon={<CloseCircle color="#ffffff" />}
                >
                  No
                </Button>
              </View>
              <View>
                <Button
                  backgroundColor="#F5E4FF"
                  color="#4D0A7A"
                  style={{
                    width: (width - 42) / 2,
                  }}
                  beforeIcon={<TickCircle color="#4D0A7A" />}
                >
                  Yes
                </Button>
              </View>
            </View>
          </View>
        </LinearGradient>
        <StatusBar style="light" backgroundColor="#280055" />
      </View>
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

export default MemorizeQuotesScreen;
