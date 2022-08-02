import { View, Text ,Image} from 'react-native'
import React from 'react'
import productStyle from './productStyle'

export default function Product() {
  return (
    <View style={productStyle.container}>
      <Text style={productStyle.text}>product</Text>
      <Image style={productStyle.image} source={require("assets/images/card/1.jpg")}/>

    </View>
  )
}