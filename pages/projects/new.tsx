import React from 'react'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import { Container, Typography } from '@mui/material'
import Form from '../../src/components/projects/Form'
import Base from '../../src/layouts/Base'


import { ELEMENTS_ADDRESS } from '../../config'
const ELEMENTS_ABI = require('../../src/contracts/elements.json')

const New: React.FC = () => {
  const { account, library } = useWeb3React()
  const [elementContract, setElementContract] = React.useState(undefined)

  const init = async function (_account, _library): Promise<any> {
    const web3 = new Web3(_library.provider)
    const tempGameDuelContract = new web3.eth.Contract(
      ELEMENTS_ABI,
      ELEMENTS_ADDRESS
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