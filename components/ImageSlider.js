import React, {useState} from 'react'
import Image from 'next/image'
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'

export const ImageSlider = ({slides}) => {

    const [current, setCurrent]=useState(0)
    const length = slides.length;
    const nextSlide=()=>{
        //cons
    }
    const prevSlide=()=>{
        //cons
    }
    return (
        <section className="slider" >
            <FaArrowAltCircleLeft className="right-arrow" onClick={nextSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={prevSlide} />
            {slides.map((slide, index)=>(
                <Image
                key={index}
                src={slide.image}
                alt={slide.alt}
                width={200}
                height={200}
            //     layout="fill"
            // objectFit="contain"
                />
            ))}
        </section>
    )
}
