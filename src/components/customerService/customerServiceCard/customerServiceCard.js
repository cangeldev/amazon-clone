import { View, Text, Image } from 'react-native'
import React from 'react'
import customerServiceCardStyle from './customerServiceCardStyle'
import IconA from "react-native-vector-icons/AntDesign";
import colors from 'assets/colors/colors';




export default function CustomerServiceCard({ title ,path}) {
    return (
        <View style={customerServiceCardStyle.container}>
            <Image style={customerServiceCardStyle.image} source={path} />
            <Text style={customerServiceCardStyle.text}>{title}</Text>
            <IconA
                name={"right"}
                size={18}
                color={colors.black}
                style={customerServiceCardStyle.icon} />
        </View>
    )
}