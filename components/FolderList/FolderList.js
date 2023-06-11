import { View } from "react-native";
import FolderItem from "./FolderItem";

const FolderList = ({ data }) => {
  return (
    <View>
      {data.map(({ name, contents }, i) => {
        return <FolderItem key={i} name={name} contents={contents} />;
      })}
    </View>
  );
};

export default FolderList;
