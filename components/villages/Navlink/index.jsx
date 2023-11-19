import Link from "next/link";
import s from './index.modules.scss';


export default function Navlink({ children, className, href, ...rest }) {
  return (
    <Link href={href} className={`${s.navLink} ${className}`} {...rest}>
      {children}
    </Link>
  )
}
