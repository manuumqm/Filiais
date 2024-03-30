import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Form from "../screens/Form";
import { user } from "../data/Profile";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "##0021AD" : "#528DFF"}
            />
          ),
          drawerLabel: "Inicial",
          drawerActiveTintColor: "#0021AD",
          drawerInactiveTintColor: "#528DFF",
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        initialParams={{ data: user }}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#0021AD" : "#528DFF"}
            />
          ),
          drawerLabel: "Perfil",
          drawerActiveTintColor: "#0021AD",
          drawerInactiveTintColor: "#528DFF",
        }}
      />
      <Drawer.Screen
        name="Form"
        component={Form}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "#0021AD" : "#528DFF"}
            />
          ),
          drawerLabel: "Categorias",
          drawerActiveTintColor: "#0021AD",
          drawerInactiveTintColor: "#528DFF",
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
