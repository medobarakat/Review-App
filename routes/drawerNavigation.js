import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";



const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="About"
        component={AboutStack}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
