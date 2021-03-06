import React from 'react'
import Web3 from 'web3'
import Link from 'next/link'

import {
  Avatar,
  Box,
  ListItemAvatar,
  ListItemText,
  ListItem as MuiListItem,
  Typography,
} from '@mui/material'
import { useWeb3React } from '@web3-react/core'

import { hooks, network } from '@components/web3/connectors/network'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const APPLICATION_ABI = require('@contracts/applications.json')

const {
  useChainId,
  useAccounts,
  useError,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks
interface Props {
  address: string
}

const ListItem: React.FC<Props> = ({ address }) => {
  console.log('ApplicationListItem::address', address)
  const isActive = useIsActive()
  const provider = useProvider()

  const DemoApplication = {
    name: 'Demo',
    description: 'Demo',
  }
  const [application, setApplication] = React.useState(DemoApplication)

  const init = async function (): Promise<any> {
    let data

    try {
      const web3 = new Web3(provider.connection.url)
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
    if (isActive) {
      init()
    }
    return null
  }, [isActive])

  return (
    <Link href={{ pathname: `/projects/${address}` }}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          borderRadius: '8px',
          boxShadow: 1,
          mb: 2,
          transition: 'ease-in-out 200ms',
          cursor: 'pointer',
          '&:hover': {
            boxShadow: 1,
            transform: 'translateY(-2px)',
          },
        }}
      >
        <MuiListItem alignItems='flex-start'>
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
        </MuiListItem>
      </Box>
    </Link>
  )
}

export default ListItem
