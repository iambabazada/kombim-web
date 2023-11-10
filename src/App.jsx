import Header from './components/Header/Header'
import React from 'react'
import Footer from './components/footer/Footer'
import Hero from './components/Hero/Hero'
import Contact from './components/Contact/Contact'
import Image1 from './components/Image1/Image1'
import Models from './components/Models/Models'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from './components/About/About'
import Testimonials from './components/Testimonials/Testimonials'
import Services from './components/Services/Services'
import Gallery from './components/Gallery/Gallery'
import Image2 from './components/Image2/Image2'
import PhoneBtn from './components/PhoneBtn/PhoneBtn'
import Button from './components/Button/Button'
import Call from './assets/Kombiphone.svg'

const App = () => {

  return (
    <div>
      <Header />
      <Hero />
      <Models />
      <About />
      <Services />
      <Contact />
      <Image1 />
      <Gallery />
      <Testimonials />
      <Image2 />
      <PhoneBtn>
        <Button classname="round success" bgColor='#2B69C6' icon={Call}>
        </Button>
      </PhoneBtn>
      <Footer />
    </div>
  )
}

export default App