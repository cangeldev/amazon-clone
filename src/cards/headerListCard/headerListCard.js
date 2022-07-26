import { View, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import headerListCardStyle from './headerListCardStyle'

export default function HeaderListCard({ products }) {
  return (
    <View style={headerListCardStyle.container}>
      <TouchableWithoutFeedback >
        <Image source={products.image} style={headerListCardStyle.image} />
      </TouchableWithoutFeedback>
    </View>
  )
}