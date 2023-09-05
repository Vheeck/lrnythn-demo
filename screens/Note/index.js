import { useEffect, useState } from "react";
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
  Airdrop,
  ArrowRight,
  Cpu,
  EmojiHappy,
  Eye,
  EyeSlash,
  Headphone,
  Note1,
  PasswordCheck,
  Play,
  SaveAdd,
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
import Hr from "../../components/Hr";
import OptionButton from "./OptionButton";
import ProgressBar from "../../components/ProgressBar";
import { PlainHeader } from "../../components/Header";

const NoteScreen = ({ navigation }) => {
  const { navigate, goBack } = navigation;

  const { width, height } = Dimensions.get("screen");

  const [contentHeight, setContentHeight] = useState(0);
  const [frameHeight, setFrameHeight] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);

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
              flex: 3,
              flexDirection: "column",
              height,
              flexWrap: "nowrap",
            }}
          >
            <View>
              <PlainHeader title="Memorize" color="white" goBack={goBack} />
              <View>
                <View
                  style={{
                    flex: 0,
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <OptionButton
                    icon={Cpu}
                    text="Memorize"
                    color="#FFFFFF"
                    onPress={() => navigate("Memorize Quotes")}
                  />
                  <OptionButton
                    icon={SaveAdd}
                    text="Apply & Store"
                    color="#FFFFFF"
                  />
                  <OptionButton icon={Airdrop} text="Review" color="#FFFFFF" />
                </View>
                <Hr color="#3E146B" />
              </View>
            </View>
            <View
              style={{
                flex: 0,
                marginTop: 8,
                height: height - 61 - 40 - 40 - StatusBar.currentHeight - 20,
              }}
            >
              <ScrollView
                contentContainerStyle={{
                  paddingHorizontal: 16,
                  paddingBottom: 16,
                }}
                alwaysBounceVertical={true}
                automaticallyAdjustKeyboardInsets={true}
                onLayout={(event) => {
                  setFrameHeight(event.nativeEvent.layout.height);
                  const maxOffset = contentHeight - frameHeight;
                  if (maxOffset < scrollHeight) {
                    setScrollHeight(maxOffset);
                  }
                }}
                onContentSizeChange={(contentWidth, contentHeight) => {
                  setContentHeight(contentHeight);
                  const maxOffset = contentHeight - frameHeight;
                  if (maxOffset < scrollHeight) {
                    setScrollHeight(maxOffset);
                  }
                }}
                onScroll={(event) =>
                  setScrollHeight(event.nativeEvent.contentOffset.y)
                }
                onScrollEndDrag={(event) =>
                  setScrollHeight(event.nativeEvent.contentOffset.y)
                }
                scrollEventThrottle={160}
              >
                <View style={{ paddingTop: 24 }}>
                  <Typography
                    color="#FFFFFF"
                    size={20}
                    bold
                    style={{ marginVertical: 5 }}
                  >
                    Fundamentals of Law
                  </Typography>
                  <Hr color="#3E146B" />
                  <Typography color="#FFFFFF" size={14}>
                    Law serves as the cornerstone of a just and orderly society,
                    providing a framework that governs behavior, resolves
                    conflicts, and upholds rights and responsibilities. At its
                    core, law embodies the principles of fairness, equality, and
                    justice. It encompasses various branches, including
                    criminal, civil, constitutional, and administrative law,
                    each designed to regulate different aspects of human
                    interaction. Central to the concept of law is the idea of a
                    social contract, where individuals willingly surrender
                    certain freedoms in exchange for protection and the
                    assurance of a functioning society. This contract is
                    reinforced through the enactment, interpretation, and
                    enforcement of laws by governing bodies and legal
                    institutions, aiming to strike a balance between individual
                    liberties and collective well-being. Overall, the
                    fundamentals of law are deeply rooted in the pursuit of
                    maintaining order, safeguarding rights, and promoting
                    justice for all members of a community. Note: Understanding
                    the fundamentals of law is crucial for anyone navigating
                    modern society, as it provides insight into the principles
                    that guide interactions and decisions in various contexts.
                    Central to the concept of law is the idea of a social
                    contract, where individuals willingly surrender certain
                    freedoms in exchange for protection and the assurance of a
                    functioning society. This contract is reinforced through the
                    enactment, interpretation, and enforcement of laws by
                    governing bodies and legal institutions, aiming to strike a
                    balance between individual liberties and collective
                    well-being. Overall, the fundamentals of law are deeply
                    rooted in the pursuit of maintaining order, safeguarding
                    rights, and promoting justice for all members of a
                    community. Law serves as the cornerstone of a just and
                    orderly society, providing a framework that governs
                    behavior, resolves conflicts, and upholds rights and
                    responsibilities. At its core, law embodies the principles
                    of fairness, equality, and justice. It encompasses various
                    branches, including criminal, civil, constitutional, and
                    administrative law, each designed to regulate different
                    aspects of human interaction. Central to the concept of law
                    is the idea of a social contract, where individuals
                    willingly surrender certain freedoms in exchange for
                    protection and the assurance of a functioning society. This
                    contract is reinforced through the enactment,
                    interpretation, and enforcement of laws by governing bodies
                    and legal institutions, aiming to strike a balance between
                    individual liberties and collective well-being. Overall, the
                    fundamentals of law are deeply rooted in the pursuit of
                    maintaining order, safeguarding rights, and promoting
                    justice for all members of a community. Note: Understanding
                    the fundamentals of law is crucial for anyone navigating
                    modern society, as it provides insight into the principles
                    that guide interactions and decisions in various contexts.
                    Central to the concept of law is the idea of a social
                    contract, where individuals willingly surrender certain
                    freedoms in exchange for protection and the assurance of a
                    functioning society. This contract is reinforced through the
                    enactment, interpretation, and enforcement of laws by
                    governing bodies and legal institutions, aiming to strike a
                    balance between individual liberties and collective
                    well-being. Overall, the fundamentals of law are deeply
                    rooted in the pursuit of maintaining order, safeguarding
                    rights, and promoting justice for all members of a
                    community. Law serves as the cornerstone of a just and
                    orderly society, providing a framework that governs
                    behavior, resolves conflicts, and upholds rights and
                    responsibilities. At its core, law embodies the principles
                    of fairness, equality, and justice. It encompasses various
                    branches, including criminal, civil, constitutional, and
                    administrative law, each designed to regulate different
                    aspects of human interaction. Central to the concept of law
                    is the idea of a social contract, where individuals
                    willingly surrender certain freedoms in exchange for
                    protection and the assurance of a functioning society. This
                    contract is reinforced through the enactment,
                    interpretation, and enforcement of laws by governing bodies
                    and legal institutions, aiming to strike a balance between
                    individual liberties and collective well-being. Overall, the
                    fundamentals of law are deeply rooted in the pursuit of
                    maintaining order, safeguarding rights, and promoting
                    justice for all members of a community. Note: Understanding
                    the fundamentals of law is crucial for anyone navigating
                    modern society, as it provides insight into the principles
                    that guide interactions and decisions in various contexts.
                    Central to the concept of law is the idea of a social
                    contract, where individuals willingly surrender certain
                    freedoms in exchange for protection and the assurance of a
                    functioning society. This contract is reinforced through the
                    enactment, interpretation, and enforcement of laws by
                    governing bodies and legal institutions, aiming to strike a
                    balance between individual liberties and collective
                    well-being. Overall, the fundamentals of law are deeply
                    rooted in the pursuit of maintaining order, safeguarding
                    rights, and promoting justice for all members of a
                    community.
                  </Typography>
                </View>
              </ScrollView>
            </View>
            <View
              style={{
                position: "absolute",
                zIndex: 1,
                bottom: 66 + 38,
                flex: 0,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <View
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 22,
                  borderColor: "#501A89",
                  borderWidth: 1,
                  marginRight: 4,
                  backgroundColor: "#360363",
                  flex: 0,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconButton
                  backgroundColor="#00000000"
                  size={44}
                  icon={<Play color="#FFFFFF" size={18} />}
                  style={{ margin: 0 }}
                />
              </View>
              <View
                style={{
                  width: 84,
                  paddingVertical: 5,
                  paddingHorizontal: 8,
                  flex: 0,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#360363",
                  borderColor: "#501A89",
                  borderWidth: 1,
                  borderRadius: 27,
                }}
              >
                <View>
                  <IconButton
                    icon={<Note1 color="#FFFFFF" size={18} />}
                    backgroundColor="#550D82"
                    size={34}
                  />
                </View>
                <View>
                  <IconButton
                    icon={<Headphone color="#FFFFFF" size={18} />}
                    backgroundColor="#00000000"
                    size={18}
                  />
                </View>
              </View>
            </View>
            <View style={{ height: 36, paddingBottom: 16, paddingTop: 12 }}>
              <ProgressBar
                currentAmount={scrollHeight}
                targetAmount={contentHeight - frameHeight}
                // percentage={10}
              />
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

export default NoteScreen;
