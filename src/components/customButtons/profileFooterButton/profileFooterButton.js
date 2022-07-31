import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import profileFooterButtonStyle from './profileFooterButtonStyle'

export default function ProfileFooterButton({ text,colorA ,marginBottom}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        profileFooterButtonStyle.container,
        { backgroundColor: colorA ,marginBottom:marginBottom}
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