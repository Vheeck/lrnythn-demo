import { useState } from "react";
import { Dimensions, View } from "react-native";

import authStyles from "../../styles/authStyles";
import SearchBar from "./SearchBar";
import TabNav from "./TabNav";
import NewNoteModal from "./NewNoteModal";
import BottomNav from "../../components/BottomNav";
import { HomeHeader } from "../../components/Header";

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;

  const { width, height } = Dimensions.get("screen");

  const [newNoteModal, setNewNoteModal] = useState(false);

  return (
    <View style={[authStyles.container, { paddingBottom: 16 }]}>
      <HomeHeader />
      <SearchBar />
      <TabNav />
      <BottomNav navigate={navigate} open={() => setNewNoteModal(true)} />
      <NewNoteModal
        navigate={navigate}
        visible={newNoteModal}
        close={() => setNewNoteModal(false)}
      />
    </View>
  );
};

export default HomeScreen;
