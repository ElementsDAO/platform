import React from 'react'
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Typography,
} from '@iotabots/components'
import { useWeb3React } from '@web3-react/core'
import CircularProgress from '@mui/material/CircularProgress'
import { useRouter } from 'next/router'

const AddVoter = ({ contract }): any => {
  const { account, library, chainId } = useWeb3React()
  const router = useRouter()

  React.useEffect(() => {
    if (!!account && !!library) {
      // init(account, library)
    }
    return null
  }, [account, library, contract])

  const [loading, setLoading] = React.useState(false)
  const [loadingMessage, setLoadingMessage] = React.useState('')
  const [formInput, updateFormInput] = React.useState({
    name: '',
  })

  const addVoter = async (): Promise<any> => {
    console.log('öp', contract)

    setLoadingMessage('create addVoter...')
    setLoading(true)
    const { name } = formInput
    // if (!name || !description || !price || !fileUrl) return
    /* first, upload to IPFS */
    const data = JSON.stringify({
      name,
    })
    try {
      const x = await contract.methods.addVoter(name).send({ from: account })
      console.log('createProposal', x)
      console.log('address', contract.address)
      // eslint-disable-next-line no-underscore-dangle
      router.push('/vote', { query: { addr: contract._address } })

      setLoading(false)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }
  return (
    <Box>
      {/* Hero unit */}
      <Container sx={{ py: 8 }} maxWidth='md'>
        <Typography variant='h2' align='center' color='#fff' gutterBottom>
          Add Voter
        </Typography>
        {/* End hero unit */}
      </Container>
      <Container sx={{ py: 8 }} maxWidth='md'>
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
              Allow a voter address to vote on proposals.
            </Typography>
            <Box
              component='form'
              sx={{
                '& > :not(style)': { m: 1, margin: '20px' },
              }}
            >
              <Input
                disabled={loading}
                placeholder='Voter'
                className=''
                onChange={(e: any) =>
                  updateFormInput({ ...formInput, name: e.target.value })
                }
              />
              <br />
              <br />
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
                  onClick={addVoter}
                  className='font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg'
                >
                  Add Voter
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AddVoter
