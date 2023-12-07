
import { Poppins, AR_One_Sans } from 'next/font/google'
import './globals.scss'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'

const poppins = Poppins({ subsets: ['latin'], weight: "400", variable: "--main-font" })
const arOne = AR_One_Sans({ subsets: ['latin'], weight: "400", variable: "--header-font", display: 'auto' })

export const metadata = {
  title: 'Mowglixx - Developer, Trainer, Friend',
  description: "Dan Monaghan's Software Development Portfolio",
}

rfc

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${arOne.variable}`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
