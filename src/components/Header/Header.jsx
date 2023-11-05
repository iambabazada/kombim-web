import styles from '../Header/Header.module.css'
import Logo from '../../assets/Kombim.svg'
import Button from '../Button/Button.jsx'

const links = [
  {
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
  return (
    <header>
      <div className={styles.logo}>
        <img src={Logo} alt="" />
      </div>
      <ul className={styles.nav_menu}>
        {links.map(link => (
          <Link link={link} key={link.value} />
        ))}
      </ul>
      <Button href={"tel:+9940514333931"} bgColor='#DD3142' textColor="#fff">SİZƏ ZƏNG EDƏK</Button>
    </header>
  )
}

const Link = ({ link }) => {
  return <a href={link.href} className={styles.nav_item}>{link.value}</a>;
}

export default Header
