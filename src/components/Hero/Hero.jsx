import Button from '../Button/Button'
// import styles from '../Hero/Hero.module.css'
import '../Hero/Hero.css';
import HeroImage from '../../assets/heroImg.jpg'
import MobileHero from '../../assets/mobile_hero.svg'
import React, { useEffect } from 'react';
import { useRef } from 'react';
import 'animate.css';

const MyImageComponent = React.lazy(() => import('../MyImageComponent/MyImageComponent'));


const Hero = () => {

  const img = useRef(null);
  const btn = useRef(null);

  useEffect(() => {
    img.current.classList.add("animate__slideInRight");
    btn.current.classList.add("animate__fadeInUp")
  }, [])

  return (
    <div className="hero">
      <div className="description_container">
        <h1 className="header">Kombi<span>m</span> <span>əmin əllərdədir</span></h1>
        <p className="description">Bütün növ kombilərin təmiri, radiator sistemlərinin və isti su xətlərinin yuyulması, santexnika xidmətləri</p>
        <div className='btn'>
          <Button href={"#services"} bgColor='#DD3142' textColor='#fff' classname="animate__animated root" selector={btn}>BÜTÜN XİDMƏTLƏR</Button>
        </div>
      </div>
      <div className="image_container animate__animated" ref={img} >
        <MyImageComponent>
          <img className="heroImg" src={HeroImage} alt="" loading="lazy" />
        </MyImageComponent>
        <img src={MobileHero} alt="" loading="lazy" />
      </div>
    </div>
  )
}

export default Hero
