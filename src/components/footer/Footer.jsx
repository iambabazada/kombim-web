import React from 'react'
import styles from '../footer/Footer.module.css'

import Logo from '../../assets/footerlogo.svg'
import Instagram from '@src/assets/instagram.svg'
import Phone from '@src/assets/phone.svg'
import Email from '@src/assets/mail.svg'
import Location from '@src/assets/location.svg'

const Footer = () => {

    const links = [
        {
            title: "Xidmətlər",
            url: "/services"
        },
        {
            title: "Haqqımızda",
            url: "/about"
        },
        {
            title: "Texniki dəstək",
            url: "/technical-service"
        },

    ]

    return (
        <footer className={styles.footer}>
            <div className={styles.header}>
                <div className={styles.brand}>
                    <img src={Logo} alt="" />
                    <a href="">
                        <img src={Instagram} alt="" />
                    </a>
                </div>
                <div className={styles.right}>
                    <ul className={styles.links}>
                        {links.map((link) => (<li key={link.title}>
                            <a href="">
                                {link.title}
                            </a>
                        </li>
                        ))}
                    </ul>
                    <div className={styles.contact}>
                        <div className={styles.box}>
                            <img src={Email} alt="" />
                            info@kombim.az
                        </div>
                        <div className={styles.box}>
                            <img src={Phone} alt="" />
                            +994 51 433 3931
                        </div>
                        <div className={styles.box}>
                            <img src={Location} alt="" />
                            Bakı, Azərbaycan
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>
                    Kombim 2023. All rights reserved
                </p>
                <p>
                    Şərtlər & Qaydalar
                </p>
            </div>
        </footer>
    )
}

export default Footer