import React from 'react'
import { Box, Typography } from '@mui/material'

interface Props {
  investors: string[]
}

const Investors: React.FC<Props> = (props) => {
  const { investors } = props
  return (
    <Box sx={{
      bgcolor: 'background.paper',
      borderRadius: '8px',
      mt: 3,
      p: 2,
      boxShadow: 1
    }}>
      <Typography fontWeight='bold'>Investors</Typography>
      {investors.length > 1 ? (
        <ul>
          {investors.map((addr) => (
            <li key={`investor-${addr}`}>{addr}</li>
          ))}
        </ul>
      ) : (
        <Typography>No investors yet</Typography>
      )}
    </Box>
  )
}

export default Investors