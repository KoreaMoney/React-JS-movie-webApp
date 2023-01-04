import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../Screen/Movies";
import My from "../Screen/My";
import { MaterialIcons } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { DARK_COLOR } from "../colors";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const isDark = useColorScheme() === "dark";

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: "beside-icon",
      }}
      sceneContainerStyle={{
        backgroundColor: DARK_COLOR,
      }}
    >
      <Tab.Screen
        options={{
          // headerTitleAlign: "left",
          title: "영화",
          tabBarLabel: "Movies",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="movie" size={size} color={color} />
          ),
        }}
        name="Movies"
        component={Movies}
      />
      <Tab.Screen
        options={{
          title: "내가 쓴 글",
          tabBarLabel: "My",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="my-library-books" size={size} color={color} />
          ),
          tabBarBadge: 5,
        }}
        name="My"
        component={My}
      />
    </Tab.Navigator>
  );
}
