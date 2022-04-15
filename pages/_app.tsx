import * as React from 'react'
import '../styles/global.css'
import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'
import dynamic from 'next/dynamic'
import { Navigation } from '@iotabots/components'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { useRouter } from 'next/router'
import Logo from '../components/Logo'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider)
  library.pollingInterval = 1000
  return library
}

const ThemeProvider = dynamic(() => import('../contexts/Theme'), {
  ssr: false,
})

const App: React.FC<AppProps> = (props) => {
  const { pageProps, Component } = props
  const { push } = useRouter()
  const menuItems = [
    { label: 'Home', onClick: () => push('/') },
    { label: 'Applications', onClick: () => push('/applications') },
  ]

  return (
    <ThemeProvider>
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
