import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from 'components/homeScreenHeader/homeScreenHeader'
import customerServiceStyle from './customerServiceStyle'
import CustomerServiceCard from './customerServiceCard/customerServiceCard'
import { Box, Debit, Forwards, Information, Mail, More, Prime, User } from 'assets/images'
import IconI from "react-native-vector-icons/Ionicons";
import colors from 'assets/colors/colors'
import IconA from "react-native-vector-icons/AntDesign";

export default function CustomerService() {
    return (
        <View style={customerServiceStyle.container}>
            <ScrollView stickyHeaderIndices={[0]}>
                <Header />
                <View style={customerServiceStyle.headerView}>
                    <Text style={customerServiceStyle.headerTitle}>
                        Merhaba Can. Size nasıl yardımcı olabiliriz?
                    </Text>
                    <Text style={customerServiceStyle.headerText}>
                        Sorununuzu buradan hızla düzeltebilirsiniz veya isterseniz sizi sorununuzu düzeltebilecek bir kişiye bağlayabiliriz.
                    </Text>
                    <View style={customerServiceStyle.line} />
                </View>
                <View style={customerServiceStyle.content}>
                    <CustomerServiceCard title={"Teslimat, sipariş veya iade"} path={Box} />
                    <View style={customerServiceStyle.line} />
                    <CustomerServiceCard title={"Ödemeler, Faturalar ve Hediye Kartları"} path={Debit} />
                    <View style={customerServiceStyle.line} />
                    <CustomerServiceCard title={"Hesap Ayarları  ve Veri Gizliliği"} path={User} />
                    <View style={customerServiceStyle.line} />
                    <CustomerServiceCard title={"Prime"} path={Prime} />
                    <View style={customerServiceStyle.line} />
                    <CustomerServiceCard title={"Şüpheli Durum Bildirin"} path={Mail} />
                    <View style={customerServiceStyle.line} />
                    <CustomerServiceCard title={"Ön sipariş soruları"} path={Information} />
                    <View style={customerServiceStyle.line} />
                    <CustomerServiceCard title={"e-Kitaplar, Prime Video veya Müzik"} path={Forwards} />
                    <View style={customerServiceStyle.line} />
                    <CustomerServiceCard title={"Diğer"} path={More} />
                    <View style={customerServiceStyle.line} />
                </View>
                <Text style={customerServiceStyle.footerTitle}>Yardım makalelerini Keşfedin</Text>
                <View>
                    <IconI
                        name="search"
                        size={18}
                        color={colors.black}
                        style={{ position: "absolute", marginLeft: 18, marginTop: 25 }} />
                    <TextInput placeholder='"Siparişim nerede?" gibi bir soru yazın' style={customerServiceStyle.txtInput} />
                </View>
                <TouchableOpacity style={customerServiceStyle.buton}>
                    <Text style={customerServiceStyle.text}>Tüm yardım konularını tarayın</Text>
                    <IconA
                        name={"right"}
                        size={18}
                        color={colors.black}
                        style={customerServiceStyle.icon} />
                </TouchableOpacity>
                <View style={customerServiceStyle.footerContainer}>
                    <View style={customerServiceStyle.footerText} />
                    <View>
                        <Text style={customerServiceStyle.footerInnerText}>Sayfanın sonuna geldiniz. Keşfetmeye devam edin!</Text>
                    </View>
                    <View style={customerServiceStyle.footerText} />
                </View>
            </ScrollView>

        </View>
    )
}