"use client"

import Navbar from "@/components/molecules/Navbar";
import styles from './Header.module.scss'
import { useState } from "react";

export default function Header() {
  const [navbarExpanded, setNavbarExpanded] = useState(false)
  const navId = 'main-header-nav' 
  return (
    <header className={styles.navHeader}>
      <div className={styles.headerWrapper}>

      <div className={styles.navWrapper}>
        <h1 className={styles.navLogo}>mowglixx</h1>
        <button className={styles.navControls} onClick={() => setNavbarExpanded(!navbarExpanded)} aria-controls={navId}>
          <span className="srOnly">menu</span>
        </button>
      </div>
      <Navbar expanded={navbarExpanded} id={navId} />
      </div>
    </header>
  );
}
