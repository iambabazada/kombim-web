// import styles from '../Header/Header.module.css'
import '../Header/Header.css'
import Logo from '../../assets/Kombim.svg'
import Button from '../Button/Button.jsx'
import 'animate.css';
import MenuHamburger from '../../assets/menu_hamburger.svg'
import { useEffect, useRef, useState } from 'react';
import MenuModal from '../MenuModal/MenuModal.jsx';
// import { useEffect, useRef} from 'react';

const links = [
  {
    href: "#/",
    value: 'Ana səhifə',
  },
  {
    value: 'Haqqımızda',
    href: "#about"
  },
  {
    value: 'Xidmətlər',
    href: "#services"
  },
  {
    value: 'Əlaqə',
    href: "#contact"
  },
]

const Header = () => {


  let navbar = useRef(null);

  const [isMenu, setIsMenu] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollY = Math.round(Math.ceil(window.scrollY))
      console.log(scrollY);
      if (scrollY > 90) {
        navbar.current.classList.add("animate__slideInDown")
      } else {
        navbar.current.classList.remove("animate__slideInDown")
      }
    })
  }, [])

  return (
    <>

      {
        isMenu && (
          <div>
            <MenuModal close={() => setIsMenu(false)} className={isMenu ? "  animate__fadeInUp" : " animate__bounceOut"} />
          </div>
        )
      }
      <header className='header animate__animated' ref={navbar}>
        <div className='header_container'>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <ul className="nav_menu">
            {links.map(link => (
              <Link link={link} key={link.value} />
            ))}
          </ul>

          <div onClick={() => setIsMenu(!isMenu)} className='menu_hamburger'>
            <img className="menu_hamburger" src={MenuHamburger} alt="" />
          </div>
          <div className='btn_header'>
            <Button classname={"root"} href={"tel:+9940514333931"} bgColor='#DD3142' textColor="#fff">SİZƏ ZƏNG EDƏK</Button>
          </div>
        </div>
      </header>

    </>
  )
}

const Link = ({ link }) => {
  return <a href={link.href} className="nav_item">{link.value}</a>;
}

export default Header
