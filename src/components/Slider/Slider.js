import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';
import Carousel from 'react-elastic-carousel';
import './style.css';

  const ImageSlider = () => {
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4}
    ] 
    return (
        <div className='imagediv'>
         
            <Carousel breakPoints={breakPoints}>
                <Card number='1'/>
                <Card number='2'/>
                <Card number='3'/>
                <Card number='4'/>
                <Card number='5'/>
                <Card number='6'/>
                <Card number='7'/>
                <Card number='6'/>
                <Card number='7'/>
            </Carousel>
            
               
        </div>
    );
    
            
}
export default ImageSlider;  