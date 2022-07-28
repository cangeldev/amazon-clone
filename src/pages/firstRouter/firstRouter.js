import { View, Text, Image, BackHandler } from 'react-native'
import React from 'react'
import firstRouterStyle from './firstRouterStyle'
import Button from 'components/button/button'
import colors from 'assets/colors/colors'

export default function FirstRouter({ navigation }) {
  return (
    <View
      style={firstRouterStyle.container}>
      <View>
        <Image
          style={firstRouterStyle.amazonLogo}
          source={require("../../assets/images/amazon-logo.png")} />
        <Text
          style={firstRouterStyle.headerTitle}>
          Hesabınıza giriş yapın
        </Text>
      </View>
      <Text
        style={firstRouterStyle.headerText} >
        İstek listenizi görüntüleyin {"\n"}
        Siparişleri Bulma ve Sınıflandırma{"\n"}
        Alışverişlerinizi takip edin
      </Text>
      <Button
        text={"Müşteri misiniz? Giriş yapın"}
        colorA={colors.orangeButton} />
      <Button
        text={"Yeni bir Amazon.com.tr kullanıcı mısınız? Hesap oluşturun"}
        colorA={colors.greyButton}
        onPress={() => navigation.navigate('TabNavigator')} />
      <Button
        text={"Çıkış Yap"}
        colorA={colors.greyButton}
        onPress={() => { BackHandler.exitApp() }} />
    </View>
  )
}