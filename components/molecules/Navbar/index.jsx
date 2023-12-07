import Navlink from "@/components/atoms/Navlink";
import styles from './Navbar.module.scss'

export default function Navbar({expanded = false}) {
  return (
    <nav className={`${styles.mainNav} ${expanded ? styles.open: ''}`} aria-label="main navigation" aria-expanded={`${expanded}`}>
      <ul>
        <li><Navlink href="#" title="About">ABT</Navlink></li>
        <li><Navlink href="#" title="Work">WRK</Navlink></li>
        <li><Navlink href="#" title="Fun">FUN</Navlink></li>
        <li><Navlink href="#" title="Contact">CNT</Navlink></li>
      </ul>
    </nav>
  )
}
