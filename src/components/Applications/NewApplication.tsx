import React from 'react'
import { Box, Button, Container, Grid, Input, Typography } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import CircularProgress from '@mui/material/CircularProgress'
import { useRouter } from 'next/router'

const NewApplication = ({ contract }): any => {
  const { account, library, chainId } = useWeb3React()
  const router = useRouter()

  //   React.useEffect(() => {
  //     if (!!account && !!library) {
  //       init(account, library)
  //     }
  //     return null
  //   }, [account, library, chainId])

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
    <Box>
      {/* Hero unit */}
      <Container sx={{ py: 8 }} maxWidth='md'>
        <Typography variant='h2' align='center' color='#fff' gutterBottom>
          New Application
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
              Create a appliction for your new energy system.
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
              <Input
                disabled={loading}
                placeholder='Description'
                className=''
                onChange={(e: any) =>
                  updateFormInput({
                    ...formInput,
                    description: e.target.value,
                  })
                }
              />
              <Input
                disabled={loading}
                type='number'
                placeholder='Price in USD'
                className=''
                onChange={(e: any) =>
                  updateFormInput({ ...formInput, price: e.target.value })
                }
              />
              <Input
                disabled={loading}
                type='file'
                name='Asset'
                className='my-4'
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
                  onClick={createApplication}
                  className='font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg'
                >
                  Create Application
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default NewApplication
