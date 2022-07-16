import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { darkTheme, GlobalStyles } from '../../stitches.config'

function MyApp({ Component, pageProps }: AppProps) {
  GlobalStyles()
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        value={{
          light: 'light',
          dark: darkTheme
        }}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
