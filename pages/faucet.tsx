import * as React from 'react'
import Head from 'next/head'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import { Button, Typography } from '@mui/material'
import Layout from '../src/components/layout'

import { USDT_ADDRESS } from '../config'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ERC20_ABI = require('../src/contracts/erc20.json')

const Faucet = (): any => {
  const { account, library, chainId } = useWeb3React()
  const [contract, setContract] = React.useState(undefined)

  const init = async function (_account, _library): Promise<any> {
    const web3 = new Web3(_library.provider)
    const tempContract = new web3.eth.Contract(ERC20_ABI, USDT_ADDRESS)
    setContract(tempContract)
  }

  const mintTokens = async function (): Promise<any> {
    try {
      const data = await contract.methods
        .mint(account, 1000)
        .send({ from: account })
      console.log('data', data)
    } catch (error) {
      console.log('error', error)
    }
  }

  React.useEffect(() => {
    if (!!account && !!library) {
      init(account, library)
    }
    return null
  }, [account, library, chainId])

  return (
    <Layout home>
      <Head>
        <title>Faucet</title>
      </Head>
      <section>
        <Typography
          sx={{ display: 'inline' }}
          variant='body2'
          color='text.primary'
        >
          Here you can get some USD Test Tokens to use in the application.
        </Typography>
        <Button onClick={() => mintTokens()}>Mint USD Test Tokens</Button>
      </section>
    </Layout>
  )
}

export default Faucet
