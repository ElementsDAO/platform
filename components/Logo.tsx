import React from 'react'
import { Typography } from '@iotabots/components'
import Link from 'next/link'

const Logo: React.FC = () => (
  <Link href='/'>
    <Typography
      style={{ fontFamily: 'Norican' }}
      color='primary'
      mt={3}
      mb={1}
      variant='h4'
    >
      Elements
    </Typography>
  </Link>
)

export default Logo
