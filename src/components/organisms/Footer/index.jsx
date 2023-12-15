import Navbar from "@/components/molecules/Navbar";
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.navFooter}>
      <div className={styles.navWrapper}>
        <h1 className={styles.navLogo}>mowglixx</h1>
      </div>
    </footer>
  );
}
