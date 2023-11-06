import React from 'react'
import Model1 from '../../assets/model_1.svg'
import Model2 from '../../assets/model_2.svg'
import Model3 from '../../assets/model_3.svg'
import Model4 from '../../assets/model_4.svg'
import Model5 from '../../assets/model_5.svg'
import Model6 from '../../assets/model_6.svg'
import Model7 from '../../assets/model_7.svg'
import Model8 from '../../assets/model_8.svg'
import Model9 from '../../assets/model_9.svg'
import Model10 from '../../assets/model_10.svg'

import styles from './Models.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const img = [
    {
        image: Model1
    },
    {
        image: Model2
    },
    {
        image: Model3
    },
    {
        image: Model4
    },
    {
        image: Model5
    },
    {
        image: Model6
    },
    {
        image: Model7
    },
    {
        image: Model8
    },
    {
        image: Model9
    },
    {
        image: Model10
    },
]

const Models = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };

    return (
        <div className={styles.models}>
            <Slider {...settings}>
                {
                    img.map((image) => (
                        <img src={image.image} className={styles.imgggg} alt="" />
                    ))
                }
            </Slider>
        </div>
    )
}

export default Models