import React from 'react'
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const APPLICATION_ABI = require('../../contracts/applications.json')

const ApplicationListItem = ({ address }): any => {
  console.log('ApplicationListItem::address', address)

  const DemoApplication = {
    name: 'Demo',
    description: 'Demo',
  }
  const { account, library, chainId } = useWeb3React()
  const [application, setApplication] = React.useState(DemoApplication)

  const init = async function (_account, _library): Promise<any> {
    let data
    const dataArray = []
    try {
      const web3 = new Web3(_library.provider)
      const tempContract = new web3.eth.Contract(APPLICATION_ABI, address)

      try {
        data = await tempContract.methods.baseURI().call()
        console.log('uri', data)
        try {
          fetch(data)
            .then((response) => response.json())
            .then((res) => setApplication(res))
        } catch (error) {
          console.log('error uri', error)
        }
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
    <Link href={{ pathname: '/applications', query: { addr: address } }}>
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
        </ListItemAvatar>
        <ListItemText
          primary={application.name}
          secondary={
            <Typography
              sx={{ display: 'inline' }}
              variant='body2'
              color='text.primary'
            >
              {application.description}
            </Typography>
          }
        />
      </ListItem>
    </Link>
  )
}

export default ApplicationListItem
