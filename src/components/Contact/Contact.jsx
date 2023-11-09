import Button from '../Button/Button'
import styles from '../Contact/Contact.module.css'
import Master1 from '../../assets/usta1(1).png'
import Master2 from '../../assets/usta2.png'
import { useEffect } from 'react'

const Contact = () => {

  useEffect(() => {
    ScrollReveal().reveal('#servicesContainer', {
      origin: 'left',
      distance: '200px',
      duration: 900,
      easing: 'ease'
    });
    ScrollReveal().reveal('#image1', {
      origin: 'right',
      distance: '200px',
      duration: 900,
      easing: 'ease'
    });
    ScrollReveal().reveal('#image2', {
      origin: 'bottom',
      distance: '200px',
      duration: 900,
      delay: 300,
      easing: 'ease'
    });
  })

  return (
    <div className={styles.contact_section} id='contact'>
      <div className={styles.services_container} id='servicesContainer'>
        <h1 className={styles.services_header}>SANTEXNİKA XİDMƏTLƏRİ</h1>
        <span className={styles.services_description}><span>Üçün</span> Bizə Zəng Edin</span>
        <div className={styles.btn}>
          <Button classname="outline" href={"tel:+9940514333931"} borderColor='#DD3142' textColor="#DD3142" textSize='25px'>+994 51 433 39 31</Button>
        </div>
      </div>
      <div className={styles.image_container}>
        <img className={styles.master1} src={Master1} alt="" id='image1' />
        <img className={styles.master2} src={Master2} alt="" id='image2' />
      </div>
    </div>
  )
}

export default Contact
