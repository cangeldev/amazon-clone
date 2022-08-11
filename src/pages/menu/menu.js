import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import menuStyle from './menuStyle'
import Header from 'components/homeScreenHeader/homeScreenHeader'
import LinearGradient from 'react-native-linear-gradient';
import MenuList from 'components/lists/menuList/menuList';
import MenuButton from 'components/customButtons/menuButton/menuButton';
export default function Menu({navigation}) {
  return (
    <View style={menuStyle.container}>

      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#00d4ff', '#50C9C3', '#50C9C3']}>
        <ScrollView stickyHeaderIndices={[0]} >
          <Header />
          <MenuList />
          <MenuButton text={"Ayarlar"} iconName={"down"} display={"flex"}/>
          <MenuButton text={"Müşteri Hizmetleri"} iconName={"right"} display={"none"}  onPress={()=>navigation.navigate("CustomerService")}/>

        </ScrollView>
      </LinearGradient>
    </View>
  )
}