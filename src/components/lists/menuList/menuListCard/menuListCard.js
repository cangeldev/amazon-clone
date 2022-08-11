import { View, Text, Image } from 'react-native'
import React from 'react'
import menuListCardStyle from './menuListCardStyle'
import { Arkaplan } from 'assets/images'
export default function MenuListCard({ products }) {
  return (
    
    <View style={menuListCardStyle.container} >
      <Text style={menuListCardStyle.text} >{products.name}</Text>
      <Image style={menuListCardStyle.background} source={Arkaplan} />
        <Image style={menuListCardStyle.image} source={products.image} />           
    </View>
  )
}