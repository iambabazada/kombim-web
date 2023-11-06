import React, { useEffect } from 'react'
import Imagee from '../../assets/image2.svg'
import styles from './Image.module.css'
import Radiator from '../../assets/radiator.png'

const Image2 = () => {


    useEffect(() => {
        ScrollReveal().reveal("#home", {
            origin: 'left',
            distance: '100px',
            duration: 700,
            easing: 'ease' 
        })
        ScrollReveal().reveal("#radiator", {
            origin: 'right',
            distance: '100px',
            duration: 700,
            easing: 'ease' 
        })
    }, [])

    return (
        <div className={styles.image}>
            <img src={Imagee} alt="" id='home'/>
            <img src={Radiator} alt="" id='radiator'/>
        </div>
    )
}

export default Image2