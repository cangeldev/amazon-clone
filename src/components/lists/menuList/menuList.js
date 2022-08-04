import { View } from 'react-native'
import React from 'react'
import MenuListCard from './menuListCard/menuListCard';

export default function MenuList() {
    const [images, setimages] = React.useState([
        {
            id: 1,
            image: require("assets/images/menu/hediye.png"),
            name: "Hediye",
        },
        {
            id: 2,
            image: require("assets/images/menu/firsat.png"),
            name: "Fırsatlar",
        },
        {
            id: 3,
            image: require("assets/images/menu/gida.png"),
            name: "Gıda ve İçecek",
        },
        {
            id: 4,
            image: require("assets/images/menu/temizlik.png"),
            name: "Sağlık, Bakım ve Temizlik",
        },
        {
            id: 5,
            image: require("assets/images/menu/evcil.png"),
            name: "Evcil Hayvan Ürünleri",
        },
        {
            id: 6,
            image: require("assets/images/menu/moda.png"),
            name: "Moda ve Güzellik",
        },
        {
            id: 7,
            image: require("assets/images/menu/mutfak.png"),
            name: "Ev, Mutfak ve Yapı market",
        },
        {
            id: 8,
            image: require("assets/images/menu/telefon.png"),
            name: "Telefon ve Elektronik",
        },
        {
            id: 9,
            image: require("assets/images/menu/gitar.png"),
            name: "Müzik, Video ve Oyun",
        },
        {
            id: 10,
            image: require("assets/images/menu/kitap.png"),
            name: "Kitap",
        },
        {
            id: 11,
            image: require("assets/images/menu/bebek.png"),
            name: "Bebek ve Çocuk Ürünleri",
        },
        {
            id: 12,
            image: require("assets/images/menu/ofis.png"),
            name: "Ofis Aksesuarları",
        },
        {
            id: 13,
            image: require("assets/images/menu/spor.png"),
            name: "Spor ve Outdoor",
        },
        {
            id: 14,
            image: require("assets/images/menu/valiz.png"),
            name: "Valiz ve Aksesuarları",
        },
        {
            id: 15,
            image: require("assets/images/menu/hesap.png"),
            name: "Hesabım",
        }
    ]);
    return (
        <View style={{ marginBottom: 10, flexDirection: 'row', flexWrap: 'wrap' }}>
            {
                images.map((item) => <MenuListCard item={item} key={item.id} products={item} />)
            }
        </View>
    )
}