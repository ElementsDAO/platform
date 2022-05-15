import React from 'react'
import { Box, Container, Typography } from '@mui/material'

import Base from '@layouts/Base'
import Nfts from '@components/profile/Nfts'

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
      <Nfts />
    </Container>
  </Base>
)

export default Profile
