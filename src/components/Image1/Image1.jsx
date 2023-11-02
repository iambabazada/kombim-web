import styles from '../Image1/Image.module.css'
import Kombi from '../../assets/kombi.png'

const Image1 = () => {
  return (
    <div className={styles.image_container}>
       <img src={Kombi} alt="" />
    </div>
  )
}

export default Image1
