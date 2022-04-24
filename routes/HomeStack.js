import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ReviewDetail from "../screens/ReviewDetail";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerStyle: { backgroundColor: "#eee" },
          title: false,
        }}
      >
        <Stack.Screen
          name="Home Page"
          component={Home}
          options={{
            title: "Game Zone",
          }}
        />
        <Stack.Screen
          name="ReviewDetail"
          component={ReviewDetail}
          options={{
            title: "Review Details",
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
