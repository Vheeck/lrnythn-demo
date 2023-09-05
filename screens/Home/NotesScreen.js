import { ScrollView, View } from "react-native";
import { NoteList } from "../../components/NoteList";

const data = [
  {
    title: "Ways to succeed early",
    content:
      "The body of the note goes here, and all the contents are filled in",
    date: new Date("2023-03-20"),
  },
  {
    title: "Ways to succeed early",
    content:
      "The body of the note goes here, and all the contents are filled in",
    date: new Date("2023-03-20"),
  },
  {
    title: "Ways to succeed early",
    content:
      "The body of the note goes here, and all the contents are filled in",
    date: new Date("2023-03-20"),
  },
  {
    title: "Ways to succeed early",
    content:
      "The body of the note goes here, and all the contents are filled in",
    date: new Date("2023-03-20"),
  },
  {
    title: "Ways to succeed early",
    content:
      "The body of the note goes here, and all the contents are filled in",
    date: new Date("2023-03-20"),
  },
  {
    title: "Ways to succeed early",
    content:
      "The body of the note goes here, and all the contents are filled in",
    date: new Date("2023-03-20"),
  },
  {
    title: "Ways to succeed early",
    content:
      "The body of the note goes here, and all the contents are filled in",
    date: new Date("2023-03-20"),
  },
  {
    title: "Ways to succeed early",
    content:
      "The body of the note goes here, and all the contents are filled in",
    date: new Date("2023-03-20"),
  },
  {
    title: "Ways to succeed early",
    content:
      "The body of the note goes here, and all the contents are filled in",
    date: new Date("2023-03-20"),
  },
  {
    title: "Ways to succeed early",
    content:
      "The body of the note goes here, and all the contents are filled in",
    date: new Date("2023-03-20"),
  },
  {
    title: "Ways to succeed early",
    content:
      "The body of the note goes here, and all the contents are filled in",
    date: new Date("2023-03-20"),
  },
  {
    title: "Ways to succeed early",
    content:
      "The body of the note goes here, and all the contents are filled in",
    date: new Date("2023-03-20"),
  },
  {
    title: "Ways to succeed early",
    content:
      "The body of the note goes here, and all the contents are filled in",
    date: new Date("2023-03-20"),
  },
  {
    title: "Ways to succeed early",
    content:
      "The body of the note goes here, and all the contents are filled in",
    date: new Date("2023-03-20"),
  },
  {
    title: "Ways to succeed early",
    content:
      "The body of the note goes here, and all the contents are filled in",
    date: new Date("2023-03-20"),
  },
  {
    title: "Ways to succeed early",
    content:
      "The body of the note goes here, and all the contents are filled in",
    date: new Date("2023-03-20"),
  },
  {
    title: "Ways to succeed early",
    content:
      "The body of the note goes here, and all the contents are filled in",
    date: new Date("2023-03-20"),
  },
  {
    title: "Ways to succeed early",
    content:
      "The body of the note goes here, and all the contents are filled in",
    date: new Date("2023-03-20"),
  },
  {
    title: "Ways to succeed early",
    content:
      "The body of the note goes here, and all the contents are filled in",
    date: new Date("2023-03-20"),
  },
  {
    title: "Ways to succeed early",
    content:
      "The body of the note goes here, and all the contents are filled in",
    date: new Date("2023-03-20"),
  },
  {
    title: "Ways to succeed early",
    content:
      "The body of the note goes here, and all the contents are filled in",
    date: new Date("2023-03-20"),
  },
];

const NotesScreen = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <ScrollView
      alwaysBounceVertical={true}
      automaticallyAdjustKeyboardInsets={true}
    >
      <View
        style={{
          paddingBottom: 16,
          paddingLeft: 16,
          paddingRight: 16,
        }}
      >
        <NoteList openNote={() => navigate("Note")} data={data} />
      </View>
    </ScrollView>
  );
};

export default NotesScreen;
