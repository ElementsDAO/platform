import * as React from 'react'
import Head from 'next/head'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import Layout, { siteTitle } from '../src/components/layout'

import { ELEMENTS_ADDRESS } from '../config'
import { Typography } from '@mui/material'

const ELEMENTS_ABI = require('../src/contracts/elements.json')

const Home = (): any => {
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
      console.log('data', data)
      setCount(data)
      data = await tempGameDuelContract.methods.totalSupply().call()
      console.log('totalSupply', data)
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
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section >
        <Typography variant='h1' >Elements</Typography>

        <h2>Invest in green energy!</h2>
        <p>Investment platform for renewable energy</p>
        <p>[Alpha Version 0.1]</p>
        <p>Projects count: {count}</p>
        <p>Token Supply: {totalSupply}</p>
      </section>
    </Layout>
  )
}


export default Home
