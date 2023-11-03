import Header from './components/Header/Header'
import React from 'react'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Contact from './components/Contact/Contact'
import Image1 from './components/Image1/Image1'
import Models from './components/Models/Models'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from './components/About/About'
import Testimonials from './components/Testimonials/Testimonials'
import Service from './components/Service/Service'

const App = () => {

  return (
    <div>
      <Header />
      <Hero />
      <Models />
      <About />
      <Contact />
      <Image1 />
      <Testimonials />
      <Service />
      <Footer />
    </div>
  )
}

export default App