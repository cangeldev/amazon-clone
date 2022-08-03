import { View, FlatList} from 'react-native'
import React from 'react'
import ProductListCard from './productListCard/productListCard';
import useFetch from 'hooks/useFetch/useFetch';
export default function ProductList() {
    const { products, error } = useFetch();
    const renderProducts = ({ item }) => <ProductListCard products={item} />
    return (
        <View style={{ marginTop: -200, height: 200 }}>
            <FlatList
                data={products}
                renderItem={renderProducts}
                horizontal
                showsHorizontalScrollIndicator={false} />
        </View>
    )
}