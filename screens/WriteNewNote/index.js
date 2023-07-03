import { Dimensions, ScrollView, View } from "react-native";
import authStyles from "../../styles/authStyles";
import Header from "./Header";
import NewNoteForm from "./NewNoteForm";

const WriteNewNoteScreen = ({ navigation }) => {
  const { navigate, goBack } = navigation;

  const { width, height } = Dimensions.get("screen");

  return (
    <>
      <ScrollView
        contentContainerStyle={{ width, height }}
        alwaysBounceVertical={true}
        automaticallyAdjustKeyboardInsets={true}
      >
        <View style={[authStyles.container, { justifyContent: "flex-start" }]}>
          <Header back={goBack} />
          <NewNoteForm />
        </View>
      </ScrollView>
    </>
  );
};

export default WriteNewNoteScreen;
