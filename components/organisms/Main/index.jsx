import Hero from '@/components/molecules/Hero';
import styles from './Main.module.scss'

export default function Main({ children, ...rest }) {
  return (
    <main className={styles.main} {...rest}>
      <Hero heading="Howdy" body="I'm Dan, I'm a ['Developer', 'Trainer', 'Nerd']" cta={{
        action: (e) => console.log(e),
        label: 'click me'
      }} image={{
        src: 'https://placehold.co/600x400.jpg',
        alt: 'oh my'

      }} />
      {children}
    </main>
  );
}
