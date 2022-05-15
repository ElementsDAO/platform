import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/dist/shared/lib/router/router'

import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'
import { CacheProvider, EmotionCache } from '@emotion/react'

import createEmotionCache from '@theme/createEmotionCache'
import ThemeProvider from '@theme/ThemeProvider'
import ContractsProvider from '@context/ContractsProvider'

const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider)
  library.pollingInterval = 1000
  return library
}

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const App: React.FC<MyAppProps> = (props) => {
  const {
    pageProps,
    emotionCache = clientSideEmotionCache,
    Component
  } = props

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ContractsProvider>
        <CacheProvider value={emotionCache}>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
            <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;600&display=swap" rel="stylesheet" />
          </Head>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </ContractsProvider>
    </Web3ReactProvider>
  )
}

export default App
