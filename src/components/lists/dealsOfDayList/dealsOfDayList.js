import { View, FlatList, Text } from 'react-native'
import React from 'react'
import dealsOfDayListStyle from './dealsOfDayListStyle';
import DealsOfDayListCard from "./dealsOfDayListCard/dealsOfDayListCard"
import useFetch from 'hooks/useFetch/useFetch';

export default function DealsOfDayList({ name }) {
    const { products, error } = useFetch();
    const renderProducts = ({ item }) => <DealsOfDayListCard products={item} />
    return (
        <View style={dealsOfDayListStyle.container}>
            <Text style={dealsOfDayListStyle.title}>{name}</Text>
            <FlatList data={products} renderItem={renderProducts} horizontal showsHorizontalScrollIndicator={false} />
            <Text  style={dealsOfDayListStyle.text}>Tüm fırsatları gör</Text>
        </View>

        
    )
}