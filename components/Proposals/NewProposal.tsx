import React from 'react'
import { Box, Button, Container, Grid, Input, Typography } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import CircularProgress from '@mui/material/CircularProgress'
import { useRouter } from 'next/router'

const NewProposal = ({ contract }): any => {
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

  const createProposal = async (): Promise<any> => {
    console.log('öp', contract)

    setLoadingMessage('create Proposal...')
    setLoading(true)
    const { name } = formInput
    // if (!name || !description || !price || !fileUrl) return
    /* first, upload to IPFS */
    const data = JSON.stringify({
      name,
    })
    try {
      const x = await contract.methods.newProposal(name).send({ from: account })
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
          New Proposal
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
              Create a proposal.
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
                  onClick={createProposal}
                  className='font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg'
                >
                  Create Proposal
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default NewProposal
