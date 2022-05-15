import * as React from 'react'

import { AppBar, Box, Toolbar } from '@mui/material'

import MobileMenu from './MobileMenu'
import Logo from '../Logo'
import Menu from './Menu'
import IdentityMenu from './IdentityMenu'

export interface MenuItemProps {
  label: string
  href: string
}

export interface NavigationProps {
  identity: boolean
  logo: JSX.Element
  onClickProfile: () => void
}

export const Navigation: React.FC<NavigationProps> = (props) => {
  const { identity = true, logo, onClickProfile } = props
  return (
    <AppBar
      sx={{
        position: 'fixed',
        p: 0,
        zIndex: 11,
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexShrink: 1,
        boxSizing: 'border-box',
        bgcolor: 'background.paper',
        backdropFilter: 'blur(8px)',
        boxShadow: 1,
        '& .MuiToolbar-root': {
          px: 2,
        },
      }}
    >
      <Toolbar
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {logo || <Logo />}
        <Menu />
        {identity ? <IdentityMenu onClick={onClickProfile} /> : <Box />}
        <MobileMenu />
      </Toolbar>
    </AppBar>
  )
}
