import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HomeScreenHeader from "components/homeScreenHeader/homeScreenHeader"
import Adress from 'components/adress/adress'
import shoppingCartStyle from './shoppingCartStyle'
import Lottie from 'lottie-react-native';
import colors from 'assets/colors/colors'
import RecommendedList from 'components/lists/recommendedList/recommendedList'
import AccountButton from 'components/customButtons/accountButton/accountButton'
import ProfileFooterButton from 'components/customButtons/profileFooterButton/profileFooterButton'


export default function ShoppingCart() {
  return (
    <View style={shoppingCartStyle.container}>
      <ScrollView stickyHeaderIndices={[0]}>
        <HomeScreenHeader />
        <Adress />
        <View style={shoppingCartStyle.bagContainer}>
          <Lottie speed={0.8} style={shoppingCartStyle.animation} source={require('assets/images/shopping-cart.json')} autoPlay loop />
          <View style={shoppingCartStyle.innerBagContainer}>
            <Text style={shoppingCartStyle.text}>
              Amazon sepetiniz boş
            </Text>
            <Text style={shoppingCartStyle.navigateText}>
              Kaldığınız yerden devam edin
            </Text>            
          </View>          
        </View>
        <Text style={{borderColor:colors.lightGrey,borderWidth:1, marginTop:5, height:14}}></Text>
        <RecommendedList name={"Tüm ürünlere yönelik öneriler:"}  buttonText={"Satın alma seçeneklerini gör"}/>
        <RecommendedList name={"En çok satılan ürünler:"} buttonText={"Sepete ekle"}  />
        <ProfileFooterButton text={"Alışverişe devam et"} colorA={colors.btnYellow} marginBottom={15}/>
      </ScrollView>
      
    </View>
  )
}