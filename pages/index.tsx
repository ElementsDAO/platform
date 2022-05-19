import * as React from 'react'
import Head from 'next/head'
import Web3 from 'web3'
import { useWeb3React } from '@web3-react/core'
import { Alert, Container, Typography } from '@mui/material'
import config from '@config'
import Base from '@layouts/Base'

import { hooks, network } from '@components/web3/connectors/network'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ELEMENTS_ABI = require('@contracts/elements.json')

const {
  useChainId,
  useAccounts,
  useError,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks

const Home: React.FC = () => {
  const isActive = useIsActive()
  const provider = useProvider()
  const [totalSupply, setTotalSupply] = React.useState(undefined)
  const [count, setCount] = React.useState(undefined)
  const chainId = useChainId()
  const accounts = useAccounts()
  const error = useError()
  const init = async function (): Promise<any> {
    const web3 = new Web3(provider.connection.url)
    console.log('web3', web3)
    const tempContract = new web3.eth.Contract(
      ELEMENTS_ABI,
      config.contracts.elements
    )
    let data

    try {
      data = await tempContract.methods.applications_count().call()
      setCount(data)
      data = await tempContract.methods.totalSupply().call()
      setTotalSupply(data / 10 ** 18)
    } catch (err) {
      console.log('error', err)
    }
  }

  React.useEffect(() => {
    console.log('provider', provider)
    console.log('isActive', isActive)
    if (isActive) {
      console.log('provider', provider)
      init()
    }
    return null
  }, [isActive])

  return (
    <Base>
      <Head>
        <title>Home</title>
      </Head>
      <Container maxWidth='sm'>
        <Typography color='text.secondary'>[Alpha Version]</Typography>
        <Typography variant='h2' fontWeight='bold'>
          Elements
        </Typography>
        <Typography color='text.secondary'>
          Platform to fund and invest in the future - renewable energy. We
          already have <strong>{count} projects</strong> and a current token
          supply of <strong>{totalSupply} ELE</strong>.
        </Typography>
      </Container>
    </Base>
  )
}

export default Home
