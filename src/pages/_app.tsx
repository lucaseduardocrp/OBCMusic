import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import { themes } from '@/styles/Themes'
import GlobalStyles from '@/styles/GlobalStyles'
import Header from '@/layouts/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes}>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <GlobalStyles />
    </ThemeProvider>
  )
}
