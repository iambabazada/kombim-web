import React from 'react'
import styles from './Service.module.css'
import Service1 from '../../assets/service_1.svg'

const Service = () => {
    return (
        <div className={styles.service}>
            <img src={Service1} alt="" />
            <div className={styles.title}>
                Lorem ipsum dolor sit amet.
            </div>
        </div>
    )
}

export default Service