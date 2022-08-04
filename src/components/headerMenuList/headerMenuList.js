import { View, ScrollView } from 'react-native'
import React from 'react'
import HeaderMenuListCard from './/headerMenuListCard/headerMenuListCard';
import colors from "assets/colors/colors";
import { H1, H2, H3, H4, H5, H6, H7, H8 } from 'assets/images';
export default function HeaderList() {
  const [images, setimages] = React.useState([
    {
      id: 1,
      image: H1,
    },
    {
      id: 2,
      image: H2,
    },
    {
      id: 3,
      image: H3,
    },
    {
      id: 4,
      image: H4,
    },
    {
      id: 5,
      image: H5,
    },
    {
      id: 6,
      image: H6,
    },
    {
      id: 7,
      image: H7,
    },
    {
      id: 8,
      image: H8,
    }
  ]);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>

      <View style={{ flexDirection: 'row', borderBottomWidth: 5, borderBottomColor: colors.lightGrey, paddingHorizontal: 3 }}>
        {
          images.map((item) => <HeaderMenuListCard item={item} key={item.id} products={item} />)
        }
      </View>
    </ScrollView>
  )
}