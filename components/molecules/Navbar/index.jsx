import Navlink from "@/components/atoms/Navlink";
import styles from './Navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.mainNav} aria-label="main navigation">
      <ul>
        <li><Navlink href="#" title="About">ABT</Navlink></li>
        <li><Navlink href="#" title="Work">WRK</Navlink></li>
        <li><Navlink href="#" title="Fun">FUN</Navlink></li>
        <li><Navlink href="#" title="Contact">CNT</Navlink></li>
      </ul>
    </nav>
  )
}
