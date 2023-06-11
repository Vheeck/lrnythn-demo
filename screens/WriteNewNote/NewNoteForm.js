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
    <View>
      <Input
        placeholder="Untitled"
        style={{
          backgroundColor: "#FFFFFF",
          borderWidth: 0,
          borderBottomWidth: 1,
          borderRadius: 0,
          padding: 0,
          borderColor: "#ECEEF0",
        }}
        fieldStyle={{ fontSize: 20, fontFamily: "Work Sans 600" }}
        placeholderTextColor="#737373"
      />
      <RichEditor
        ref={richText}
        // onChange={richTextHandle}
        placeholder="Write your cool content here :)"
        androidHardwareAccelerationDisabled={true}
        // style={styles.richTextEditorStyle}
        initialHeight={250}
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
