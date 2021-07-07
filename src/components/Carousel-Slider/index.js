import React, { useState,useEffect } from 'react';
import './style.css';
import Container from '../Carousel-Container';

const Carousel = ({images}) => {
    const [ position,setPosition ] = useState(0);

    const changePosition = (index) => {
        const imageIndex = position + index;
        if (imageIndex > images.length - 1) {
            setPosition(0);
        } else if (imageIndex < 0) {
            setPosition(images.length - 1);
        } else {
            setPosition(imageIndex);
        }
    }

    return (
    <>
        <div className="slider fade">
            {images.map((image,key) => {
                let display = 'none'; 
                if (key == position) {
                    display = 'block';
                }
                return (<Container path={image} display={display} />)
            })}  
            <div className="control-dots-group">
                {images.map((image,key) => {
                    return (<div className="control-dots" onClick={()=>setPosition(key)}></div>)
                })}
            </div>
            <div className="control-button button-left" onClick={()=>changePosition(-1)}></div>
            <div className="control-button button-right" onClick={()=>changePosition(1)}></div>
        </div>
    </>
    );
}

export default Carousel;