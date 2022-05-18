import React from 'react'
import { Box, Container, Typography } from '@mui/material'

import Base from '@layouts/Base'
// import Nfts from '@components/profile/Nfts'
import { NetworkCard } from '@components/web3/cards/NetworkCard'
import { MetaMaskCard } from '@components/web3/cards/MetaMaskCard'

const Profile: React.FC = () => (
  <Base>
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
          Profile
        </Typography>
      </Box>
      <Typography fontWeight='bold' variant='body1'>
        Welcome in your personal area!
      </Typography>
      {/* <Nfts /> */}
      <Typography fontWeight='bold' variant='h4'>
        Multichain Settings
      </Typography>
      <NetworkCard />
      <MetaMaskCard />
    </Container>
  </Base>
)

export default Profile
