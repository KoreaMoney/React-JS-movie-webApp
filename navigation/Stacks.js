import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/**Navigator 기본 구조 공간 */
const Stack = createNativeStackNavigator();

/**Component 공간 */
/**Screen Components 공간 */
const One = ({ route: { params }, navigation: { navigate } }) => {
  // console.log(params);
  return (
    <TouchableOpacity
      onPress={() => {
        navigate("Two");
      }}
    >
      <Text>One</Text>
    </TouchableOpacity>
  );
};
const Two = ({ navigation: { navigate, setOptions } }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigate("Three");
        }}
      >
        <Text>Two</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setOptions({ title: "변경된 제목" });
        }}
      >
        <Text>setOptions</Text>
      </TouchableOpacity>
    </View>
  );
};
const Three = ({ navigation: { goBack, reset } }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          goBack();
        }}
      >
        <Text>Three</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          reset({ index: 1, routes: [{ name: "Three" }, { name: "Two" }] });
        }}
      >
        <Text>Reset Navigation</Text>
      </TouchableOpacity>
    </View>
  );
};

/**App전체 공간 */
export default function Stacks() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "red",
        headerBackTitle: "back",
      }}
    >
      <Stack.Screen name="one" component={One} />
      <Stack.Screen name="Two" component={Two} />
      <Stack.Screen
        options={{ presentation: "modal" }}
        name="Three"
        component={Three}
      />
    </Stack.Navigator>
  );
}
