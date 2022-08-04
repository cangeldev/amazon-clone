import { View, ScrollView, Image, Text } from 'react-native'
import React from 'react'
import homeStyle from './homeStyle'
import Header from 'components/homeScreenHeader/homeScreenHeader'
import RandomImage from 'components/randomImage/randomImage';
import Slider from 'components/slider/slider';
import HeaderMenuList from 'components/headerMenuList/headerMenuList';
import ProductList from 'components/lists/productList/productList';
import DealsOfDayList from 'components/lists/dealsOfDayList/dealsOfDayList';
import Adress from 'components/adress/adress';
import PrimeList from 'components/lists/primeList/primeList';
import Product from 'components/product/product';
import NewProducts from 'components/lists/newProducts/newProducts';
import { R1, R2, R3, R4, R5 } from 'assets/images';

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
        <PrimeList name={"Prime Özel Fırsatlar"}/>
        <Product name={"Kulaklıkları keşfet"} path={R1} />
        <NewProducts />
        <Product name={"Elektrik malzemeleri"} path={R2} />
        <NewProducts />
        <Product name={"Amazon Lojistik"} path={R3} />
        <Product name={"Mutfak ve Banyo ürünlerini Keşfet"} path={R4} />
        <NewProducts />
        <Product name={"Her yaşa uygun yapbozları keşfedin"} path={R5} />
        <View style={homeStyle.footerContainer}>
          <View style={homeStyle.text} />
          <View>
            <Text style={homeStyle.footerInnerText}>Sayfanın sonuna geldiniz. Keşfetmeye devam edin!</Text>
          </View>
          <View style={homeStyle.text} />
        </View>
      </ScrollView>
    </View >
  )
}
