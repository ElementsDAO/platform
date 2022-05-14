import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router'
import Layout from '../src/components/layout'

import { ELEMENTS_ADDRESS, NFT_ADDRESS, NFT_STAKE_ADDRESS } from '../config'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ELEMENTS_ABI = require('../src/contracts/elements.json')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const NFT_STAKE_ABI = require('../src/contracts/nft_stake.json')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const NFT_ABI = require('../src/contracts/nft.json')

const DepositInfo = {
  stake: 0,
  rewards: 0,
}
const Stake = (): any => {
  const router = useRouter()

  const { account, library, chainId } = useWeb3React()
  const [contract, setContract] = React.useState(undefined)
  const [nfts, setNfts] = React.useState(undefined)
  const [contractNftStake, setContractNftStake] = React.useState(undefined)
  const [contractNft, setContractNft] = React.useState(undefined)
  const [balance, setBalance] = React.useState(undefined)
  const [poolBalance, setPoolBalance] = React.useState(undefined)
  const [depositInfo, setDepositInfo] = React.useState(DepositInfo)

  const init = async function (_account, _library): Promise<any> {
    const web3 = new Web3(_library.provider)
    const tempContract = new web3.eth.Contract(ELEMENTS_ABI, ELEMENTS_ADDRESS)
    const tempContractNftStake = new web3.eth.Contract(
      NFT_STAKE_ABI,
      NFT_STAKE_ADDRESS
    )
    const tempContractNft = new web3.eth.Contract(NFT_ABI, NFT_ADDRESS)

    let data = await tempContract.methods.balanceOf(_account).call()
    setContract(tempContract)
    setContractNftStake(tempContractNftStake)
    setContractNft(tempContractNft)
    console.log('balance', data)
    setBalance(data)
    data = await tempContractNft.methods.walletOfOwner(_account).call()
    console.log('nfts', data)
    setNfts(data)
    data = await tempContractNftStake.methods.getStakeContractBalance().call()
    console.log('poolBalance', data)
    setPoolBalance(data)
    data = await tempContractNftStake.methods.receipt(1).call()
    console.log('receipt', data)
    data = await tempContractNftStake.methods.getCurrentStakeEarned(1).call()
    console.log('getCurrentStakeEarned', data)

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

  const stakeNft = async function (): Promise<any> {
    try {
      const amount = balance
      const res = await contractNft.methods
        .approve(NFT_STAKE_ADDRESS, 1)
        .send({ from: account })
      console.log('approval', res)
      const data = await contractNftStake.methods
        .stakeNFT([1])
        .send({ from: account })
      console.log('data', data)
      router.reload()
    } catch (error) {
      console.log('error', error)
    }
  }

  const unstakeNft = async function (): Promise<any> {
    try {
      const data = await contractNftStake.methods
        .unStakeNFT(1)
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
        <title>Stake</title>
      </Head>
      <section>
        <Typography variant='h2' color='text.primary'>
          Stake ELE Tokens.
        </Typography>
        <Typography variant='body2' color='text.primary'>
          Here you can get stake your ELE tokens to earn some rewards.
        </Typography>
        <Typography variant='body2' color='text.primary'>
          Balance: {balance} ELE
        </Typography>
        <Typography variant='body2' color='text.primary'>
          Staked ELE: {depositInfo.stake}
        </Typography>
        <Typography variant='body2' color='text.primary'>
          Rewards: {depositInfo.rewards}
        </Typography>
        <Button onClick={() => stake()}>Stake</Button>
      </section>
      <section>
        <Typography variant='h2' color='text.primary'>
          Stake Elementary Energy NFTs.
        </Typography>
        <Typography gutterBottom variant='h6'>
          poolBalance:{poolBalance}
        </Typography>
        {nfts?.length === 0 ? (
          <Typography gutterBottom variant='h6'>
            You don&apos;t own any Elementary Energy NFTs yet :(
          </Typography>
        ) : (
          <Grid container spacing={6}>
            {nfts?.flatMap((bot) => (
              <Grid item key={bot} xs={2} sm={3} md={4}>
                <Link href={`https://elementary.energy/nfts/${bot}`}>
                  <Card
                    sx={{
                      minWidth: '100%',
                      cursor: 'pointer',
                      bgcolor: 'rgba(0,0,0,0.5)',
                    }}
                  >
                    <CardMedia
                      image={`https://elementary.energy/nfts/${bot}`}
                    />
                    <CardContent sx={{ p: 4, pb: '12px !important' }}>
                      <Typography variant='h6' mb={0}>
                        {`Elementary Energy NFT #${bot}`}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        )}
        <Button onClick={() => stakeNft()}>Stake NFT</Button>
        <Button onClick={() => unstakeNft()}>UnStake NFT</Button>
      </section>
    </Layout>
  )
}

export default Stake
