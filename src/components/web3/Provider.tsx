import * as React from 'react'
import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import {
  useWeb3React,
  Web3ReactHooks,
  Web3ReactProvider,
} from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import type { Connector } from '@web3-react/types'
import { WalletConnect } from '@web3-react/walletconnect'
import {
  coinbaseWallet,
  hooks as coinbaseWalletHooks,
} from './connectors/coinbaseWallet'
import { metaMask, hooks as metaMaskHooks } from './connectors/metaMask'
import { network, hooks as networkHooks } from './connectors/network'
import {
  walletConnect,
  hooks as walletConnectHooks,
} from './connectors/walletConnect'

function getName(connector: Connector): any {
  if (connector instanceof MetaMask) return 'MetaMask'
  if (connector instanceof WalletConnect) return 'WalletConnect'
  if (connector instanceof CoinbaseWallet) return 'Coinbase Wallet'
  if (connector instanceof Network) return 'Network'
  return 'Unknown'
}

const connectors: any = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
  [coinbaseWallet, coinbaseWalletHooks],
  [network, networkHooks],
]

const Child = (): any => {
  const { connector } = useWeb3React()
  console.log(`Priority Connector is: ${getName(connector)}`)
  console.log('connector', connector)
  return null
}

export const Provider = (): any => {
  React.useEffect(() => {
    // eslint-disable-next-line no-void
    void network.activate(1074)
  }, [])

  React.useEffect(() => {
    // eslint-disable-next-line no-void
    void metaMask.connectEagerly()
  }, [])

  return (
    <Web3ReactProvider connectors={connectors}>
      <Child />
    </Web3ReactProvider>
  )
}
