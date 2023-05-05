import type { AppProps } from 'next/app'
import '../styles/style.css'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Darumadrop+One&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
    </Head>
    
    <Component {...pageProps} />
  </>
}
