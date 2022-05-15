import * as React from 'react'
import Head from 'next/head'
import Web3 from 'web3'

import { useWeb3React } from '@web3-react/core'
import { Container, Typography } from '@mui/material'

import { ELEMENTS_ADDRESS } from '@config'
import Base from '@layouts/Base'

const ELEMENTS_ABI = require('@contracts/elements.json')

const Home: React.FC = () => {
  const { account, library, chainId } = useWeb3React()
  const [totalSupply, setTotalSupply] = React.useState(undefined)
  const [count, setCount] = React.useState(undefined)

  const init = async function (_account, _library): Promise<any> {
    const web3 = new Web3(_library.provider)
    const tempGameDuelContract = new web3.eth.Contract(
      ELEMENTS_ABI,
      ELEMENTS_ADDRESS
    )
    let data

    try {
      data = await tempGameDuelContract.methods.applications_count().call()
      setCount(data)
      data = await tempGameDuelContract.methods.totalSupply().call()
      setTotalSupply(data)
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
        <title>Home</title>
      </Head>
      <Container maxWidth='sm'>
        <Typography color='text.secondary'>
          [Alpha Version]
        </Typography>
        <Typography variant='h2' fontWeight='bold'>
          Elements
        </Typography>
        <Typography color='text.secondary'>
          Platform to fund and invest in the future - renewable energy. We already have <strong>{count} projects</strong> and a current token supply of <strong>{totalSupply} ELE</strong>.
        </Typography>
      </Container>
    </Base>
  )
}


export default Home
