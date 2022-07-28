import { View, TextInput } from 'react-native'
import React from 'react'
import IconI from "react-native-vector-icons/Ionicons";
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import colors from '../../assets/colors/colors';
import LinearGradient from 'react-native-linear-gradient';
import headerStyle from './headerStyle';

export default function Header() {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#00d4ff', '#50C9C3', '#50C9C3']}>
            <View style={headerStyle.headerContainer}>
                <View style={headerStyle.innerContainer}>
                    <TextInput
                        style={headerStyle.txtInput}
                        placeholder={"Amazon.com.tr'de Ara"}
                        placeholderTextColor={colors.greyPlaceHolder} />
                    <IconI
                        name="search"
                        size={22}
                        color={colors.black}
                        style={{ position: "absolute", marginLeft: 6 }} />
                    <IconM
                        name="qrcode-scan"
                        size={22}
                        color={colors.silver}
                        style={headerStyle.iconI} />
                </View>
            </View>
        </LinearGradient>
    )
}