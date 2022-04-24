import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from '@iotabots/components'
import { useRouter } from 'next/router'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

import { ELEMENTS_ADDRESS } from '../config'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ELEMENTS_ABI = require('../contracts/elements.json')

const DepositInfo = {
  stake: 0,
  rewards: 0,
}
const Stake = (): any => {
  const router = useRouter()

  const { account, library, chainId } = useWeb3React()
  const [contract, setContract] = React.useState(undefined)
  const [balance, setBalance] = React.useState(undefined)
  const [depositInfo, setDepositInfo] = React.useState(DepositInfo)

  const init = async function (_account, _library): Promise<any> {
    const web3 = new Web3(_library.provider)
    const tempContract = new web3.eth.Contract(ELEMENTS_ABI, ELEMENTS_ADDRESS)

    let data = await tempContract.methods.balanceOf(_account).call()
    setContract(tempContract)
    console.log('balance', data)
    setBalance(data)
    data = await tempContract.methods.getDepositInfo(_account).call()
    console.log('getDepositInfo', data)
    setDepositInfo({
      stake: data[0],
      rewards: data[1],
    })
  }

  const stake = async function (): Promise<any> {
    try {
      const amount = balance
      const res = await contract.methods
        .approve(ELEMENTS_ADDRESS, amount)
        .send({ from: account })
      console.log('approval', res)
      const data = await contract.methods
        .deposit(amount)
        .send({ from: account })
      console.log('data', data)
      router.reload()
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
      <section className={utilStyles.headingMd}>
        <Typography variant='body2' color='text.primary'>
          Here you can get stake your LMNT tokens to earn some rewards.
        </Typography>
        <Typography variant='body2' color='text.primary'>
          Balance: {balance} LMNT
        </Typography>
        <Typography variant='body2' color='text.primary'>
          Staked LMNT: {depositInfo.stake}
        </Typography>
        <Typography variant='body2' color='text.primary'>
          Rewards: {depositInfo.rewards}
        </Typography>
        <Button onClick={() => stake()}>Stake</Button>
      </section>
    </Layout>
  )
}

export default Stake
