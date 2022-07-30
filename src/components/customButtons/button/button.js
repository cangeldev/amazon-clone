import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import buttonStyle from './buttonStyle'

export default function Button({ text, colorA, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.4}
      style={[
        buttonStyle.container,
        { backgroundColor: colorA }
      ]}>
      <Text
        style={
          buttonStyle.text
        }>
        {text}
      </Text>
    </TouchableOpacity>
  )
}