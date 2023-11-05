import React from 'react'
import styles from './PrewArrow.module.css'
import ArrowLeft from '../../assets/arrowleft.svg'

const PrewArrow = ({ onClick }) => {
    return (
        <div onClick={onClick} className={styles.btn}>
            <img src={ArrowLeft} alt="" />
        </div>
    )
}

export default PrewArrow