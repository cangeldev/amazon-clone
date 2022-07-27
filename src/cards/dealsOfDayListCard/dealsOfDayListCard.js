import { View, Text, Image } from 'react-native'
import React from 'react'
import dealsOfDayListCardStyle from './dealsOfDayListCardStyle'
import IconI from "react-native-vector-icons/Ionicons";
import IconA from "react-native-vector-icons/FontAwesome";
import colors from '../../assets/colors/colors';
export default function DealsOfDayListCard({ products }) {
  return (
    <View style={dealsOfDayListCardStyle.container}>
      <View style={dealsOfDayListCardStyle.favoriContainer}>
        <IconI
          name="heart"
          size={22}
          color={colors.lightGrey}
        />
      </View>
      <Image style={dealsOfDayListCardStyle.image}
        source={{ uri: products.image }} />
      <View style={dealsOfDayListCardStyle.footerContainer}>
        <Text style={dealsOfDayListCardStyle.price}>
          {products.price} TL
        </Text>
        <View style={dealsOfDayListCardStyle.rateContainer}>
          <IconA
            name="star"
            size={22}
            color={colors.star}
          />
          <Text style={{ paddingLeft: 6, fontSize: 15, color: colors.black }} >{products.rating.rate}</Text>
          <Text style={{ marginLeft: 4, fontSize: 10, color: colors.black, marginTop:2 }} >{products.rating.count} İnceleme</Text>
        </View>
      </View>
      <Text style={dealsOfDayListCardStyle.title}
        numberOfLines={1}>{products.title}
      </Text>
    </View>
  )
}
