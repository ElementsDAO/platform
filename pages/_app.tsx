import * as React from 'react'
import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { useRouter } from 'next/router'
import { Navigation } from '../components/Navigation'
import Logo from '../components/Logo'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '../src/theme'
import Head from 'next/head'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '../src/createEmotionCache'

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
  const { pageProps, emotionCache = clientSideEmotionCache, Component } = props

  const { push } = useRouter()

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <CacheProvider value={emotionCache}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
          <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;600&display=swap" rel="stylesheet" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navigation
            identity
            logo={<Logo />}
            onClickProfile={() => push('/profile')}
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </Web3ReactProvider>
  )
}

export default App
