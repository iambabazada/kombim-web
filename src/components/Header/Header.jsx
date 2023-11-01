import styles from '../Header/Header.module.css'
import Logo from '../../assetss/Kombim.svg'
import Button from '../Button/Button.jsx'

const links = [
   {
      value: 'Ana səhifə'
   }, 
   {
    value: 'Haqqımızda'
   }, 
   {
    value: 'Xidmətlər'
   }, 
   {
    value: 'Əlaqə'
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
               <Link link={link.value} key={link.value} />
            ))}
        </ul>
        <Button bgColor='#DD3142' textColor="#fff">SİZƏ ZƏNG EDƏK</Button>
    </header>
  )
}

const Link = ({link}) => {
  return <a href="#" className={styles.nav_item}>{link}</a>;
}

export default Header
