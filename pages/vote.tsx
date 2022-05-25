import * as React from 'react'
import Head from 'next/head'
import Web3 from 'web3'
import { useRouter } from 'next/router'

import { Box, Container, Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

import ProposalList from '@components/Proposals/ProposalList'
// import AddVoter from '@components/Proposals/AddVoter'
import Base from '@layouts/Base'
import { hooks as netHooks } from '@components/web3/connectors/network'
import { hooks, metaMask } from '@components/web3/connectors/metaMask'
import config from '@config'

const { useAccounts, useError, useIsActivating, useIsActive, useENSNames } =
  hooks
const { useProvider, useChainId } = netHooks

// eslint-disable-next-line @typescript-eslint/no-var-requires
const GOV_ABI = require('@contracts/liquidDemocracy.json')

const Vote: React.FC = () => {
  const router = useRouter()
  const { query } = useRouter()

  const [contract, setContract] = React.useState(undefined)
  const [loading, setLoading] = React.useState(false)
  const [proposalCount, setProposalCount] = React.useState(0)
  const [address, setAddress] = React.useState(undefined)
  const [loadingMessage, setLoadingMessage] = React.useState('')

  const chainId = useChainId()
  const isActive = useIsActive()
  const isActiveNetwork = netHooks.useIsActive()
  const provider = useProvider()
  const accounts = useAccounts()

  const [account, setAccount] = React.useState(undefined)

  const init = async function (): Promise<any> {
    console.log('provider', provider)
    console.log('account:', accounts[0])
    setAccount(accounts[0])
    const web3 = new Web3(provider.connection.url)
    console.log('web3', web3)
    const tempContract = new web3.eth.Contract(GOV_ABI, config.contracts.gov)
    setContract(tempContract)

    try {
      const data = await tempContract.methods.walletOfOwner(account).call()
      console.log('data', data)
    } catch (err) {
      console.log('err', err)
    }
  }

  React.useEffect(() => {
    if (isActive && isActiveNetwork && chainId) {
      init()
    }
  }, [isActive, chainId])

  return (
    <Base>
      <Head>
        <title>Vote</title>
      </Head>
      <Container maxWidth='sm'>
        <Typography variant='h2' fontWeight='bold'>
          Vote
        </Typography>
        <Typography mb={3} color='text.secondary'>
          Liquid Democracy Voting with Element NFTs.
        </Typography>

        <Box>
          <Typography variant='h6' color='text.primary'>
            Proposals
          </Typography>
          <ProposalList contract={contract} count={proposalCount} />
          {/* <AddVoter contract={contract} /> */}
        </Box>
      </Container>
    </Base>
  )
}

export default Vote
