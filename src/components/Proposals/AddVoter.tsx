import React from 'react'
import { useRouter } from 'next/router'

import { Box, Button, Container, Grid, Input, Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { useWeb3React } from '@web3-react/core'

const AddVoter = ({ contract }): any => {
  const { account } = useWeb3React()
  const router = useRouter()

  const [loading, setLoading] = React.useState(false)
  const [loadingMessage, setLoadingMessage] = React.useState('')
  const [formInput, updateFormInput] = React.useState({
    name: '',
  })

  const addVoter = async (): Promise<any> => {
    setLoadingMessage('create addVoter...')
    setLoading(true)
    const { name } = formInput

    try {
      await contract.methods.addVoter(name).send({ from: account })
      // eslint-disable-next-line no-underscore-dangle
      router.push('/vote', { query: { addr: contract._address } })
      setLoading(false)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

  return (
    <Box>
      <Container sx={{ py: 8 }} maxWidth='md'>
        <Typography variant='h2' align='center' color='#fff' gutterBottom>
          Add Voter
        </Typography>
      </Container>
      <Container sx={{ py: 8 }} maxWidth='md'>
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
