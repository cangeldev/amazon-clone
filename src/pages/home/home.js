import { View, ScrollView, Image } from 'react-native'
import React from 'react'
import homeStyle from './homeStyle'
import Header from 'components/homeScreenHeader/homeScreenHeader'

import RandomImage from 'components/randomImage/randomImage';
import Slider from 'components/slider/slider';
import HeaderMenuList from 'components/headerMenuList/headerMenuList';
import ProductList from 'components/lists/productList/productList';
import DealsOfDayList from 'components/lists/dealsOfDayList/dealsOfDayList';
import Adress from 'components/adress/adress';

export default function Home() {
  return (
    <View style={homeStyle.container}>
      <ScrollView stickyHeaderIndices={[0]} >
        <Header />
        <Adress />
        <HeaderMenuList />
        <Slider />
        <ProductList />
        <View style={homeStyle.imageContainer}>
          <Image
            source={require("assets/images/reklam.jpeg")}
            style={homeStyle.image} />
        </View>
        <RandomImage />
        <DealsOfDayList name={"Günün Fırsatları"} />
      </ScrollView>
    </View >
  )
}
