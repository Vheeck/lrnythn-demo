import { Dimensions, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import NotesScreen from "./NotesScreen";
import FoldersScreen from "./FoldersScreen";
import FavoritesScreen from "./FavoritesScreen";
import TabBar from "./TabBar";

const Tab = createMaterialTopTabNavigator();

const TabNav = () => {
  const { width, height } = Dimensions.get("screen");
  return (
    <View style={{ flex: 1, width }}>
      <Tab.Navigator
        tabBar={(props) => <TabBar {...props} />}
        sceneContainerStyle={{ backgroundColor: "#FFFFFF" }}
      >
        <Tab.Screen name="Notes" component={NotesScreen} />
        <Tab.Screen name="Folders" component={FoldersScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default TabNav;
