import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import profileFooterButtonStyle from './profileFooterButtonStyle'

export default function ProfileFooterButton({ text, colorA, marginBottom ,onPress}) {
  return (
    <TouchableOpacity onPress={onPress}
      style={[
        profileFooterButtonStyle.container,
        { backgroundColor: colorA, marginBottom: marginBottom }
      ]}>
      <Text
        style={
          profileFooterButtonStyle.text
        }>
        {text}
      </Text>
    </TouchableOpacity>
  )
}