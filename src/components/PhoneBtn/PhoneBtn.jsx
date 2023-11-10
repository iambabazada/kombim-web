import React from 'react'
import styles from './PhoneBtn.module.css'

const PhoneBtn = ({ children }) => {
    return (
        <a href='tel:+9940514333931' className={styles.fixed}>
            {children}
        </a>
    )
}

export default PhoneBtn