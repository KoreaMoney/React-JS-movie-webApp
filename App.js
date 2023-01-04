import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import Stacks from "./navigation/Stacks";
import Tabs from "./navigation/Tabs";
import Root from "./navigation/Root";
import { useColorScheme } from "react-native";

import { darkTheme, lightTheme } from "./theme";
import { ThemeProvider } from "@emotion/react";

export default function App() {
  const isDark = useColorScheme() === "dark";

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </ThemeProvider>
  );
}
