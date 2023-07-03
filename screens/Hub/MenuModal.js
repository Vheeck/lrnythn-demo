import { Dimensions, Modal, TouchableOpacity, View } from "react-native";
import Typography from "../../components/Typography";
import {
  Camera,
  Chart2,
  Document,
  Edit2,
  Gallery,
  NoteText,
} from "iconsax-react-native";
import Button from "../../components/Button";

const MenuModal = ({ navigate, visible, close, openPollModal }) => {
  const { width, height } = Dimensions.get("window");

  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableOpacity
        onPress={close}
        style={{ flex: 1, height, width, backgroundColor: "#00000040" }}
      ></TouchableOpacity>
      <View
        style={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          width,
          position: "absolute",
          bottom: 0,
          zIndex: 10,
          padding: 16,
          paddingTop: 27,
          paddingBottom: 16,
        }}
      >
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 12,
            // width,
            // position: "absolute",
            // bottom: 0,
            // zIndex: 10,
            padding: 20,
            // paddingTop: 27,
            // paddingBottom: 16,
          }}
        >
          {[
            { Icon: Camera, name: "Camera", onPress: close },
            { Icon: Gallery, name: "Photo & Video Gallery", onPress: close },
            { Icon: Document, name: "Document", onPress: close },
            { Icon: NoteText, name: "Note", onPress: close },
            { Icon: Chart2, name: "Poll", onPress: openPollModal },
          ].map(({ Icon, name, onPress }, i) => (
            <TouchableOpacity key={i} onPress={onPress}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderTopWidth: i === 0 ? 0 : 1,
                  borderColor: "#F5F5F5",
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <Icon size={20} variant="Linear" color="#51087E" />
                <Typography
                  size={14}
                  color="#51087E"
                  style={{ marginLeft: 16 }}
                >
                  {name}
                </Typography>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ marginTop: 8 }}>
          <Button color="#51087E" backgroundColor="#F5E4FF" onPress={close}>
            Cancel
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default MenuModal;
