import { Dimensions, Modal, TouchableOpacity, View } from "react-native";
import Typography from "../../components/Typography";
import {
  Camera,
  Chart2,
  Document,
  Edit2,
  Gallery,
  MessageQuestion,
  NoteText,
} from "iconsax-react-native";
import Button from "../../components/Button";
import IconButton from "../../components/IconButton";
import { Image } from "react-native";
import Input from "../../components/Input";

const PollModal = ({ navigate, visible, close }) => {
  const { width, height } = Dimensions.get("window");

  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableOpacity
        onPress={close}
        style={{ flex: 1, height, width, backgroundColor: "#00000040" }}
      ></TouchableOpacity>
      <View
        style={{
          backgroundColor: "#FFFFFF",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          width,
          height: height * 0.84,
          position: "absolute",
          bottom: 0,
          zIndex: 10,
          padding: 16,
          paddingTop: 56,
        }}
      >
        <View
          style={{
            height: 32,
            flex: 0,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <IconButton
              size={32}
              backgroundColor="#F4F6F8"
              icon={
                <Image
                  style={{ width: 13.2, height: 13 }}
                  source={require("../../assets/times.png")}
                />
              }
              onPress={close}
            />
          </View>
          <View>
            <Typography medium size={16}>
              Create Poll
            </Typography>
          </View>
          <View>
            <IconButton
              size={32}
              backgroundColor="#F4F6F8"
              icon={
                <Image
                  style={{ width: 12, height: 8.2 }}
                  source={require("../../assets/check.png")}
                />
              }
              onPress={close}
            />
          </View>
        </View>
        <View style={{ marginTop: 28 }}>
          <View>
            <Typography size={14} color="#1A1A1A" style={{ marginBottom: 8 }}>
              Question
            </Typography>
            <Input
              beforeIcon={<MessageQuestion color="#9A9A9A" size={20} />}
              placeholder="Ask Question"
            />
          </View>
          <View style={{ marginTop: 28 }}>
            <Typography size={14} color="#1A1A1A" style={{ marginBottom: 8 }}>
              Options
            </Typography>
            <Input
              style={{ marginBottom: 9 }}
              placeholder="Add Option 1"
            />
            <Input
              style={{ marginBottom: 9 }}
              placeholder="Add Option 2"
            />
            <Input
              style={{ marginBottom: 9 }}
              placeholder="Add Option 3"
            />
            <Input
              style={{ marginBottom: 9 }}
              placeholder="Add Option 4"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PollModal;
