import Button from '../Button/Button'
import styles from '../Gallery/Gallery.module.css'
import Gallery1 from '../../assets/Gallery1.svg'
import Gallery2 from '../../assets/Gallery2.svg'
import Gallery3 from '../../assets/Gallery3.svg'
import settings from '../../assets/settings.svg'

const Gallery = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h1>Peşəkar xidmətimizlə bu qışda ailənizi isti saxlayın</h1>
            <p className={styles.description}>Kombinizə texniki dəstək göstərildiyinə və qışa hazır olduğuna əmin olun</p>
            <Button bgColor='#DD3142' textColor="#fff" icon={settings}>Texniki baxış tələb et</Button>
        </div>
        <div className={styles.gallery}>
            <div className={styles.left_side}>
                <img src={Gallery1} alt="" />
                <img src={Gallery2} alt="" />
            </div>
            <div className={styles.right_side}>
                <img src={Gallery3} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Gallery
