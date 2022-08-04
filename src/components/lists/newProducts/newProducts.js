import { View } from 'react-native'
import React from 'react'
import useFetch from 'hooks/useFetch/useFetch';
import NewProductsCard from './newProductsCard.js/newProductsCard';
import newProductsStyle from './newProductsStyle';
export default function NewProducts() {
    const { products, error } = useFetch();
    return (
        <View style={newProductsStyle.container} >
            {
                products.slice(5, 9).map((item) =>
                    <NewProductsCard item={item} key={item.id} products={item} />)
            }
        </View>
    )
}
