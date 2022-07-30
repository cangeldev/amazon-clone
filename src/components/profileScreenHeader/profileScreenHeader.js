import { View, Text,Image } from 'react-native'
import React from 'react'
import profileScreenHeaderStyle from './profileScreenHeaderStyle'
import colors from 'assets/colors/colors'
import IconI from "react-native-vector-icons/Ionicons";
export default function ProfileHeader() {
  return (
    <View style={profileScreenHeaderStyle.headerContainer}>
    <View style={profileScreenHeaderStyle.logoContainer}>
      <Image
        source={require("assets/images/amazon-logo.png")}
        style={profileScreenHeaderStyle.image} />
      <Text style={profileScreenHeaderStyle.headerText}>.com.tr</Text>
    </View>
    <View style={profileScreenHeaderStyle.headerLogoContainer}>
      <IconI
        name="md-notifications-outline"
        size={24}
        color={colors.black}
      />
      <IconI
        name="search-outline"
        size={24}
        color={colors.black}
      />
    </View>
  </View >
  )
}