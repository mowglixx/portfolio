'use client'

import Image from 'next/image'
import styles from './Hero.module.scss'

export default function Hero({ heading, body, cta, image }) {
  return (
    <div className={styles.hero}>
      <div className={styles.wrapperPrimary}>
        {heading && <header className={styles.heroHeading}>{heading}</header>}
        {body && <div className={styles.heroBody}>{body}</div>}
        {cta && <button className={styles.heroCTA} onClick={cta.action}>{cta.label}</button>}
      </div>
      <div className={styles.wrapperSecondary}>
        {image.src && image.alt && <Image width={600} height={400} src={image.src} alt={image.alt} className={styles.heroImage} />}
      </div>
    </div>
  )
}
