import React from 'react'
import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  Input,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@iotabots/components'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import Link from 'next/link'
import ApplicationListItem from './ApplicationListItem'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const APPLICATION_ABI = require('../../contracts/applications.json')

const ApplicationList = ({ contract, count }): any => {
  const { account, library, chainId } = useWeb3React()
  const [applications, setApplications] = React.useState([])

  const init = async function (_account, _library): Promise<any> {
    let data
    const dataArray = []
    try {
      for (let i = 0; i < count; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        data = await contract.methods.applications(i).call()
        console.log('applications', data)
        dataArray.push(data)
      }
      console.log('applications', data)
      setApplications(dataArray)
      const web3 = new Web3(_library.provider)
      const tempContract = new web3.eth.Contract(APPLICATION_ABI, data)

      try {
        data = await tempContract.methods.balance().call()
        console.log('balance', data)
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
  const createApplication = async (): Promise<any> => {
    console.log('öp')

    const x = await contract.methods
      .createApplication(1337)
      .send({ from: account })
    console.log('öp', x)
  }
  const changeAmount = (value: number): void => {
    console.log('öp', value)
  }
  return (
    <>
      <Typography>Application List</Typography>
      <Box>
        <p>Entries: {count}</p>

        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {applications.map((addr, index) => (
            <ApplicationListItem address={addr} />
          ))}
        </List>
      </Box>
    </>
  )
}

export default ApplicationList
