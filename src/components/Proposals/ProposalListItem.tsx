import React from 'react'

import {
  Avatar,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material'
import { useWeb3React } from '@web3-react/core'

const ProposalListItem = ({ contract, proposal }): any => {
  const { account } = useWeb3React()

  const vote = async (id: any): Promise<any> => {
    try {
      await contract.methods.vote(id).send({ from: account })
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

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
