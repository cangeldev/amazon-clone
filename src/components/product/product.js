import { View, Text ,Image} from 'react-native'
import React from 'react'
import productStyle from './productStyle'

export default function Product({name,path}  ) {
  
  return (
    <View style={productStyle.container}>
      <Text style={productStyle.text}>{name}</Text>
      <Image style={productStyle.image} source={path}/>

    </View>
  )
}