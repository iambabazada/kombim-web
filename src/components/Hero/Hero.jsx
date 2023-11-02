import Button from '../Button/Button'
import styles from '../Hero/Hero.module.css'
import HeroImage from '../../assets/hero.svg'
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.description_container}>
          <h1 className={styles.header}>Kombi<span>m</span> <span>əmin əllərdədir</span></h1>
          <p className={styles.description}>Bütün növ kombilərin təmiri, radiator sistemlərinin və isti su xətlərinin yuyulması, santexnika xidmətləri</p>
          <Button bgColor='#DD3142' textColor='#fff'>BÜTÜN XİDMƏTLƏR</Button>
      </div>
      <div className={styles.image_container}>
          <img src={HeroImage} alt="" />
      </div>
    </div>
  )
}

export default Hero
