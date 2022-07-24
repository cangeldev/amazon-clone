import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FirstRouter from '../pages/firstRouter/firstRouter'
import Home from '../pages/home/home'
import colors from '../assets/colors/colors'


export default function Container() {
  const stack = createNativeStackNavigator()
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer >
        <stack.Navigator screenOptions={{
          headerShown: false,
          statusBarColor: colors.statusBarColor,
        }}
          initialRouteName='Home'>
          <stack.Screen
            name='FirstRouter'
            component={FirstRouter}
          />
          <stack.Screen
            name='Home'
            component={Home}
          />
        </stack.Navigator>
      </NavigationContainer>
    </View>
  )
}