import React from 'react'
import Head from 'next/head'
import Web3 from 'web3'
import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  Input,
  InputLabel,
  Typography,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router'

import { useWeb3React } from '@web3-react/core'

import config from '@config'
import Base from '@layouts/Base'
import Button from '@components/Button'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ERC20_ABI = require('@contracts/erc20.json')

const Faucet: React.FC = () => {
  const { account, library, chainId, error: connectError } = useWeb3React()
  const [contract, setContract] = React.useState(undefined)

  const init = async function (_account, _library): Promise<any> {
    const web3 = new Web3(_library.provider)
    const tempContract = new web3.eth.Contract(ERC20_ABI, config.contracts.ustd)
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
      <Container>
        {connectError && <Alert severity='error'>{connectError.message}</Alert>}
        <Typography
          sx={{ display: 'inline' }}
          variant='body2'
          color='text.primary'
        >
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
