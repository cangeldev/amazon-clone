import { View, Text, FlatList, } from 'react-native'
import React from 'react'
import HeaderListCard from '../../cards/headerListCard/headerListCard';
import colors from "../../assets/colors/colors";
export default function HeaderList({ horizontal }) {
  const [images, setimages] = React.useState([
    {
      id: 1,
      image: require("../../assets/images/headerListImages/h1.jpg"),
    },
    {
      id: 2,
      image: require("../../assets/images/headerListImages/h2.jpg"),
    },
    {
      id: 3,
      image: require('../../assets/images/headerListImages/h3.jpg'),
    },
    {
      id: 4,
      image: require('../../assets/images/headerListImages/h4.jpg'),
    },
    {
      id: 5,
      image: require('../../assets/images/headerListImages/h5.jpg'),
    },
    {
      id: 6,
      image: require('../../assets/images/headerListImages/h6.jpg'),
    },
    {
      id: 7,
      image: require('../../assets/images/headerListImages/h7.jpg'),
    },
    {
      id: 8,
      image: require('../../assets/images/headerListImages/h8.jpg'),
    }
  ]);
  const renderProducts = ({ item }) => <HeaderListCard products={item} />
  return (
    <View style={{ borderBottomWidth: 5, borderBottomColor: colors.lightGrey }}>
      <FlatList data={images} renderItem={renderProducts} horizontal={horizontal} />
    </View>
  )
}