
import { View, Text, Image } from 'react-native'
import React from 'react'
import newProductsCardStyle from './newProductsCardStyle'

export default function NewProductsCard({ products }) {
  return (
    <View style={newProductsCardStyle.container}>
      <Image style={newProductsCardStyle.image}
        source={{ uri: products.image }} />
      <Text style={newProductsCardStyle.title}
        numberOfLines={1}>{products.title}
      </Text>
      <Text style={newProductsCardStyle.price}>
        {products.price} TL
      </Text>
    </View>
  )
}
