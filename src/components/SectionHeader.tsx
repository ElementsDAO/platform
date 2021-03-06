import React from 'react'

import { Container, Typography } from '@mui/material'

interface SectionHeaderProps {
  title: string
  subtitle: string
  children: React.ReactNode
}

export const SectionHeader: React.FC<SectionHeaderProps> = (props) => {
  const { title, subtitle, children } = props
  return (
    <Container sx={{ mb: 8 }} maxWidth='sm'>
      <Typography
        variant='h1'
        component='h2'
        textAlign='center'
        sx={{
          fontSize: { xs: '40px', md: '62px' },
        }}
      >
        {title}
      </Typography>
      <Typography variant='subtitle1' textAlign='center'>
        {subtitle}
      </Typography>
      {children}
    </Container>
  )
}
