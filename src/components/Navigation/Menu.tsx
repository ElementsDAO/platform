import React from 'react'
import { useRouter } from 'next/router'

import { Box } from '@mui/material'

import Button from '../Button'
import { MENU } from './config'


const Menu: React.FC = () => {
  const history = useRouter()

  return (
    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
      <Box sx={{ display: 'flex' }}>
        {MENU.map((item) => {
          const active = history.pathname === item.href
          console.log('item.href', item)
          console.log('history.pathname', history.pathname)
          console.log('active', active)
          return (
            <Button
              sx={{ mr: 2 }}
              onClick={() => history.push(item.href)}
              color={active ? 'primary' : 'secondary'}
              key={item.label}
            >
              {item.label}
            </Button>
          )
        })}
      </Box>
    </Box>
  )
}

export default Menu
