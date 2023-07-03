import { Dimensions, Image, View } from "react-native";
import Typography from "../../components/Typography";
import IconButton from "../../components/IconButton";
import {
  Notification,
  SearchNormal1,
  More,
  Video,
  ArrowLeft2,
  Add,
} from "iconsax-react-native";
import Input from "../../components/Input";
import Messages from "./Messages";

const ChatFeed = ({ open }) => {
  const { width, height } = Dimensions.get("window");

  const userId = "ABCDEF123456";

  const photo = require("../../assets/user.png");

  const conversation = [
    {
      sentBy: "EFCDEF67854",
      text: "Hello there!",
      username: "Safiya Payne",
      photo,
      timestamp: new Date(),
    },
    {
      sentBy: "ABCDEF123456",
      text: "Hello there!",
      username: "Isabel Canye",
      photo,
      timestamp: new Date(),
    },
    {
      sentBy: "EWRTYA098768",
      text: "Hey! How are you doing?",
      username: "Santiago Salazar",
      photo,
      timestamp: new Date(),
    },
    {
      sentBy: "YUIOPH378899",
      text: "What are we studying today?",
      username: "Kenny Michael",
      photo,
      timestamp: new Date(),
    },
    {
      sentBy: "EWRTYA098768",
      text: "I need your help!",
      username: "John Doe",
      photo,
      timestamp: new Date(),
    },
    {
      sentBy: "ABCDEF123456",
      text: "Are you guys ready for the call?",
      username: "Isabel Canye",
      photo,
      timestamp: new Date(),
    },
    {
      sentBy: "YUIOPH378899",
      text: "Yes!!!",
      username: "Kenny Michael",
      photo,
      timestamp: new Date(),
    },
    {
      sentBy: "ABCDEF123456",
      audio: "< Audio File >",
      username: "Isabel Canye",
      photo,
      timestamp: new Date(),
    },
    {
      sentBy: "EWRTYA098768",
      text: "Okay, got it.",
      username: "Santiago Salazar",
      photo,
      timestamp: new Date(),
    },
    {
      sentBy: "YUIOPH378899",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur!",
      username: "Kenny Michael",
      photo,
      timestamp: new Date(),
    },
    {
      sentBy: "ABCDEF123456",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      username: "Isabel Canye",
      photo,
      timestamp: new Date(),
    },
    {
      sentBy: "ABCDEF123456",
      poll: {
        question: "How many sides does a pentagon have?",
        options: ["Four", "Eight", "Five", "Seven"],
        seenBy: ["1", "2", "3", "4"],
      },
      username: "Isabel Canye",
      photo,
      timestamp: new Date(),
    },
    {
      sentBy: "YUIOPH378899",
      text: "Next question please @isabel",
      mentions: "@isabel",
      username: "Kenny Michael",
      photo,
      timestamp: new Date(),
    },
  ];

  return (
    <View
      style={{
        width,
        flex: 1,
        // flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "space-between",
      }}
    >
      <Messages conversation={conversation} userId={userId} />
      <View
        style={{
          flex: 0,
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 16,
          paddingRight: 16,
        }}
      >
        <View style={{ width: width - 16 - 16 - 48 - 8 }}>
          <Input
            placeholder="Type your message..."
            noBorder
            fieldStyle={{ fontSize: 12 }}
            style={{ paddingTop: 12, paddingBottom: 12, borderRadius: 24 }}
          />
        </View>
        <IconButton
          onPress={open}
          size={48}
          backgroundColor="#51087E"
          icon={<Add color="#FFFFFF" variant="Linear" size={30} />}
          style={{ marginLeft: 8 }}
        />
      </View>
    </View>
  );
};

export default ChatFeed;
