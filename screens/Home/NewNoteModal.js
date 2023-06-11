import { Dimensions, Modal, TouchableOpacity, View } from "react-native";
import Typography from "../../components/Typography";
import { Camera, Edit2 } from "iconsax-react-native";

const NewNoteModal = ({ navigate, visible, close }) => {
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
          position: "absolute",
          bottom: 0,
          zIndex: 10,
          padding: 16,
          paddingTop: 27,
          paddingBottom: 16,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            close();
            navigate("Write New Note");
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 28,
            }}
          >
            <Edit2 size={22} variant="Bulk" color="#51087E" />
            <Typography style={{ marginLeft: 16 }}>Write New Note</Typography>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            close();
            navigate("Scan Note");
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 28,
            }}
          >
            <Camera size={22} variant="Bulk" color="#51087E" />
            <Typography style={{ marginLeft: 16 }}>Scan Note</Typography>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default NewNoteModal;
