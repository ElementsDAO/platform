import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Web3 from 'web3'

import { useWeb3React } from '@web3-react/core'
import { Container, Typography } from '@mui/material'

import config from '@config'
import Base from '@layouts/Base'
import { hooks, network } from '@components/web3/connectors/network'

const {
  useChainId,
  useAccounts,
  useError,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ELEMENTS_ABI = require('@contracts/elements.json')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const NFT_STAKE_ABI = require('@contracts/nft_stake.json')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const NFT_ABI = require('@contracts/nft.json')

const DepositInfo = {
  stake: 0,
  rewards: 0,
}
const Bridge = (): any => {
  const router = useRouter()
  const provider = useProvider()

  const [contract, setContract] = React.useState(undefined)
  const [nfts, setNfts] = React.useState(undefined)
  const [contractNftStake, setContractNftStake] = React.useState(undefined)
  const [contractNft, setContractNft] = React.useState(undefined)
  const [balance, setBalance] = React.useState(undefined)
  const [poolBalance, setPoolBalance] = React.useState(undefined)
  const [depositInfo, setDepositInfo] = React.useState(DepositInfo)

  // const init = async function (): Promise<any> {
  //   const web3 = new Web3(provider.connection.url)
  //   const tempContract = new web3.eth.Contract(
  //     ELEMENTS_ABI,
  //     config.contracts.elements
  //   )
  //   const tempContractNftStake = new web3.eth.Contract(
  //     NFT_STAKE_ABI,
  //     config.contracts.nftStake
  //   )
  //   const tempContractNft = new web3.eth.Contract(NFT_ABI, config.contracts.nft)

  //   let data = await tempContract.methods.balanceOf(_account).call()
  //   setContract(tempContract)
  //   setContractNftStake(tempContractNftStake)
  //   setContractNft(tempContractNft)
  //   setBalance(data)
  //   data = await tempContractNft.methods.walletOfOwner(_account).call()
  //   setNfts(data)
  //   data = await tempContractNftStake.methods.getStakeContractBalance().call()
  //   setPoolBalance(data)
  //   data = await tempContractNftStake.methods.receipt(1).call()
  //   data = await tempContractNftStake.methods.getCurrentStakeEarned(1).call()

  //   data = await tempContract.methods.getDepositInfo(_account).call()
  //   setDepositInfo({
  //     stake: data[0],
  //     rewards: data[1],
  //   })
  // }

  // const stake = async function (): Promise<any> {
  //   try {
  //     const amount = balance
  //     await contract.methods
  //       .approve(config.contracts.elements, amount)
  //       .send({ from: account })
  //     await contract.methods.deposit(amount).send({ from: account })
  //     router.reload()
  //   } catch (error) {
  //     console.log('error', error)
  //   }
  // }

  // const stakeNft = async function (): Promise<any> {
  //   try {
  //     const res = await contractNft.methods
  //       .approve(config.contracts.nftStake, 1)
  //       .send({ from: account })
  //     const data = await contractNftStake.methods
  //       .stakeNFT([1])
  //       .send({ from: account })
  //     router.reload()
  //   } catch (error) {
  //     console.log('error', error)
  //   }
  // }

  // const unstakeNft = async function (): Promise<any> {
  //   try {
  //     await contractNftStake.methods.unStakeNFT(1).send({ from: account })
  //     router.reload()
  //   } catch (error) {
  //     console.log('error', error)
  //   }
  // }

  // React.useEffect(() => {
  //   if (!!account && !!library) {
  //     init(account, library)
  //   }
  //   return null
  // }, [account, library, chainId])

  return (
    <Base>
      <Container maxWidth='md'>
        <Typography variant='h2' fontWeight='bold' gutterBottom>
          Bridge
        </Typography>
      </Container>
    </Base>
  )
}

export default Bridge
