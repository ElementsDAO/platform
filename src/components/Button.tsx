import React from 'react'
import { ButtonProps, Button as MuiButton } from '@mui/material'

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <MuiButton
      {...props}
      variant='contained'
      sx={{
        ...props.sx,
        textTransform: 'none',
        fontWeight: 'bold',
        borderRadius: '8px',
        boxShadow: 0,
        '&:hover': {
          boxShadow: 0
        }
      }}
    />
  )
}

export default Button