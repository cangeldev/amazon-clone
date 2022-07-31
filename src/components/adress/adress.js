import { View, Text,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import adressStyle from './adressStyle'
import colors from 'assets/colors/colors'
import IconI from "react-native-vector-icons/Ionicons";
import IconE from "react-native-vector-icons/Entypo";
export default function Adress() {
  return (
    <TouchableWithoutFeedback onPress={() => { console.log("asdas") }}>
    <View style={adressStyle.adressContainer}>
      <IconI
        name="md-location-outline"
        size={22}
        color={colors.black}
        style={{ marginLeft: 8 }} />
      <Text style={adressStyle.adressTxt}>
        Alıcı: Can - Düzce 81100
      </Text>
      <IconE
        name="chevron-down"
        size={22}
        color={colors.black}
        style={{ marginLeft: 6 }} />
    </View>
  </TouchableWithoutFeedback>
  )
}