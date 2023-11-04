import React from 'react'
import Service from '../Service/Service'
import Service1 from '../../assets/service_1.svg'
import Service2 from '../../assets/service_2.svg'
import Service3 from '../../assets/service_3.svg'
import Service4 from '../../assets/service_4.svg'
import styles from './Services.module.css'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NextArrow from '../NextArrow/NextArrow'
import PrewArrow from '../PrewArrow/PrewArrow'


const Services = () => {
    const services = [
        {
            img: Service1,
            title: "İstənİlən növ kombİlərİn təmİrİ"
        },
        {
            img: Service2,
            title: "Radİator sİstemİnİn  yuyulması"
        },
        {
            img: Service3,
            title: "İSTİ SU XƏTLƏRİNİN  yuyulması"
        },
        {
            img: Service4,
            title: "SANTEXNİKA XİDMƏTLƏRİ"
        },
        {
            img: Service3,
            title: "İSTİ SU XƏTLƏRİNİN  yuyulması"
        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        initialSlide: 0,
        nextArrow: <PrewArrow />,
        prevArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
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
        <div className={styles.services} id='services'>
            <div className={styles.header}>
                <div className={styles.left}>
                    <h2>
                        BÜTÜN XİDMƏTLƏR
                    </h2>
                    <h3>
                        Təmir xidmətlərinə zəmanət verilir
                    </h3>
                </div>
            </div>
            <Slider {...settings}>
                {services?.map((service) => (
                    <Service data={service} />
                ))}
            </Slider>
        </div>
    )

}


export default Services

