import Navbar from "@/components/molecules/Navbar";
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.navHeader}>
      <div className={styles.headerWrapper}>

      <div className={styles.navWrapper}>
        <h1 className={styles.navLogo}>mowglixx</h1>
        <button className={styles.navControls}>
          <span className="srOnly">menu</span>
        </button>
      </div>
      <Navbar />
      </div>
    </header>
  );
}
