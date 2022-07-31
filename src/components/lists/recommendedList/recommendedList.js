import { View, FlatList, Text } from 'react-native'
import React from 'react'
import useFetch from 'hooks/useFetch/useFetch';
import recommendedListStyle from './recommendedListStyle';
import RecommendedListCard from './recommendedListCard/recommendedListCard';

export default function RecommendedList({ name,buttonText }) {
    const { products, error } = useFetch();
    const renderProducts = ({ item }) => <RecommendedListCard products={item} buttonText={buttonText} />
    return (
        <View style={recommendedListStyle.container}>
            <Text style={recommendedListStyle.title}>{name}</Text>
            <FlatList data={products} renderItem={renderProducts} horizontal showsHorizontalScrollIndicator={false} />         
        </View>
    )
}