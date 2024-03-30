import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Form from "../screens/Form";
import Users from "../screens/Users";
import { user } from "../data/Profile";

import usersRepository from "../models/user/UserRepository";

const users = usersRepository.getAll();

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#0021AD" : "#528DFF"}
            />
          ),
          tabBarLabel: "Inicial",
          tabBarActiveTintColor: "#0021AD",
          tabBarInactiveTintColor: "#528DFF",
        }}
      />

      <Tab.Screen
        name="Users"
        component={Users}
        initialParams={{ users }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="users"
              size={24}
              color={focused ? "#0021AD" : "#528DFF"}
            />
          ),
          tabBarLabel: "Filiais",
          tabBarActiveTintColor: "#0021AD",
          tabBarInactiveTintColor: "#528DFF",
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{ data: user }}
        options={{
          tabBarItemStyle: {
            display: "none",
          },
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#0021AD" : "#528DFF"}
            />
          ),
          tabBarLabel: "Perfil",
          tabBarActiveTintColor: "#0021AD",
          tabBarInactiveTintColor: "#528DFF",
        }}
      />

      <Tab.Screen
        name="Form"
        component={Form}
        initialParams={{ user: null, edit: false }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "#0021AD" : "#528DFF"}
            />
          ),
          tabBarLabel: "Cadastro",
          tabBarActiveTintColor: "#0021AD",
          tabBarInactiveTintColor: "#528DFF",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
