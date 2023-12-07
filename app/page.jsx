'use client'

import Header from "@/components/organisms/Header"
import Hero from "@/components/organisms/Hero"
import styles from './Home.module.scss'

export default function Home() {

  return (
    <>
    <main className={styles.main}>
      <div className="mainWrapper">

      <Hero heading="Howdy" body="I'm Dan, I'm a ['Developer', 'Trainer', 'Nerd']" cta={{
        action: (e) => console.log(e),
        label: 'click me'
      }} image={{
        src: 'https://placehold.co/600x400.jpg',
        alt: 'oh my'
      }} />
      {/* <section className="content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, iure porro consequatur ea laboriosam fuga numquam culpa! Natus nesciunt illo temporibus nihil ratione repellendus quos, ipsum facere libero adipisci inventore.</p>
        <p>Vitae expedita quibusdam voluptatibus, ratione minima quidem molestias pariatur quasi, fugit sunt illo ut maxime cupiditate magnam eligendi totam recusandae iure est voluptatum. Inventore maiores ratione molestias doloribus odio! Enim.</p>
        <p>Consequatur quis at quo eius id repudiandae non, maxime tenetur laudantium aut incidunt. Id repudiandae explicabo corrupti vel, enim officia voluptates, repellendus praesentium ad doloribus fugiat tempore modi! Natus, rem.</p>
      </section> */}
      </div>
    </main>
      <aside className={styles.aside}>
      Bottom of hero
      </aside>
      </>
  )
}
