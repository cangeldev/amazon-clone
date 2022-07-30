import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import accountButtonStyle from './accountButtonStyle'


export default function AccountButton({ text }) {
    return (
        <TouchableOpacity
            activeOpacity={0.4}
            style={accountButtonStyle.container}>
            <Text
                style={
                    accountButtonStyle.text
                }>
                {text}
            </Text>
        </TouchableOpacity>
    )
}