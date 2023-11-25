'use client'

import Header from "@/components/organisms/Header"
import Hero from "@/components/organisms/Hero"
export default function Page() {

  return (
    <>
      <Header />
      <Hero heading="Howdy" body="I'm Dan, I'm a ['Developer', 'Trainer', 'Nerd']" cta={{
        action: (e) => console.log(e),
        label: 'click me'
      }} image={{
        src: 'https://placehold.co/600x400.jpg',
        alt: 'oh my'
      }} />
    </>
  )
}
