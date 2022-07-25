import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FirstRouter from '../pages/firstRouter/firstRouter'
import Home from '../pages/home/home'
import colors from '../assets/colors/colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function Container() {
  const stack = createNativeStackNavigator()
  
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer >
        <stack.Navigator screenOptions={{
          headerShown: false,
          statusBarColor: colors.statusBarColor,
        }}
          initialRouteName='FirstRouter'>
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
    <Tab.Navigator screenOptions={{headerShown:false}}>
       <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="FirstRouter" component={FirstRouter} />
     
    </Tab.Navigator>
  );
}