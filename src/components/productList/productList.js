import { View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductListCard from '../../cards/productListCard/productListCard';
import axios from 'axios';
export default function ProductList() {
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
    const renderProducts = ({ item }) => <ProductListCard products={item} />
    return (
        <View style={{ marginTop: -200, height: 200 }}>
            <FlatList data={products} renderItem={renderProducts} horizontal   showsHorizontalScrollIndicator={false}/>
        </View>
    )
}