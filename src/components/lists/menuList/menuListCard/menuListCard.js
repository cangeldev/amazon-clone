import { View, Text, Image } from 'react-native'
import React from 'react'
import menuListCardStyle from './menuListCardStyle'
export default function MenuListCard({ products }) {
  return (
    
    <View style={menuListCardStyle.container} >
      <Text style={menuListCardStyle.text} >{products.name}</Text>
      <Image style={menuListCardStyle.background} source={require("assets/images/aa.png")} />
        <Image style={menuListCardStyle.image} source={products.image} />
           
    </View>
  )
}