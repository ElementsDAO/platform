import React from 'react'
import { Box } from '@mui/material'

interface Props {
  image: string
}

const CoverImage: React.FC<Props> = (props) => {
  const { image } = props
  return (
    <Box sx={{
      bgcolor: 'background.paper',
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100%',
      height: 400,
      mb: 3
    }} />
  )
}

export default CoverImage