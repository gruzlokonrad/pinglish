import Header from '@/components/header/header'
import './globals.scss'
import { Poppins } from 'next/font/google'
import Footer from '@/components/footer/footer'
const poppins = Poppins({subsets: ['latin'], weight: ["300"]})

export const metadata = {
  title: 'Pinglish',
  description: 'Angielski dla dzieci',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className='flex flex-col h-screen'>
          <Header />
          <main className='grow'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
