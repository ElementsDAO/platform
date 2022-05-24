import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '@theme/createEmotionCache'
import ThemeProvider from '@theme/ThemeProvider'
import ContractsProvider from '@context/ContractsProvider'
import { Provider } from '@components/web3/Provider'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache: EmotionCache
}

const App: React.FC<MyAppProps> = (props) => {
  const { pageProps, emotionCache = clientSideEmotionCache, Component } = props
  return (
    <CacheProvider value={emotionCache}>
      <Provider />
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Exo+2:wght@300;600&display=swap'
          rel='stylesheet'
        />
      </Head>
      <ThemeProvider>
        <ContractsProvider>
          <Component {...pageProps} />
        </ContractsProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
