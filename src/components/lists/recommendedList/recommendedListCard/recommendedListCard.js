import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import IconI from "react-native-vector-icons/Ionicons";
import colors from 'assets/colors/colors';
import recommendedListCardStyle from './recommendedListCardStyle';
import RateContainer from 'components/rateContainer/rateContainer';


export default function RecommendedListCard({ products,buttonText }) {
  return (
    <View style={recommendedListCardStyle.container}>
      <View style={recommendedListCardStyle.favoriContainer}>
        <IconI
          name="heart"
          size={22}
          color={colors.lightGrey}
        />
      </View>
      <Image style={recommendedListCardStyle.image}
        source={{ uri: products.image }} />
      <View style={recommendedListCardStyle.footerContainer}>
      <Text style={recommendedListCardStyle.title}
        numberOfLines={1}>{products.title}
      </Text>
        <Text
          style={recommendedListCardStyle.price}>
          {products.price} TL
        </Text>      
        <RateContainer rate={products.rating.rate} count={products.rating.count}/>
        <TouchableOpacity style={recommendedListCardStyle.button} onPress={()=>null}>
            <Text style={recommendedListCardStyle.text}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
     
    </View>
  )
}
