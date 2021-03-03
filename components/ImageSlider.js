import React, { useState } from "react";
import Image from "next/image";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <Element name="team" className="element">
      <section className="slider">
        <FaArrowAltCircleLeft
          className="left-arrow"
          onClick={prevSlide}
          color="#FF9800"
        />
        <FaArrowAltCircleRight
          className="right-arrow"
          onClick={nextSlide}
          color="#FF9800"
        />
        {SliderData.map((slide, index) => (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <Image
                className="image"
                src={slide.image}
                alt={slide.alt}
                width={900}
                height={600}
              />
            )}
          </div>
        ))}
      </section>
    </Element>
  );
};
