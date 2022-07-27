import { View, Text, FlatList, } from 'react-native'
import React from 'react'
import HeaderMenuListCard from '../../cards/headerMenuListCard/headerMenuListCard';
import colors from "../../assets/colors/colors";
export default function HeaderList() {
  const [images, setimages] = React.useState([
    {
      id: 1,
      image: require("../../assets/images/headerMenuListImages/h1.jpg"),
    },
    {
      id: 2,
      image: require("../../assets/images/headerMenuListImages/h2.jpg"),
    },
    {
      id: 3,
      image: require('../../assets/images/headerMenuListImages/h3.jpg'),
    },
    {
      id: 4,
      image: require('../../assets/images/headerMenuListImages/h4.jpg'),
    },
    {
      id: 5,
      image: require('../../assets/images/headerMenuListImages/h5.jpg'),
    },
    {
      id: 6,
      image: require('../../assets/images/headerMenuListImages/h6.jpg'),
    },
    {
      id: 7,
      image: require('../../assets/images/headerMenuListImages/h7.jpg'),
    },
    {
      id: 8,
      image: require('../../assets/images/headerMenuListImages/h8.jpg'),
    }
  ]);
  const renderProducts = ({ item }) => <HeaderMenuListCard products={item} />
  return (
    <View style={{ borderBottomWidth: 5, borderBottomColor: colors.lightGrey,paddingHorizontal:3 }}>
      <FlatList
        data={images}
        renderItem={renderProducts}
        horizontal
        showsHorizontalScrollIndicator={false} />
    </View>
  )
}