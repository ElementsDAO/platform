import * as React from 'react'
import Head from 'next/head'
import Web3 from 'web3'
import { useRouter } from 'next/router'

import { useWeb3React } from '@web3-react/core'
import {
  Box,
  Button,
  Container,
  Grid,
  Input,
  TextField,
  Typography,
} from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

import NewProposal from '@components/Proposals/NewProposal'
import ProposalList from '@components/Proposals/ProposalList'
import AddVoter from '@components/Proposals/AddVoter'
import Base from '@layouts/Base'
import { bytecode } from '@contracts/voteBytecode'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const GOV_ABI = require('@contracts/liquidDemocracy.json')

const Stake: React.FC = () => {
  const router = useRouter()
  const { query } = useRouter()

  const [contract, setContract] = React.useState(undefined)
  const [loading, setLoading] = React.useState(false)
  const [proposalCount, setProposalCount] = React.useState(0)
  const [address, setAddress] = React.useState(undefined)
  const [loadingMessage, setLoadingMessage] = React.useState('')
  const [formInput, updateFormInput] = React.useState({
    name: '',
  })
  const [searchInput, updateSearchInput] = React.useState({
    addr: '',
  })

  // const init = async function (_account, _library): Promise<any> {
  //   const web3 = new Web3(_library.provider)

  //   const tempAddress = query.addr || undefined

  //   if (typeof tempAddress === 'string' && web3.utils.isAddress(tempAddress)) {
  //     setLoading(true)
  //     setAddress(tempAddress)

  //     const tempContract = new web3.eth.Contract(GOV_ABI, tempAddress)
  //     setContract(tempContract)
  //     try {
  //       const data = await tempContract.methods.getProposalCount().call()
  //       setProposalCount(data)
  //       setLoading(false)
  //     } catch (error) {
  //       console.log('Error createProposal: ', error)
  //       setLoading(false)
  //     }
  //   }
  // }

  const createContract = async (): Promise<any> => {
    console.log('TODO: Add MetaMask provider')
    // setLoadingMessage('createContract...')
    // setLoading(true)
    // try {
    //   const web3 = new Web3(library.provider)
    //   const x = await new web3.eth.Contract(GOV_ABI)
    //     .deploy({ data: bytecode, arguments: ['First Proposal'] })
    //     .send({ gas: 0, from: account })

    //   setAddress(x.options.address)
    //   setLoading(false)
    //   router.push('/vote', { query: { addr: x.options.address } })
    // } catch (error) {
    //   console.log('Error createContract: ', error)
    //   setLoading(false)
    // }
  }
  const search = async (): Promise<any> => {
    setLoading(true)
    router.push('/vote', { query: searchInput })
  }

  // React.useEffect(() => {
  //   if (!!account && !!library) {
  //     init(account, library)
  //   }
  //   return null
  // }, [account, library, chainId, address])

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
          Liquid Democracy System
        </Typography>
        {address ? (
          <Box>
            <Typography variant='h6' color='text.primary'>
              Proposals
            </Typography>
            <ProposalList contract={contract} count={proposalCount} />
            <AddVoter contract={contract} />
            <NewProposal contract={contract} />
            <hr />
            <hr />
            <Button
              disabled={loading}
              variant='contained'
              onClick={() => {
                setAddress(undefined)
                router.push('/vote')
              }}
              className='font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg'
            >
              Create new Governance
            </Button>
          </Box>
        ) : (
          <Box>
            <Typography variant='h5' fontWeight='bold'>
              Search
            </Typography>
            <Grid
              container
              spacing={0}
              direction='row'
              alignItems='center'
              justifyContent='center'
            >
              <Grid item xs={8}>
                <Typography
                  variant='body1'
                  align='center'
                  color='#fff'
                  gutterBottom
                >
                  Search for a Liquid Democracy.
                </Typography>
                <Box
                  component='form'
                  sx={{
                    '& > :not(style)': { m: 1, margin: '20px' },
                  }}
                >
                  <TextField
                    fullWidth
                    disabled={loading}
                    placeholder='Address'
                    onChange={(e: any) =>
                      updateSearchInput({
                        ...searchInput,
                        addr: e.target.value,
                      })
                    }
                  />
                  <Box
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                  >
                    {loading ? (
                      <CircularProgress color='primary' size='5em' />
                    ) : null}

                    <Typography
                      variant='body1'
                      align='center'
                      color='#fff'
                      gutterBottom
                    >
                      {loading ? loadingMessage : ''}
                    </Typography>
                    <br />
                    <Button
                      disabled={loading}
                      variant='contained'
                      onClick={search}
                      className='font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg'
                    >
                      Search
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <br />
            <br />
            <Typography variant='h4' color='text.primary'>
              Create a new Liquid Democracy
            </Typography>
            <Grid
              container
              spacing={0}
              direction='row'
              alignItems='center'
              justifyContent='center'
              // style={{ minHeight: '100vh' }}
            >
              <Grid item xs={8}>
                <Typography
                  variant='body1'
                  align='center'
                  color='#fff'
                  gutterBottom
                >
                  Create our own Liquid Democracy where people can create and
                  vote on proposals.
                </Typography>
                <Box
                  component='form'
                  sx={{
                    '& > :not(style)': { m: 1, margin: '20px' },
                  }}
                >
                  <Input
                    disabled={loading}
                    placeholder='Name'
                    className=''
                    onChange={(e: any) =>
                      updateFormInput({ ...formInput, name: e.target.value })
                    }
                  />
                  <Box
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                  >
                    {loading ? (
                      <CircularProgress color='primary' size='5em' />
                    ) : null}

                    <Typography
                      variant='body1'
                      align='center'
                      color='#fff'
                      gutterBottom
                    >
                      {loading ? loadingMessage : ''}
                    </Typography>
                    <br />
                    <Button
                      disabled={loading}
                      variant='contained'
                      onClick={createContract}
                      className='font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg'
                    >
                      Create
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
      </Container>
    </Base>
  )
}

export default Stake
