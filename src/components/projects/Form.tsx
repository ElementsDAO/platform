import React from 'react'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { useRouter } from 'next/router'

import { Alert, Box, Container, TextField, Typography } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import CircularProgress from '@mui/material/CircularProgress'

import Button from '@components/Button'

const Form = ({ contract }): any => {
  const { account } = useWeb3React()
  const router = useRouter()

  const client = ipfsHttpClient({ url: 'https://ipfs.infura.io:5001/api/v0' })

  const [loading, setLoading] = React.useState(false)
  const [loadingMessage, setLoadingMessage] = React.useState('')
  const [fileUrl, setFileUrl] = React.useState<null | string>(null)
  const [error, setError] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')
  const [formInput, updateFormInput] = React.useState({
    price: '',
    name: '',
    description: '',
  })

  const onChange = async (e: any): Promise<any> => {
    const file = e.target.files[0]
    try {
      const added = await client.add(file, {
        progress: (prog: any) => console.log(`received: ${prog}`),
      })
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      setFileUrl(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

  // basic validation
  const validForm = (): boolean => {
    let valid = true
    if (formInput.price === '') {
      valid = false
    }
    if (formInput.name === '') {
      valid = false
    }
    if (formInput.description === '') {
      valid = false
    }
    return valid
  }

  const createApplication = async (): Promise<any> => {
    setLoadingMessage('Creating Project...')
    setLoading(true)
    const { name, description, price } = formInput
    /**
     * Basic validation
     */
    if (!validForm()) {
      console.error('the form is not valid')
      setLoading(false)
      throw new Error('Please check your input')
    }
    const data = JSON.stringify({
      name,
      description,
      image: fileUrl,
    })
    try {
      const added = await client.add(data)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`

      const x = await contract.methods
        .createApplication(price, url)
        .send({ from: account })

      router.push('/')

      setLoading(false)
    } catch (err) {
      setLoading(false)
      setError(true)
      setErrorMessage(err.message)
      console.log('Error uploading file: ', error)
    }
  }

  return (
    <Container maxWidth='sm'>
      {error && <Alert severity='error'>{errorMessage}</Alert>}
      <Box component='form'>
        <TextField
          disabled={loading}
          placeholder='Name'
          fullWidth
          variant='outlined'
          sx={{ mb: 2, bgcolor: 'background.paper' }}
          value={formInput.name}
          onChange={(e: any) =>
            updateFormInput({
              ...formInput,
              name: e.target.value,
            })
          }
        />
        <TextField
          disabled={loading}
          placeholder='Description'
          fullWidth
          variant='outlined'
          sx={{ mb: 2, bgcolor: 'background.paper' }}
          value={formInput.description}
          onChange={(e: any) =>
            updateFormInput({
              ...formInput,
              description: e.target.value,
            })
          }
        />
        <TextField
          disabled={loading}
          type='number'
          placeholder='Price in USD'
          fullWidth
          variant='outlined'
          value={formInput.price}
          sx={{ mb: 2, bgcolor: 'background.paper' }}
          onChange={(e: any) =>
            updateFormInput({
              ...formInput,
              price: e.target.value,
            })
          }
        />
        <TextField
          disabled={loading}
          type='file'
          name='Asset'
          fullWidth
          sx={{ mb: 2, bgcolor: 'background.paper' }}
          onChange={onChange}
        />
        {fileUrl && (
          <img
            className='rounded mt-4'
            alt='upload'
            width='350'
            src={fileUrl}
          />
        )}
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          {loading && (
            <>
              <CircularProgress color='primary' size='5em' />
              <Typography variant='body1' align='center'>
                {loading ? loadingMessage : ''}
              </Typography>
            </>
          )}
          <Button
            disabled={loading}
            variant='contained'
            onClick={createApplication}
          >
            Create Application
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Form
