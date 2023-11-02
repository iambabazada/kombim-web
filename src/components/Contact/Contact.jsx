import Button from '../Button/Button'
import styles from '../Contact/Contact.module.css'
import Master1 from '../../assets/usta1.png'
import Master2 from '../../assets/usta2.png'

const Contact = () => {
  return (
    <div className={styles.contact_section}>
       <div className={styles.services_container}>
          <h1 className={styles.services_header}>SANTEXNİKA XİDMƏTLƏRİ</h1>
          <span className={styles.services_description}><span>Üçün</span> Bizə Zəng Edin</span>
          <div className={styles.btn}>
          <Button borderColor='#DD3142' textColor="#DD3142" textSize='25px'>+994 51 433 39 31</Button>
          </div>
       </div>
       <div className={styles.image_container}>
           <img className={styles.master1} src={Master1} alt="" />
           <img className={styles.master2} src={Master2} alt="" />
       </div>
    </div>
  )
}

export default Contact
