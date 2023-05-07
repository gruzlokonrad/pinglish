import Header from '@/components/view/header/header'
import Script from 'next/script';
import './globals.scss'
import { Poppins } from 'next/font/google'
import Footer from '@/components/view/footer/footer'
const poppins = Poppins({ subsets: ['latin'], weight: ["300"] })

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
    <html lang="pl">
      <body className={poppins.className}>
        {/* <!-- Google Tag Manager --> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}`}
            height="0"
            width="0"
            style={{
              display: 'none',
              visibility: 'hidden',
            }}
          ></iframe>
        </noscript>
        <Script id="gtm" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}');
        `}
        </Script>
        {/* <!-- End Google Tag Manager --> */}

        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
        </Script>

        <div className='flex flex-col h-screen'>
          <Header />
          {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-RD9PQKFH7S" strategy="afterInteractive" /> */}
          <main className='grow'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
