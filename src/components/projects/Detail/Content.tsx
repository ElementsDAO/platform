import React from 'react'
import Link from 'next/link'

import { Box, Typography } from '@mui/material'

interface Props {
  name: string
  description: string
}

const Content: React.FC<Props> = (props) => {
  const { name, description } = props
  return (
    <Box>
      <Link href='/projects'>Back to projects</Link>
      <Typography fontWeight='bold' variant='h2'>
        {name}
      </Typography>

      <Typography color='text.secondary'>
        {description}
      </Typography>
    </Box>
  )
}

export default Content