import React from 'react'
import { hooks, metaMask } from '@components/web3/connectors/metaMask'
import { hooks as netHooks, network } from '@components/web3/connectors/network'
import Web3 from 'web3'
import config from '@config'

import { BoxProps, Typography } from '@mui/material'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const VELE_NFT_ABI = require('@contracts/vele.json')
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Access: React.FC<BoxProps> = (props) => {
  const { children } = props

  console.log('Se')
  const { useAccounts, useError, useIsActivating, useIsActive, useChainId } =
    hooks
  const { useProvider } = netHooks
  const isActive = useIsActive()
  const [account, setAccount] = React.useState(undefined)
  const [access, setAccess] = React.useState(false)
  const [nft, setNft] = React.useState(false)
  const chainId = useChainId()

  const provider = useProvider()
  const accounts = useAccounts()
  const init = async function (): Promise<any> {
    console.log('provider', provider)
    console.log('account:', accounts[0])
    console.log('eagerConnection', metaMask.provider.providers)
    setAccount(accounts[0])
    const web3 = new Web3(provider.connection.url)
    console.log('web3', web3)
    const contract = new web3.eth.Contract(VELE_NFT_ABI, config.contracts.vele)

    try {
      console.log('account', account)
      const data = await contract.methods.walletOfOwner(account).call()
      console.log('data', data)
      if (data.length > 0) {
        setNft(data[0])
        setAccess(true)
      } else {
        setAccess(false)
      }
    } catch (err) {
      console.log('err', err)
    }
  }

  // attempt to connect eagerly on mount
  React.useEffect(() => {
    // eslint-disable-next-line no-void
    void metaMask.connectEagerly()
  }, [])
  React.useEffect(() => {
    console.log('Access::isActive', isActive)
    console.log('Access::provider', metaMask.provider)
    if (isActive && provider && chainId && metaMask) {
      metaMask.activate(chainId)
      init()
    }
  }, [isActive, provider])

  return (
    <div>
      {access ? (
        <>
          <Typography variant='h3' fontWeight='bold' textAlign='center'>
            Hello #{nft}!
          </Typography>
          <hr />
          {children}
        </>
      ) : (
        <>
          <Typography variant='h3' fontWeight='bold' textAlign='center'>
            Sorry, you dont have access!
          </Typography>
          <Typography variant='body1' fontWeight='bold' textAlign='center'>
            You need a Elements NFT to discover the Demo!
          </Typography>
        </>
      )}
    </div>
  )
}

export default Access
