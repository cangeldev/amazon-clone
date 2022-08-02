import { View, Text } from 'react-native'
import React from 'react'
import PrimeListCard from "./primeListCard/primeListCard"
import useFetch from 'hooks/useFetch/useFetch';
import PrimeListStyle from './primeListStyle';

export default function PrimeList({ name }) {
    const { products, error } = useFetch();

    return (
        <View style={PrimeListStyle.container}>
            <Text style={PrimeListStyle.title}>{name}</Text>
            {
                products.slice(0, 3).map((item) => <PrimeListCard item={item} key={item.id} products={item} />)
            }
            <Text style={PrimeListStyle.text}>Tüm fırsatları gör</Text>
        </View>
    )
}