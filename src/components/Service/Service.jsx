import React from 'react'
import styles from './Service.module.css'


const Service = ({ data }) => {
    return (
        <div className={styles.width}>
            <div className={styles.service}>
                <img src={data.img} alt="" />
                <div className={styles.title}>
                    {data.title}
                </div>
            </div>
        </div>
    )
}

export default Service