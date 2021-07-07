import React, { useState,useEffect } from 'react';
import Carousel from '../Carousel-Slider';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory();

    useEffect(() => {
        if (!localStorage.getItem('user-login')) history.push('/login');
    },[]);

    return (
        <Carousel images={[img3,img4]}/>
    )
}

export default Home;