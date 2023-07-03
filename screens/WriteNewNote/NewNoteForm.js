import { View } from "react-native";
import Input from "../../components/Input";
// import { RichEditor } from "react-native-pell-rich-editor";
import { useRef } from "react";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";

const NewNoteForm = () => {
  const richText = useRef();
  return (
    <View style={{ flex: 0, marginTop: 28 }}>
      <Input
        placeholder="Untitled"
        style={{
          backgroundColor: "#FFFFFF",
          borderWidth: 0,
          borderBottomWidth: 1,
          borderRadius: 0,
          padding: 0,
          borderColor: "#ECEEF0",
          marginBottom: 12,
        }}
        fieldStyle={{ fontSize: 20, fontFamily: "Work Sans 600" }}
        placeholderTextColor="#737373"
      />
      <RichEditor
        ref={richText}
        // onChange={richTextHandle}
        placeholder="This is where your note goes. Start typing..."
        androidHardwareAccelerationDisabled={true}
        // style={styles.richTextEditorStyle}
        initialHeight={360}
        style={{ height: 360 }}
      />
      <RichToolbar
        editor={richText}
        selectedIconTint="#873c1e"
        iconTint="#312921"
        actions={[
          actions.insertImage,
          actions.setBold,
          actions.setItalic,
          actions.insertBulletsList,
          actions.insertOrderedList,
          actions.insertLink,
          actions.setStrikethrough,
          actions.setUnderline,
        ]}
        // style={styles.richTextToolbarStyle}
      />
    </View>
  );
};

export default NewNoteForm;
