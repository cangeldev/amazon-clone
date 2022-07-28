import { Image, View } from 'react-native'
import React from 'react'
import randomImageStyle from './randomImageStyle'
import b1 from 'assets/images/adsImages/b1.jpg';
import b2 from 'assets/images/adsImages/b2.jpg';
import b3 from 'assets/images/adsImages/b3.jpg';
import b4 from 'assets/images/adsImages/b4.jpg';
import b5 from 'assets/images/adsImages/b5.jpg';
import b6 from 'assets/images/adsImages/b6.jpg';
export default function RandomImage() {
    const randomNumber = Math.floor(Math.random() * 6);
    const deneme = [b1, b2, b3, b4, b5, b6];
    return (
        <View style={randomImageStyle.container}>
            <Image source={deneme[randomNumber]} style={randomImageStyle.image} />
        </View>
    )
}