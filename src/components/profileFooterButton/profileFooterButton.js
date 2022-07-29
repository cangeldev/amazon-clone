import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import profileFooterButtonStyle from './profileFooterButtonStyle'

export default function ProfileFooterButton({ text }) {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      style={[
        profileFooterButtonStyle.container,
      ]}>
      <Text
        style={
          profileFooterButtonStyle.textB
        }>
        {text}
      </Text>
    </TouchableOpacity>
  )
}