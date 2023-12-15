import Link from "next/link";
import styles from './Navlink.module.scss';
import ifExists from "@/lib/ifExists";


export default function Navlink({ children, className, title, href, ...rest }) {
  return (
    <Link href={href} title={ifExists(title)} aria-label={ifExists(title)} className={`${styles.navLink} ${ifExists(className)}`} {...rest}>
      {children}
    </Link>
  )
}
