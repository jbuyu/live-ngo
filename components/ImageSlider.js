import React from 'react'
import { SliderData } from './sliderData'
import Image from 'next/image'

export const ImageSlider = () => {
    return (
        <div>
            {SliderData.map((slide, index)=>(
                <Image
                key={index}
                src={slide.image}
                alt={slide.alt}
                width={500}
                height={500}
                />
            ))}
        </div>
    )
}
