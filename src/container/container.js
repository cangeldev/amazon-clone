import { View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from 'pages/home/home'
import colors from 'assets/colors/colors'
import Profile from 'pages/profile/profile';
import ShoppingCart from 'pages/shoppingCart/shoppingCart';
import Menu from 'pages/menu/menu';
import IconO from "react-native-vector-icons/Octicons";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconF from "react-native-vector-icons/Feather";
import FirstRouter from 'pages/firstRouter/firstRouter';

export default function Container() {
  const stack = createNativeStackNavigator()
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer >
        <stack.Navigator screenOptions={{
          headerShown: false,
          statusBarColor: colors.statusBarColor,
          navigationBarColor: colors.white
        }}
          initialRouteName='TabNavigator'>
          <stack.Screen
            name='FirstRouter'
            component={FirstRouter}
          />
          <stack.Screen
            name='TabNavigator'
            component={TabNavigator}
          />
        </stack.Navigator>
      </NavigationContainer>
    </View>
  )
}
function TabNavigator() {
  const Tab = createBottomTabNavigator()
  return (
    <View style={{ height: "100%", paddingTop: 24 }}>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) =>
            (<IconO
              color={focused ? colors.green1 : colors.black}
              name="home"
              size={24} />),
          }} />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) =>
            (<IconFA
              color={focused ? colors.green1 : colors.black}
              name="user-o"
              size={24} />),
          }} />
        <Tab.Screen
          name="ShoppingCart"
          component={ShoppingCart}
          options={{

            tabBarIcon: ({ focused }) =>
            (<IconF
              color={focused ? colors.green1 : colors.black}
              name="shopping-cart"
              size={24} />),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{
            tabBarIcon: ({ focused }) =>
            (<IconF
              color={focused ? colors.green1 : colors.black}
              name="menu"
              size={24} />),
          }} />
      </Tab.Navigator>
    </View>
  );
}