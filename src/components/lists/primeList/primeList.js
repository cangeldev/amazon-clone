import { View, FlatList, Text } from 'react-native'
import React from 'react'
import PrimeListCard from "./primeListCard/primeListCard"
import useFetch from 'hooks/useFetch/useFetch';
import PrimeListStyle from './primeListStyle';

export default function PrimeList({ name }) {
    const { products, error } = useFetch();
    const renderProducts = ({ item }) => <PrimeListCard products={item} />
    return (
        <View style={PrimeListStyle.container}>
            <Text style={PrimeListStyle.title}>{name}</Text>
            <FlatList data={products} renderItem={renderProducts} 
            initialNumToRender={10}

            showsVerticalScrollIndicator={false} />
            <Text style={PrimeListStyle.text}>Tüm fırsatları gör</Text>
        </View>
    )
}