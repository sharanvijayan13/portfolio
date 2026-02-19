import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: "Sharan's Portfolio",
  description: 'Frontend Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body>
        {children}
        <Script src="https://unpkg.com/aos@next/dist/aos.js" strategy="beforeInteractive" />
        <Script src="https://cdn.emailjs.com/dist/email.min.js" strategy="beforeInteractive" />
        <Script id="emailjs-init" strategy="afterInteractive">
          {`(function(){
            emailjs.init("Za1y2wf9uII6INU1O");
          })();`}
        </Script>
      </body>
    </html>
  )
}
