import { Dimensions, ScrollView, View } from "react-native";
import authStyles from "../../styles/authStyles";
import Header from "./Header";
import CameraSect from "./CameraSect";
// import NewNoteForm from "./NewNoteForm";

const ScanNoteScreen = ({ navigation }) => {
  const { navigate, goBack } = navigation;

  const { width, height } = Dimensions.get("screen");

  return (
    <>
      <ScrollView
        contentContainerStyle={{ width, height }}
        alwaysBounceVertical={true}
        automaticallyAdjustKeyboardInsets={true}
      >
        <View style={authStyles.container}>
          <Header back={goBack} />
          <CameraSect />
          {/* <NewNoteForm /> */}
        </View>
      </ScrollView>
    </>
  );
};

export default ScanNoteScreen;
