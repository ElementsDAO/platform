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

// eslint-disable-next-line @typescript-eslint/no-var-requires
const GOV_ABI = require('../../contracts/liquidDemocracy.json')

const ProposalListItem = ({ contract, proposal }): any => {
  console.log('ApplicationListItem::proposal', proposal)

  const DemoProposal = {
    name: 'Not loaded!',
    description: 'Not loaded!',
    id: 0,
  }
  const { account, library, chainId } = useWeb3React()
  const [application, setApplication] = React.useState(DemoProposal)

  const init = async function (_account, _library): Promise<any> {
    let data
    const dataArray = []
  }

  const vote = async (id: any): Promise<any> => {
    console.log('vote on: ', id)
    try {
      const x = await contract.methods.vote(id).send({ from: account })
      console.log('vote', x)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

  React.useEffect(() => {
    if (!!account && !!library) {
      init(account, library)
    }
    return null
  }, [account, library, chainId, proposal])
  return (
    <ListItem alignItems='flex-start'>
      <ListItemAvatar>
        <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
      </ListItemAvatar>
      <ListItemText
        primary={proposal.description}
        secondary={
          <Typography
            sx={{ display: 'inline' }}
            variant='body2'
            color='text.primary'
          >
            {proposal.numVotes}
          </Typography>
        }
      />
      <Button onClick={() => vote(proposal.id)}>Vote</Button>
    </ListItem>
  )
}

export default ProposalListItem
