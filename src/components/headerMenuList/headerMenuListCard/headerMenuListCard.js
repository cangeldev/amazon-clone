import { View, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import headerMenuListCardStyle from './headerMenuListCardStyle'

export default function HeaderMenuListCard({ products }) {
  return (
    <View style={headerMenuListCardStyle.container}>
      <TouchableWithoutFeedback >
        <Image source={products.image} style={headerMenuListCardStyle.image} />
      </TouchableWithoutFeedback>
    </View>
  )
}