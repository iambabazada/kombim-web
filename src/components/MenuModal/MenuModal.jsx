import React from 'react'
import styles from './MenuModal.module.css'
import Button from '../Button/Button'
import 'animate.css';
import ArrowDown from '../../assets/arrow_down.svg'

const links = [
    {
        value: 'Ana səhifə',
    },
    {
        value: 'Haqqımızda',
        href: "#about"
    },
    {
        value: 'Xidmətlər',
        href: "#services"
    },
    {
        value: 'Əlaqə',
        href: "#contact"
    },
]


const MenuModal = ({ close, className }) => {
    return (
        <div className={`${styles.overlay} animate__animated ${className}`}>
            <div className={`${styles.modal} '`}>
                <ul className={styles.nav_menuu}>
                    {links.map((link) => (
                        <a href={link.href} key={link.value} className={styles.nav_itemm}>
                            {link.value}
                        </a>
                    ))}
                    <div className={styles.btn}>
                        <Button classname={"root"} href={"tel:+9940514333931"} bgColor='#DD3142' textColor="#fff">SİZƏ ZƏNG EDƏK</Button>
                    </div>
                </ul>
                <div className={`${styles.close} `} onClick={close}>
                    <button>
                        <img src={ArrowDown} alt="" />
                    </button>
                </div>

            </div>

        </div>
    )
}

export default MenuModal