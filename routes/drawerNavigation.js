import { createDrawerNavigator } from "@react-navigation/native-stack";
import HomeStack from "./HomeStack";
import Home from "../screens/Home";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Game Zone",
        }}
      />
    </Drawer.Navigator>
  );
}
