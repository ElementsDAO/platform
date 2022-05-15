import React from 'react'
import Head from 'next/head'
import Web3 from 'web3'
import { useWeb3React } from '@web3-react/core'
import { Container, Typography } from '@mui/material'

import { USDT_ADDRESS } from '../config'
import Base from '../src/layouts/Base'
import Button from '../src/components/Button'

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
    <Base>
      <Head>
        <title>Faucet</title>
      </Head>
      <Container maxWidth='sm'>
        <Typography variant='h2' fontWeight='bold'>
          Faucet
        </Typography>
        <Typography color='text.secondary'>
          Here you can get some USD Test Tokens to use in the application.
        </Typography>
        <Button onClick={() => mintTokens()} sx={{ mt: 2 }}>
          Mint USD Test Tokens
        </Button>
      </Container>
    </Base>
  )
}

export default Faucet
