import { View, Text, Image } from 'react-native'
import React from 'react'
import profileStyle from './profileStyle'
import IconI from "react-native-vector-icons/Ionicons";
import IconA from "react-native-vector-icons/AntDesign";
import colors from 'assets/colors/colors';
import ProfileButton from 'components/profileButton/profileButton';
import LinearGradient from 'react-native-linear-gradient';
import ContentInfo from 'components/contentInfo/contentInfo';
import ContentDiv from 'components/contentDiv/contentDiv';
export default function Profile() {
  return (
    <View style={profileStyle.container}>
      <View style={profileStyle.headerContainer}>
        <View style={profileStyle.logoContainer}>
          <Image
            source={require("assets/images/amazon-logo.png")}
            style={profileStyle.image} />
          <Text style={profileStyle.headerText}>.com.tr</Text>
        </View>
        <View style={profileStyle.headerLogoContainer}>
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
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#00d4ff', '#fff', '#fff', '#fff']}>
        <View style={profileStyle.profileContainer}>
          <View style={profileStyle.profileInnerContainer}>
            <View style={profileStyle.nameContainer}>
              <Text style={profileStyle.name} >Merhaba,</Text>
              <Text style={[profileStyle.name, { fontWeight: "bold", marginLeft: 4 }]}>Can</Text>
            </View>
            <View style={profileStyle.profileImageContainer}>
              <IconA
                name="user"
                size={40}
                color={colors.white}
              />
            </View>
          </View>
          <ProfileButton />
          <ContentInfo header={"Siparişlerim"} content={"Merhaba, yeni siparişiniz yok."} text={"Ana sayfaya geri dön"} />
        </View>
      </LinearGradient>
      <ContentInfo header={"Listelerim"} content={"Hiç liste oluşturmadınız."} text={"Bir liste oluştur"} />
      <ContentDiv header={"Hesabım"} text={"Siparişlerim"} />
    </View>
  )
}