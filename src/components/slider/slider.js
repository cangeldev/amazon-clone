import React from 'react'
import { ImageSlider } from "react-native-image-slider-banner";
export default function Slider() {
    return (

        <ImageSlider localImg="true" resizeMode={'center'}
            data={[
                { img: require('../../assets/images/sliderImages/a1.jpg') },
                { img: require('../../assets/images/sliderImages/a2.jpg') },
                { img: require('../../assets/images/sliderImages/a3.jpg') },
                { img: require('../../assets/images/sliderImages/a4.jpg') },
                { img: require('../../assets/images/sliderImages/a5.jpg') },
                { img: require('../../assets/images/sliderImages/a6.jpg') },

            ]}
            autoPlay={true}
            showIndicator={false}
            caroselImageStyle={{ height: 360 }}
            onClick={() => { null }}
            timer={3500}
        />

    )
}