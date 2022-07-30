import { View, Text, Image } from 'react-native'
import React from 'react'
import primeListCardStyle from './primeListCardStyle'
import IconI from "react-native-vector-icons/Ionicons";
import IconA from "react-native-vector-icons/FontAwesome";
import colors from 'assets/colors/colors';

export default function PrimeListCard({ products }) {
  return (
    <View style={primeListCardStyle.container}>

      <Image
        style={primeListCardStyle.image}
        source={{ uri: products.image }} />
      <View>
        <View style={primeListCardStyle.priceContainer}>
          <Text
            style={primeListCardStyle.price}>
            {products.price} TL
          </Text>
          <Text style={primeListCardStyle.priceText}>
            Prime'a özel fırsatlar
          </Text>
        </View>
        <View style={primeListCardStyle.rateContainer}>
          <IconA
            name="star"
            size={22}
            color={colors.star}
          />
          <Text style={primeListCardStyle.rate} >{products.rating.rate}</Text>
          <Text style={primeListCardStyle.rateText} >{products.rating.count} İnceleme</Text>
        </View>
        <Text style={primeListCardStyle.title} numberOfLines={1}>{products.title}      </Text>
      </View>
      <View style={primeListCardStyle.favoriContainer}>
        <IconI
          name="heart"
          size={18}
          color={colors.lightGrey}
        />
      </View>

    </View>
  )
}
