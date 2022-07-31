import { View, Text } from 'react-native'
import React from 'react'
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import rateContainerStyle from './rateContainerStyle';
export default function RateContainer({ rate, count }) {
    return (
        <View style={rateContainerStyle.container}>
            <Stars
                disabled={true}             
                rating={rate}
                count={5}
                half={true}
                fullStar={<Icon size={20} name={'star'} style={[rateContainerStyle.myStarStyle]} />}
                emptyStar={<Icon size={20} name={'star-outline'} style={[rateContainerStyle.myStarStyle, rateContainerStyle.myEmptyStarStyle]} />}
                halfStar={<Icon size={20} name={'star-half-full'} style={[rateContainerStyle.myStarStyle]} />}
            />
            <Text style={rateContainerStyle.count}> ({count})</Text>
        </View>
    )
}