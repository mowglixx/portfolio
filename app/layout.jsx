
import { Poppins, AR_One_Sans } from 'next/font/google'
import './globals.scss'

const poppins = Poppins({ subsets: ['latin'], weight: "400", variable: "--main-font" })
const arOne = AR_One_Sans({ subsets: ['latin'], weight: "400", variable: "--header-font", display: 'auto' })

export const metadata = {
  title: 'Mowglixx - Developer, Trainer, Friend',
  description: "Dan Monaghan's Software Development Portfolio",
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${arOne.variable}`}>{children}</body>
    </html>
  )
}
