import * as React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Box, Container, Typography } from '@mui/material'

import { ContractsContext } from '@context/ContractsProvider'
import Button from '@components/Button'
import List from '@components/projects/List'
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

const Projects: React.FC = () => {
  const { push } = useRouter()
  const isActive = useIsActive()

  const { element } = React.useContext(ContractsContext)
  console.log('element', element)

  const [count, setCount] = React.useState<number | undefined>(undefined)

  const queryCount = async function (): Promise<any> {
    try {
      const data = await element.methods.applications_count().call()
      setCount(data)
    } catch (error) {
      console.log('error', error)
    }
  }

  React.useEffect(() => {
    if (isActive) {
      queryCount()
    }
  }, [isActive])

  return (
    <Base>
      <Head>
        <title>Applications</title>
      </Head>
      <Container maxWidth='md'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Typography fontWeight='bold' variant='h2'>
            Projects
          </Typography>
          <Button onClick={() => push('/projects/new')}>
            Create new Project
          </Button>
        </Box>
        {count && <List count={count} />}
      </Container>
    </Base>
  )
}

export default Projects
