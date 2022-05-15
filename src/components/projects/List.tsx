import React from 'react'
import Web3 from 'web3'

import { Box, List as MuiList, Typography } from '@mui/material'
import { useWeb3React } from '@web3-react/core'

import ListItem from './ListItem'

const APPLICATION_ABI = require('@contracts/applications.json')

const List = ({ contract, count }): any => {
  const { account, library, chainId } = useWeb3React()
  const [applications, setApplications] = React.useState([])

  const init = async function (_account, _library): Promise<any> {
    let data
    const dataArray = []
    try {
      for (let i = 0; i < count; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        data = await contract.methods.applications(i).call()
        dataArray.push(data)
      }
      setApplications(dataArray)
      const web3 = new Web3(_library.provider)
      const tempContract = new web3.eth.Contract(APPLICATION_ABI, data)

      try {
        data = await tempContract.methods.balance().call()
      } catch (error) {
        console.log('error balance', error)
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  React.useEffect(() => {
    if (!!account && !!library) {
      init(account, library)
    }
    return null
  }, [account, library, chainId])

  return (
    <Box>
      <MuiList>
        {applications.map((addr, index) => (
          <ListItem address={addr} />
        ))}
      </MuiList>
      <Typography mt={1}><strong>Entries:</strong> {count}</Typography>
    </Box>
  )
}

export default List
