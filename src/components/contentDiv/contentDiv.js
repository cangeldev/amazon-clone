import { View, Text } from 'react-native'
import React from 'react'
import ProfileFooterButton from 'components/profileFooterButton/profileFooterButton'
import contentDivStyle from './contentDivStyle'


export default function ContentDiv({text, header}) {
  return (
    <View>
       <Text style={contentDivStyle.text}>{header}</Text>              
         <View style={{flexDirection:"row", width:100, backgroundColor:"red"}}>
         <ProfileFooterButton text={text}/>
          <ProfileFooterButton text={text}/>
         </View>
    </View>
  )
}