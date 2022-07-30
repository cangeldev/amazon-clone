import { View, Text } from 'react-native'
import React from 'react'
import PrimeList from 'components/lists/primeList/primeList'
import menuStyle from './menuStyle'

export default function Menu() {
  return (
    <View style={menuStyle.container}>
      <Text>menu</Text>
      <PrimeList name={"Prime üyelerine özel fırsatlar"}/>
    </View>
  )
}