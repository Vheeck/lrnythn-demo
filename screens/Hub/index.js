import { useState } from "react";
import { Dimensions } from "react-native";
import authStyles from "../../styles/authStyles";
import { View } from "react-native";
import Header from "./Header";
import ChatFeed from "./ChatFeed";
import MenuModal from "./MenuModal";
import PollModal from "./PollModal";

const HubScreen = ({ navigation }) => {
  const { navigate } = navigation;

  const { width, height } = Dimensions.get("screen");

  const [menuModal, setMenuModal] = useState(false);
  const [pollModal, setPollModal] = useState(false);

  const openMenuModal = () => {
    setPollModal(false);
    setMenuModal(true);
  };
  const closeMenuModal = () => setMenuModal(false);

  const openPollModal = () => {
    setMenuModal(false);
    setPollModal(true);
  };
  const closePollModal = () => setPollModal(false);

  return (
    <View style={[authStyles.container, { paddingBottom: 16, padding: 0 }]}>
      <Header />
      <ChatFeed open={openMenuModal} />
      <MenuModal
        navigate={navigate}
        visible={menuModal}
        close={closeMenuModal}
        openPollModal={openPollModal}
      />
      <PollModal
        navigate={navigate}
        visible={pollModal}
        close={closePollModal}
      />
    </View>
  );
};

export default HubScreen;
