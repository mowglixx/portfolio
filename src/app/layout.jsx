"use client"
import { Poppins, AR_One_Sans } from 'next/font/google'
import './globals.scss'
import './blob.scss'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import Aside from '@/components/organisms/Aside'
import { useEffect, useRef, useState } from 'react'

const poppins = Poppins({ subsets: ['latin'], weight: "400", variable: "--main-font" })
const arOne = AR_One_Sans({ subsets: ['latin'], weight: "400", variable: "--header-font", display: 'auto' })

export const metadata = {
  title: 'Mowglixx - Developer, Trainer, Friend',
  description: "Dan Monaghan's Software Development Portfolio",
}




export default function RootLayout({
  children,
}) {

  const blob = useRef()
  const mainWrapper = useRef()

  const [lastLeft, setLastLeft] = useState('0px')
  const [lastTop, setLastTop] = useState('0px')
  useEffect(() => {


    window.addEventListener('pointermove', function (e) {

      const randomBelow = (multiplier) => {
        const num = Math.floor(Math.random() * multiplier)
        const decider = Math.random() > 0.5
        return decider ? num : -num
      }
      try {

        const { clientX, clientY } = e
        blob.current.animate({
          left: `calc(${clientX + randomBelow(25)}px - calc(var(--width) / 2))`,
          top: `calc(${clientY + window.scrollY + randomBelow(25)}px - calc(var(--height) / 2))`
        }, { duration: 3000, fill: "forwards" })
        // const { width, height } = blob.current.style
        // console.log(width, height)

        setLastLeft(blob.current.style.left)
        setLastTop(blob.current.style.top)
        // console.log(blob.current.style.left, blob.current.style.bottom)
        // console.log({ clientY })
      } catch (e) {
        throw new Error(e)

      }
    }
    )
  }
    , []);

  return (
    <html lang="en">
      <body className={`${poppins.variable} ${arOne.variable}`} ref={mainWrapper}>
        <div
          ref={blob}
          className='blob'
          aria-hidden>
          &nbsp:
        </div>
        <Header />
        {children}
        <Aside sections={[
          {
            id: 'contacts',
            header: 'Contacts',
            body: [
              "This is a contact paragrapgh",
              "This is another contact paragrapgh",
              "This is yet another contact paragrapgh",
            ],
            footer: 'this is a contact footer para'
          }
        ]} />
        <Footer />
      </body>
    </html>
  )
}
