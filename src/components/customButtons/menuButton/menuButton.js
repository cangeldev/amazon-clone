import { Text, TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import menuButtonStyle from './menuButtonStyle'
import IconA from "react-native-vector-icons/AntDesign";
import colors from 'assets/colors/colors';

export default function MenuButton({ text, onPress, iconName,display }) {
    const displayV =display
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.4}
            style={[
                menuButtonStyle.container
            ]}>
            <Text
                style={
                    menuButtonStyle.text
                }>
                {text}              
            </Text>
            <Image   style={[menuButtonStyle.image, {display:displayV}]} source={require("assets/images/bayrak.png")}/>
            <IconA
                name={iconName}
                size={22}
                color={colors.black}
                style={menuButtonStyle.icon} />
        </TouchableOpacity>
    )
}