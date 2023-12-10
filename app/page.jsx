"use client"
import Header from "@/components/organisms/Header"
import Hero from "@/components/molecules/Hero"
import Main from "@/components/organisms/Main"
import { useEffect, useRef, useState } from "react"
// import styles from './Home.module.scss'

export default function Home() {

  const blob = useRef()
  const mainWrapper = useRef()

  const [lastLeft, setLastLeft] = useState('0px')
  const [lastTop, setLastTop] = useState('0px')
  useEffect(() => {

    blob.current.style.transitionDelay = `0.${Math.round(Math.random() * 25)}}s`

      (mainWrapper?.current && mainWrapper.current.addEventListener('mousemove', (e) => {
        const randomBelow = (multiplier) => {
          const num = Math.round(Math.random() * multiplier)
          const decider = Math.random() > 0.5
          return decider ? num : -num
        }
        try {

          const { clientX, clientY } = e

          blob.current.style.left = `${clientX + randomBelow(25)}px`
          blob.current.style.top = `${clientY + randomBelow(25)}px`

          setLastLeft(blob.current.style.left)
          setLastTop(blob.current.style.top)
          // console.log(blob.current.style.left, blob.current.style.bottom)
          // console.log({ clientY })
        } catch (e) {
          throw new Error(e)

        }
        // mainWrapper.current.removeEventListener('mousemove',)
      }))
  }, [])

  return (
    <>
      <div className="mainWrapper" ref={mainWrapper}>
        <Main>
          <div
            style={{
              content: ' ',
              position: "absolute",
              left: '0px',
              top: '0px',
              display: 'fixed',
              backgroundColor: '#ff0066',
              minWidth: '100px',
              minHeight: '100px',
              height: '100px',
              width: '100px',
              fontSize: '0px',
              zIndex: '9',
              transition: 'all 2s ease-out',
              // transitionDelay: '0.1s',
            }}
            ref={blob}
            className="blob"
            aria-hidden>
            &nbsp:
          </div>
          <section className="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, iure porro consequatur ea laboriosam fuga numquam culpa! Natus nesciunt illo temporibus nihil ratione repellendus quos, ipsum facere libero adipisci inventore.</p>
            <p>Vitae expedita quibusdam voluptatibus, ratione minima quidem molestias pariatur quasi, fugit sunt illo ut maxime cupiditate magnam eligendi totam recusandae iure est voluptatum. Inventore maiores ratione molestias doloribus odio! Enim.</p>
            <p>Consequatur quis at quo eius id repudiandae non, maxime tenetur laudantium aut incidunt. Id repudiandae explicabo corrupti vel, enim officia voluptates, repellendus praesentium ad doloribus fugiat tempore modi! Natus, rem.</p>
          </section>
        </Main>
      </div>
    </>
  )
}
