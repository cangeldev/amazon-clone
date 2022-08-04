import { S1, S2, S3, S4, S5, S6 } from 'assets/images';
import React from 'react'
import { ImageSlider } from "react-native-image-slider-banner";
export default function Slider() {
    return (
        <ImageSlider localImg="true" resizeMode={'center'}
            data={[{ img: S1 }, { img: S2 }, { img: S3 }, { img: S4 }, { img: S5 }, { img: S6 },]}
            autoPlay={true}
            showIndicator={false}
            caroselImageStyle={{ height: 360 }}
            onClick={() => { null }}
            timer={3500}
        />
    )
}