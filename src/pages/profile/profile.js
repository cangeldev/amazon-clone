import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import profileStyle from './profileStyle'
import IconA from "react-native-vector-icons/AntDesign";
import colors from 'assets/colors/colors';
import ProfileButton from 'components/customButtons/profileButton/profileButton';
import LinearGradient from 'react-native-linear-gradient';
import ContentInfo from 'components/contentInfo/contentInfo';
import ContentDiv from 'components/contentDiv/contentDiv';
import ProfileScreenHeader from 'components/profileScreenHeader/profileScreenHeader';
export default function Profile({navigation}) {
  return (
    <View style={profileStyle.container}>
      <ScrollView stickyHeaderIndices={[0]} >
        <ProfileScreenHeader />
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#00d4ff', '#fff', '#fff', '#fff', '#fff']}>
          <View style={profileStyle.profileContainer}>
            <View style={profileStyle.profileInnerContainer}>
              <View style={profileStyle.nameContainer}>
                <Text style={profileStyle.name} >Merhaba,</Text>
                <Text style={[profileStyle.name, {   fontFamily: "OpenSans-SemiBold", marginLeft: 4 }]}>Can</Text>
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
            <ContentInfo   onPress={() => navigation.navigate('Home')}  header={"Siparişlerim"} content={"Merhaba, yeni siparişiniz yok."} text={"Ana sayfaya geri dön"} />
          </View>
        </LinearGradient>
        <ContentInfo
          header={"Listelerim"}
          content={"Hiç liste oluşturmadınız."}
          text={"Bir liste oluştur"} />
        <ContentDiv
          header={"Hesabım"}
          text={"Siparişlerim"}
          button={"Ödemeleriniz"}
          navText={"Tümünü göster"} />
        <ContentDiv
          header={"Hediye Kartı Bakiyesi: ₺0,00"}
          text={"Hediye Kartı Kullanma"}
          button={"Hediye Kartı Satın Al"}
          navText={"Yönet"} />
        <Text style={{
          borderColor: colors.lightGrey,
          borderTopWidth: 5,
        }}></Text>
        <ContentInfo header={"Tekrar Satın Al"} content={"Tekrar Satın Al'da başkalarının yeniden sipariş ettikleri ürünleri görün."} text={"Tekrar Satın Al sayfasını ziyaret edin"} />
      </ScrollView>

    </View>
  )
}