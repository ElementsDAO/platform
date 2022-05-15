import * as React from 'react'
import Head from 'next/head'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import { Box, Container, Typography } from '@mui/material'
import { useRouter } from 'next/router'

import { ELEMENTS_ADDRESS } from '../../config'

import List from '../../src/components/projects/List'
import Base from '../../src/layouts/Base'
import Button from '../../src/components/Button'

const ELEMENTS_ABI = require('../../src/contracts/elements.json')
const APPLICATION_ABI = require('../../src/contracts/applications.json')

const Home = (): any => {
  const { query, push } = useRouter()

  const { account, library, chainId } = useWeb3React()
  const [elementContract, setElementContract] = React.useState(undefined)
  const [count, setCount] = React.useState(undefined)

  const init = async function (_account, _library): Promise<any> {
    const web3 = new Web3(_library.provider)
    const tempGameDuelContract = new web3.eth.Contract(
      ELEMENTS_ABI,
      ELEMENTS_ADDRESS
    )
    setElementContract(tempGameDuelContract)
    let data

    const address = query.addr || undefined
    const newApplication = query.new || undefined

    if (typeof address === 'string') {
      const tempContract = new web3.eth.Contract(APPLICATION_ABI, address)
      try {
        data = await tempContract.methods.balance().call()
        console.log('balance', data)
      } catch (error) {
        console.log('error', error)
      }
    } else {
      try {
        data = await tempGameDuelContract.methods.applications_count().call()
        console.log('applications_count', data)
        setCount(data)
      } catch (error) {
        console.log('error', error)
      }
    }
  }

  React.useEffect(() => {
    if (!!account && !!library) {
      console.log('query.addr', query.addr)
      init(account, library)
    }
    return null
  }, [account, library, chainId])

  return (
    <Base>
      <Head>
        <title>Applications</title>
      </Head>
      <Container maxWidth='md'>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2
        }}>
          <Typography fontWeight='bold' variant='h2'>
            Projects
          </Typography>
          <Button onClick={() => push('/projects/new')}>
            Create new Project
          </Button>
        </Box>
        {count && (
          <List
            contract={elementContract}
            count={count}
          />
        )}
      </Container>
    </Base>
  )
}

export default Home
