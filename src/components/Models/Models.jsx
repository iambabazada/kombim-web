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
import Model11 from '../../assets/model_11.png'

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
    {
        image: Model11
    }

]

const Models = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
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