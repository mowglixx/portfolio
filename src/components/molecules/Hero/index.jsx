'use client'

import Image from 'next/image'
import styles from './Hero.module.scss'

export default function Hero({ heading, body, cta, image }) {
  return (
    <section className={styles.hero} aria-label='introduction'>
      <div className={styles.wrapperPrimary}>
        {heading && <header className={`${styles.heroHeading} h2`}>{heading}</header>}
        {body && <div className={`${styles.heroBody} h3`}>{body}</div>}
        {cta && <button className={styles.heroCTA} onClick={cta.action}>{cta.label}</button>}
      </div>
      <div className={styles.wrapperSecondary}>
        {image.src && image.alt && <Image width={600} height={400} src={image.src} alt={image.alt} className={styles.heroImage} {...image} priority />}
      </div>
    </section>
  )
}
