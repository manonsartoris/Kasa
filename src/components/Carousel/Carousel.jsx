import React, { useState } from 'react';
import { ReactComponent as ArrowLeft } from "../../assets/ArrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../assets/ArrowRight.svg";
import './Carousel.css'

export default function Carousel(props){
  const { images } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? images.length - 1 : newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex === images.length ? 0 : newIndex);
  };

  return (
    <div>
      {images.length === 1  
        ? ('') 
        : (
          <div className='arrowLeft' onClick={previousSlide}>
            <ArrowLeft width='80%'/>
          </div>
        )
      }
      <img className='slide' src={images[currentIndex]} alt="Slide" />
      <div className="imageNumber">{currentIndex + 1}/{images.length}</div>
      {images.length === 1  
        ? ('') 
        : (
          <div className='arrowRight' onClick={nextSlide}>
            <ArrowRight width='80%'/>
          </div>
        )
      }
    </div>
  );
};

