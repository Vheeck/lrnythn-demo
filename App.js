import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import HomeScreen from "./screens/Home";
import CreateAccountScreen from "./screens/CreateAccount";
import LoginScreen from "./screens/Login";
import WriteNewNoteScreen from "./screens/WriteNewNote";
import ScanNoteScreen from "./screens/ScanNote";
import HubScreen from "./screens/Hub";
import NewScreenScreen from "./screens/NewScreen";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Work Sans": require("./assets/fonts/Work_Sans/static/WorkSans-Regular.ttf"),
    "Work Sans 500": require("./assets/fonts/Work_Sans/static/WorkSans-Medium.ttf"),
    "Work Sans 600": require("./assets/fonts/Work_Sans/static/WorkSans-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" backgroundColor="#ffffff" />
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Create Account"
              component={CreateAccountScreen}
            />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
              name="Write New Note"
              component={WriteNewNoteScreen}
            />
            <Stack.Screen
              name="Scan Note"
              component={ScanNoteScreen}
            />
            <Stack.Screen
              name="Hub"
              component={HubScreen}
            />
            <Stack.Screen
              name="New Screen"
              component={NewScreenScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}
