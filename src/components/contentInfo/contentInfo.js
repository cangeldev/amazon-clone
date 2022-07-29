import { View, Text } from 'react-native'
import React from 'react'
import ProfileFooterButton from 'components/profileFooterButton/profileFooterButton'
import contentInfoStyle from './contentInfoStyle'

export default function ContentInfo({text, header,content}) {
  return (
    <View>
       <Text style={contentInfoStyle.text}>{header}</Text>    
          <Text style={contentInfoStyle.textInfo}>{content}</Text>    
          <ProfileFooterButton text={text}/>
    </View>
  )
}