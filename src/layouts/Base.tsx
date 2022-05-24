import React from 'react'
import { useRouter } from 'next/router'

import { Box, BoxProps } from '@mui/material'

import { Navigation } from '@components/Navigation'
import Access from '@components/web3/Access'
import Logo from '@components/Logo'

const Base: React.FC<BoxProps> = (props) => {
  const { children, sx } = props
  const { push } = useRouter()
  return (
    <Box pt='100px' sx={sx}>
      <Navigation
        identity
        logo={<Logo />}
        onClickProfile={() => push('/profile')}
      />
      <Access children={children} />
    </Box>
  )
}

export default Base
