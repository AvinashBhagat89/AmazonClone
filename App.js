import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "./navigation/Home";
import Menu from "./navigation/Menu";
import User from "./navigation/User";
import Cart from "./navigation/Cart";
import CountryScreen from "./screens/CounrtyScreen";
import CustomerScreen from "./screens/CustomerScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from './screens/SignUpScreen';
import LogInScreen from './screens/LogInScreen';

const homeName = "Home";
const userName = "User";
const cartName = "Cart";
const menuName = "Menu";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


  function TabNavigator()  {
    return (
      <Stack.Navigator>
        {/* After doing the nested navigation the 1st screen which is add as StackNavigator to Stack.Screen will give you the 
        name of the screen at the top of the screen name={name given} you have to give the option headerShown false */}
        <Stack.Screen name="HomeScreen" component={StackNavigator}
        options={{presentation:"fullScreenModal", headerShown: false}} />
        <Stack.Screen name="CountryAndLanguages" component={CountryScreen} />
        <Stack.Screen name="CustomerService" component={CustomerScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="CreateAccount" component={SignUpScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
      </Stack.Navigator>
    )
  }

  function StackNavigator() {
    return (
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarInactiveTintColor: "#A5F3FC",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: [
            {
              display: "flex",
              paddingBottom: 4,
              height: 50,
            },
          ],
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let routeName = route.name;

            if (routeName === homeName) {
              iconName = focused ? "home-outline" : "home";
              // iconName = 'home-outline'
            } else if (routeName === userName) {
              iconName = focused ? "person-outline" : "person";
              // iconName = 'person-outline'
            } else if (routeName === cartName) {
              iconName = focused ? "cart-outline" : "cart";
              // iconName = 'cart-outline'
            } else if (routeName === menuName) {
              iconName = focused ? "menu-outline" : "menu";
              // iconName = 'menu-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="User" component={User} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Menu" component={Menu} />
      </Tab.Navigator>
    )
  }

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
