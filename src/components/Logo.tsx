import React from 'react'
import Link from 'next/link'

import { Box, Typography } from '@mui/material'

const Logo: React.FC = () => (
  <Link href='/'>
    <Box
      sx={{
        '& svg': {
          height: 36,
          width: 'auto',
          display: 'flex',
          alignItems: 'center',
        },
      }}
    >
      <Typography variant='h5' fontWeight='bold'>
        Elements
      </Typography>
    </Box>
  </Link>
)

export default Logo
