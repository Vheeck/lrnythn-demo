import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Button from "../../components/Button";
import Header from "./Header";
import authStyles from "../../styles/authStyles";
import SearchBar from "./SearchBar";
import NotesScreen from "./NotesScreen";
import FoldersScreen from "./FoldersScreen";
import FavoritesScreen from "./FavoritesScreen";
import TabBar from "./TabBar";
import TabNav from "./TabNav";
import BottomNav from "./BottomNav";
import NewNoteModal from "./NewNoteModal";

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;

  const { width, height } = Dimensions.get("screen");

  const [newNoteModal, setNewNoteModal] = useState(false);

  return (
    <View style={[authStyles.container, { paddingBottom: 16 }]}>
      <Header />
      <SearchBar />
      <TabNav />
      <BottomNav open={() => setNewNoteModal(true)} />
      <NewNoteModal
        navigate={navigate}
        visible={newNoteModal}
        close={() => setNewNoteModal(false)}
      />
    </View>
  );
};

export default HomeScreen;
