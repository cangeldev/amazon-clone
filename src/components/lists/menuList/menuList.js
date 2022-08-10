import { View } from 'react-native'
import React from 'react'
import MenuListCard from './menuListCard/menuListCard';
import { Hediye,Firsat ,Gida,Evcil,Temizlik,Moda,Mutfak, Kitap, Telefon,Gitar, Hesap, Valiz, Spor, Ofis, Bebek} from 'assets/images';

export default function MenuList() {
    const [images, setimages] = React.useState([
        {
            id: 1,
            image:Hediye,
            name: "Hediye",
        },
        {
            id: 2,
            image: Firsat,
            name: "Fırsatlar",
        },
        {
            id: 3,
            image:Gida,
            name: "Gıda ve İçecek",
        },
        {
            id: 4,
            image: Temizlik,
            name: "Sağlık, Bakım ve Temizlik",
        },
        {
            id: 5,
            image: Evcil,
            name: "Evcil Hayvan Ürünleri",
        },
        {
            id: 6,
            image:Moda,
            name: "Moda ve Güzellik",
        },
        {
            id: 7,
            image:Mutfak,
            name: "Ev, Mutfak ve Yapı market",
        },
        {
            id: 8,
            image: Telefon,
            name: "Telefon ve Elektronik",
        },
        {
            id: 9,
            image: Gitar,
            name: "Müzik, Video ve Oyun",
        },
        {
            id: 10,
            image: Kitap,
            name: "Kitap",
        },
        {
            id: 11,
            image: Bebek,
            name: "Bebek ve Çocuk Ürünleri",
        },
        {
            id: 12,
            image: Ofis,
            name: "Ofis Aksesuarları",
        },
        {
            id: 13,
            image: Spor,
            name: "Spor ve Outdoor",
        },
        {
            id: 14,
            image: Valiz,
            name: "Valiz ve Aksesuarları",
        },
        {
            id: 15,
            image:Hesap,
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