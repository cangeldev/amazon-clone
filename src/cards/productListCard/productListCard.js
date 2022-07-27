import { View, Text, Image } from 'react-native'
import React from 'react'
import productListCardStyle from './productListCardStyle'

export default function ProductListCard({ products }) {
  return (
    <View style={productListCardStyle.container}>

      <Image style={productListCardStyle.image}
        source={{ uri: products.image }} />
      <Text style={productListCardStyle.title}
        numberOfLines={1}>{products.title}
      </Text>
      <Text style={productListCardStyle.price}>
        {products.price} TL
      </Text>
    </View>
  )
}