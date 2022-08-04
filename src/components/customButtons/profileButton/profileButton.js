import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import profileButtonStyle from './profileButtonStyle'

export default function ProfileButton() {
  return (
    <View>
      <View style={profileButtonStyle.profileButtonContainer}>
        <TouchableOpacity
          activeOpacity={0.4}
          style={profileButtonStyle.container}>
          <Text
            style={
              profileButtonStyle.text
            }>
            Siparişlerim
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.4}
          style={profileButtonStyle.container}>
          <Text
            style={
              profileButtonStyle.text
            }>
            Tekrar Satın Al
          </Text>
        </TouchableOpacity>
      </View>
      <View style={profileButtonStyle.profileButtonContainer}>
        <TouchableOpacity
          activeOpacity={0.4}
          style={profileButtonStyle.container}>
          <Text
            style={
              profileButtonStyle.text
            }>
            Hesabım
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.4}
          style={profileButtonStyle.container}>
          <Text
            style={
              profileButtonStyle.text
            }>
            Listelerim
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}