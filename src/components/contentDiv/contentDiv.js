import { View, Text } from 'react-native'
import React from 'react'
import contentDivStyle from './contentDivStyle'
import AccountButton from 'components/customButtons/accountButton/accountButton'
export default function ContentDiv({ header, text, button, navText }) {
  return (
    <View style={contentDivStyle.container}>
      <Text style={contentDivStyle.navigateText}>{navText}</Text>
      <Text style={contentDivStyle.text}>{header}</Text>
      <View style={{ flexDirection: "row" }}>
        <AccountButton text={text} />
        <AccountButton text={button} />
      </View>
    </View>
  )
}