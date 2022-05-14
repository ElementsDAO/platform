import * as React from 'react'
import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { useRouter } from 'next/router'
import { Navigation } from '../components/Navigation'
import Logo from '../components/Logo'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '../src/theme'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider)
  library.pollingInterval = 1000
  return library
}

// const ThemeProvider = dynamic(() => import('../contexts/Theme'), {
//   ssr: false,
// })

const App: React.FC<AppProps> = (props) => {
  const { pageProps, Component } = props
  const { push } = useRouter()
  const menuItems = [
    { label: 'Home', onClick: () => push('/') },
    { label: 'Applications', onClick: () => push('/applications') },
    { label: 'Experts', onClick: () => push('/experts') },
    {
      label: 'Vote',
      onClick: () =>
        push({
          pathname: '/vote',
          query: { addr: '0x30DF431A26473da79909878E42574768C4dA7D8e' },
        }),
    },
  ]

  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Web3ReactProvider getLibrary={getLibrary}>
        <Navigation
          menu={menuItems}
          mobileMenu={menuItems}
          identity
          logo={<Logo />}
          onClickProfile={() => push('/profile')}
        />
        <Component {...pageProps} />
      </Web3ReactProvider>
    </ThemeProvider>
  )
}

export default App
