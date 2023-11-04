import React from 'react'
import Imagee from '../../assets/image2.svg'
import styles from './Image.module.css'
import Radiator from '../../assets/radiator.png'

const Image2 = () => {
    return (
        <div className={styles.image}>
            <img src={Imagee} alt="" />
            <img src={Radiator} alt="" />
        </div>
    )
}

export default Image2