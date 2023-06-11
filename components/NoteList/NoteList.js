import { View } from "react-native";
import NoteItem from "./NoteItem";

const NoteList = ({ data }) => {
  return (
    <View>
      {data.map(({ title, content, date }, i) => {
        return (
          <NoteItem
            title={title}
            content={content}
            date={new Date(date)}
            key={i}
          />
        );
      })}
    </View>
  );
};

export default NoteList;
