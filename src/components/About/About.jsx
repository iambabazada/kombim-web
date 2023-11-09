import React from 'react'
import AboutImg from '../../assets/about.svg'
import styles from './About.module.css'
import Button from '../Button/Button'
import AboutImg2 from '../../assets/usta.svg'

const About = () => {
    return (
        <div className={styles.about} id='about'>
            <img src={AboutImg} alt="" />
            <img src={AboutImg2} className={styles.about_img}/>
            <div className={styles.info}>
                <h2>
                    KOMBİ TƏMİRİ
                </h2>
                <h4>
                    İllərdir evlərinizdə istifadə etdiyiniz elektrik və təbii qaz kombilərinin hər il müntəzəm olaraq səlahiyyətli texniki xidmət tərəfindən nəzarət edilməli , təmizlənməli , qış mövsümünə rahat və problemsiz girə bilməniz üçün lazımlı əməliyyatları keçməlidirlər. Bunun üçün bizim peşəkar komandamız sizin xidmətinizdədir
                </h4>
                <span>
                    Bütün təmir xidmətlərinə
                </span>
                <div>
                    <Button classname="primary" bgColor='#2B69C6' textColor='#fff'>
                        6 AY ZƏMANƏT
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default About