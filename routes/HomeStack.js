import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ReviewDetail from "../screens/ReviewDetail";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

export default function HomeStack({ navigation }) {
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
          options={(navigation) => {
            return {
              headerTitle: () => <Header navigation={navigation} />,
              // title: "Review Details",
            };
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
