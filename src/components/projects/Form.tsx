import React from 'react'
import { Box, Container, TextField, Typography } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import CircularProgress from '@mui/material/CircularProgress'
import { useRouter } from 'next/router'
import Button from '../Button'

const Form = ({ contract }): any => {
  const { account } = useWeb3React()
  const router = useRouter()

  const client = ipfsHttpClient({ url: 'https://ipfs.infura.io:5001/api/v0' })

  const [loading, setLoading] = React.useState(false)
  const [loadingMessage, setLoadingMessage] = React.useState('')
  const [fileUrl, setFileUrl] = React.useState<null | string>(null)

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

  const createApplication = async (): Promise<any> => {
    console.log('öp')

    setLoadingMessage('create Application...')
    setLoading(true)
    const { name, description, price } = formInput
    // if (!name || !description || !price || !fileUrl) return
    console.log('first, upload to IPFS')
    /* first, upload to IPFS */
    const data = JSON.stringify({
      name,
      description,
      image: fileUrl,
    })
    try {
      const added = await client.add(data)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
      console.log('url', url)
      const x = await contract.methods
        .createApplication(price, url)
        .send({ from: account })
      console.log('createApplication', x)
      router.push('/')

      setLoading(false)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

  return (
    <Container maxWidth='sm'>
      <Box
        component='form'
      >
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
              name: e.target.value
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
              <Typography
                variant='body1'
                align='center'
              >
                Loading...
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
