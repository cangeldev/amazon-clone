import { View, Text, TouchableWithoutFeedback, ScrollView, Image } from 'react-native'
import React from 'react'
import homeStyle from './homeStyle'
import Header from '../../components/header/header'
import IconI from "react-native-vector-icons/Ionicons";
import IconE from "react-native-vector-icons/Entypo";
import colors from 'assets/colors/colors';
import RandomImage from 'components/randomImage/randomImage';
import Slider from 'components/slider/slider';
import HeaderMenuList from 'components/headerMenuList/headerMenuList';
import ProductList from 'components/productList/productList';
import DealsOfDayList from 'components/dealsOfDayList/dealsOfDayList';

export default function Home() {
  return (
    <View style={homeStyle.container}>
      <ScrollView stickyHeaderIndices={[0]} >
        <Header />
        <TouchableWithoutFeedback onPress={() => { console.log("asdas") }}>
          <View style={homeStyle.adressContainer}>
            <IconI
              name="md-location-outline"
              size={22}
              color={colors.black}
              style={{ marginLeft: 8 }} />
            <Text style={homeStyle.adressTxt}>
              Alıcı: Can - Düzce 81100
            </Text>
            <IconE
              name="chevron-down"
              size={22}
              color={colors.black}
              style={{ marginLeft: 6 }} />
          </View>
        </TouchableWithoutFeedback>
        <HeaderMenuList />
        <Slider />
        <ProductList />
        <View style={homeStyle.imageContainer}>
          <Image
            source={require("../../assets/images/reklam.jpeg")}
            style={homeStyle.image} />
        </View>
        <RandomImage />
        <DealsOfDayList name={"Günün Fırsatları"}/>
      </ScrollView>
    </View >
  )
}
