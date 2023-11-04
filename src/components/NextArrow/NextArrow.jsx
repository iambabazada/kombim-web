import React from 'react'
import styles from './NextArrow.module.css'
import PrewArrow from '../../assets/arrowright.svg'

const NextArrow = ({ onClick }) => {
    return (
        <div onClick={onClick} className={styles.btn}>
            <img src={PrewArrow} alt="" />
        </div>
    )
}

export default NextArrow