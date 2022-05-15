import React from 'react'
import { Box, BoxProps } from '@mui/material'
import { Navigation } from '../components/Navigation'
import Logo from '../components/Logo'
import { useRouter } from 'next/router'

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
      {children}
    </Box>
  )
}

export default Base