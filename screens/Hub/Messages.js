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
  Play,
  PlayCircle,
} from "iconsax-react-native";
import Input from "../../components/Input";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import Waveform from "../../assets/waveform.svg";
import authStyles from "../../styles/authStyles";

const Messages = ({ conversation, userId }) => {
  const { width, height } = Dimensions.get("window");

  return (
    <>
      <View style={{ flex: 1, paddingBottom: 4 }}>
        <ScrollView
          contentContainerStyle={{
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 8,
            paddingBottom: 8,
          }}
        >
          {conversation.map((message, i) => {
            return message.poll ? (
              <Poll
                {...message}
                username={message.sentBy === userId ? "You" : message.username}
              />
            ) : message.sentBy === userId ? (
              <SentMessage key={i} {...message} />
            ) : (
              <RecievedMessage key={i} {...message} />
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

const RecievedMessage = ({ text, username, audio }) => {
  const { width, height } = Dimensions.get("window");

  return (
    <TouchableOpacity>
      <View
        style={{
          flex: 0,
          flexDirection: "row",
          marginTop: 8,
          marginBottom: 8,
          paddingRight: 16 + 16 + (38 + 4) * 2,
        }}
      >
        <Image
          source={require("../../assets/user.png")}
          style={{ width: 38, height: 38, marginRight: 4 }}
        />
        <View>
          <Typography color="#A6A6A6" size={11}>
            {username}
          </Typography>
          <View
            style={{
              backgroundColor: "#F5E4FF",
              borderTopLeftRadius: 0,
              borderRadius: 16,
              padding: 10,
            }}
          >
            {audio ? <Audio audio={audio} /> : ""}

            <Typography color="#000000" size={13}>
              {text}
            </Typography>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const SentMessage = ({ text, audio }) => {
  const { width, height } = Dimensions.get("window");
  return (
    <TouchableOpacity>
      <View
        style={{
          flex: 0,
          flexDirection: "row",
          marginTop: 8,
          marginBottom: 8,
          justifyContent: "flex-end",
          paddingLeft: 16 + 16 + (38 + 4) * 2,
        }}
      >
        <View>
          <Typography color="#A6A6A6" size={11} style={{ textAlign: "right" }}>
            You
          </Typography>
          <View
            style={{
              backgroundColor: "#641B91",
              borderTopRightRadius: 0,
              borderRadius: 16,
              padding: 10,
            }}
          >
            {audio ? <Audio audio={audio} /> : ""}

            {text ? (
              <Typography color="#FFFFFF" size={13}>
                {text}
              </Typography>
            ) : (
              ""
            )}
          </View>
        </View>
        <Image
          source={require("../../assets/user.png")}
          style={{ width: 38, height: 38, marginLeft: 4 }}
        />
      </View>
    </TouchableOpacity>
  );
};

const Audio = ({ audio }) => {
  return (
    <View style={{ flex: 0, flexDirection: "row", alignItems: "center" }}>
      <IconButton
        size={24}
        backgroundColor="#00000000"
        icon={<PlayCircle size={24} color="#ffffff" variant="Bulk" />}
      />
      <Waveform
        style={{
          marginLeft: -(107 + 16),
          marginRight: -64,
          width: 107,
          height: 20,
        }}
        width={107}
        height={20}
      />
    </View>
  );
};

const Poll = ({ poll: { question, options, seenBy }, photo, username }) => {
  return (
    <View style={{ flex: 0, marginTop: 16, marginBottom: 8 }}>
      <View
        style={{
          flex: 0,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 24,
        }}
      >
        <View style={{ flex: 0, flexDirection: "row", alignItems: "center" }}>
          <View style={[authStyles.hr, { flex: 0, width: 29 }]} />
          <Typography
            size={11}
            color="#A6A6A6"
            style={{ marginLeft: 9, marginRight: 9 }}
          >
            {username} created a poll
          </Typography>
          <View style={[authStyles.hr, { flex: 0, width: 29 }]} />
        </View>
        <Image
          style={{ width: 30, height: 30, position: "absolute", right: 0 }}
          source={photo}
        />
      </View>
      <View
        style={{
          backgroundColor: username === "You" ? "#51087E" : "#F5E4FF",
          padding: 24,
          paddingTop: 28,
          paddingBottom: 14,
          borderRadius: 16,
          marginLeft: 30,
          marginRight: 30,
        }}
      >
        <Typography
          color="#ffffff"
          size={16}
          style={{ paddingRight: 44, marginBottom: 12 }}
        >
          {question}
        </Typography>
        <View
          style={[authStyles.hr, { flex: 0, backgroundColor: "#5C1389" }]}
        />
        <View
          style={{
            marginTop: 18,
            backgroundColor: "#580F85",
            borderRadius: 6,
            padding: 12,
            paddingTop: 8,
            paddingBottom: 8,
            marginBottom: 12,
          }}
        >
          {options.map((option, i) => (
            <TouchableOpacity key={i} style={{ margin: 2 }}>
              <View
                style={{ flex: 0, alignItems: "center", flexDirection: "row" }}
              >
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#FFFFFF",
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    marginRight: 5,
                  }}
                />
                <Typography size={14} color="#FFFFFF">
                  {option}
                </Typography>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ flex: 0, flexDirection: "row", alignItems: "center" }}>
          <Typography size={12} color="#964DC3" style={{ marginRight: 4 + 11 }}>
            Seen By
          </Typography>
          <View style={{ flex: 0, flexDirection: "row", alignItems: "center" }}>
            {seenBy.map((item, i) => (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  position: "relative",
                  zIndex: i + 2,
                  marginLeft: -11,
                  borderColor: "#ffffff",
                  borderWidth: 1,
                  borderRadius: 30,
                }}
                key={i}
                source={photo}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Messages;
