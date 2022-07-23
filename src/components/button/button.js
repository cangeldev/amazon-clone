import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import buttonStyle from './buttonStyle'

export default function Button({text, colorA}) {
  return (
    <TouchableOpacity  activeOpacity={0.4}  style={[buttonStyle.container,{backgroundColor:colorA}]}>
        <Text style={buttonStyle.textB}>{text}</Text>
    </TouchableOpacity>
  )
}