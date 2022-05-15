import React from 'react'

import { Box, Menu } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'

import { IconButtonFancy } from '@components/IconButtonFancy'
import Button from '@components/Button'
import { config } from '@config'

const MobileMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const mobileMenuId = 'mobile-menu'

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
      <Box>
        <IconButtonFancy
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MenuRoundedIcon />
        </IconButtonFancy>
      </Box>
      <Menu
        id={mobileMenuId}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiPaper-root': {
            px: 1,
            py: 1 / 2,
            bgcolor: 'background.paper',
            boxSizing: 'border-box',
            borderRadius: '8px',
          },
          '& .MuiList-root': {
            p: 0,
            display: 'flex',
            flexDirection: 'column'
          },
        }}
      >
        {config.mobileMenu.map((item) => (
          <Button sx={{ my: 1 / 2 }} key={item.label} color='secondary'>
            {item.label}
          </Button>
        ))}
      </Menu>
    </Box>
  )
}

export default MobileMenu
