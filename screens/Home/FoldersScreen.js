import { ScrollView, View } from "react-native";
import Typography from "../../components/Typography";
import { FolderList } from "../../components/FolderList";

const data = [
  {
    name: "School Notes",
    contents: 30,
  },
  {
    name: "School Notes",
    contents: 30,
  },
  {
    name: "School Notes",
    contents: 30,
  },
  {
    name: "School Notes",
    contents: 30,
  },
  {
    name: "School Notes",
    contents: 30,
  },
  {
    name: "School Notes",
    contents: 30,
  },
  {
    name: "School Notes",
    contents: 30,
  },
  {
    name: "School Notes",
    contents: 30,
  },
  {
    name: "School Notes",
    contents: 30,
  },
  {
    name: "School Notes",
    contents: 30,
  },
  {
    name: "School Notes",
    contents: 30,
  },
  {
    name: "School Notes",
    contents: 30,
  },
  {
    name: "School Notes",
    contents: 30,
  },
  {
    name: "School Notes",
    contents: 30,
  },
  {
    name: "School Notes",
    contents: 30,
  },
  {
    name: "School Notes",
    contents: 30,
  },
  {
    name: "School Notes",
    contents: 30,
  },
  {
    name: "School Notes",
    contents: 30,
  },
  {
    name: "School Notes",
    contents: 30,
  },
  {
    name: "School Notes",
    contents: 30,
  },
  {
    name: "School Notes",
    contents: 30,
  },
];

const FoldersScreen = () => {
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
        <FolderList data={data} />
      </View>
    </ScrollView>
  );
};

export default FoldersScreen;
