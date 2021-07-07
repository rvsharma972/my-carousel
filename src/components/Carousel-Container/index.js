import React from 'react';

const CarouselContainer = ({path,display}) => {
    return (
        <div className="container" style={{display : display}}>
            <img alt="Img" src={path} />
        </div>
    )
}

export default CarouselContainer;