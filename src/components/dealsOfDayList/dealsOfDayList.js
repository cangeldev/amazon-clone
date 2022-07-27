import { View, FlatList,Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DealsOfDayListCard from '../../cards/dealsOfDayListCard/dealsOfDayListCard';
import dealsOfDayListStyle from './dealsOfDayListStyle';

export default function DealsOfDayList({name}) {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    async function fetchData() {
        //  https://fakestoreapi.com/products
        try {
            const response = await axios.get('https://fakestoreapi.com/products?limit=9');
            setProducts(response.data);
        } catch (err) {
            console.log("asd")
            setError(err);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const renderProducts = ({ item }) => <DealsOfDayListCard products={item} />
    return (
        <View style={dealsOfDayListStyle.container}>
            <Text style={dealsOfDayListStyle.title}>{name}</Text>
            <FlatList data={products} renderItem={renderProducts} horizontal showsHorizontalScrollIndicator={false}/>
            <Text style={dealsOfDayListStyle.text}>Tüm fırsatları gör</Text>
        </View>
    )
}