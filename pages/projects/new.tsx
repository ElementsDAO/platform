import React from 'react'
import Web3 from 'web3'

import { useWeb3React } from '@web3-react/core'
import { Container, Typography } from '@mui/material'

import Form from '@components/projects/Form'
import Base from '@layouts/Base'
import config from '@config'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ELEMENTS_ABI = require('@contracts/elements.json')

const New: React.FC = () => {
  const { account, library } = useWeb3React()
  const [elementContract, setElementContract] = React.useState(undefined)

  const init = async function (_account, _library): Promise<any> {
    const web3 = new Web3(_library.provider)
    const tempGameDuelContract = new web3.eth.Contract(
      ELEMENTS_ABI,
      config.contracts.elements
    )
    setElementContract(tempGameDuelContract)
  }

  React.useEffect(() => {
    if (!!account && !!library) {
      init(account, library)
    }
    return null
  }, [account, library])

  return (
    <Base>
      <Container maxWidth='sm'>
        <Typography gutterBottom fontWeight='bold' variant='h2'>
          New
        </Typography>
      </Container>
      <Form contract={elementContract} />
    </Base>
  )
}

export default New
