import { View, Text, TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import homeStyle from './homeStyle'
import Header from '../../components/header/header'
import IconI from "react-native-vector-icons/Ionicons";
import IconE from "react-native-vector-icons/Entypo";
import colors from '../../assets/colors/colors';

export default function Home() {
  return (
    <View style={homeStyle.container}>
      <Header />

      <TouchableWithoutFeedback onPress={() => { console.log("asdas") }}>
        <View style={homeStyle.adressContainer}>
          <IconI
            name="md-location-outline"
            size={22}
            color={colors.black}
            style={{ marginLeft: 8 }} />
          <Text style={homeStyle.adressTxt}>Alıcı: Can - Düzce 81100</Text>
          <IconE
            name="chevron-down"
            size={22}
            color={colors.black}
            style={{ marginLeft:6 }} />
        </View>
      </TouchableWithoutFeedback>
      
    </View >
  )
}
