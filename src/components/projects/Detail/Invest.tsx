import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

import Button from '@components/Button'

interface Props {
  amount: number
  balance: number
  investAmount: number
  setInvestAmount: (value: number) => void
  onSubmit: () => void
}

const Invest: React.FC<Props> = (props) => {
  const { amount, balance, investAmount, setInvestAmount, onSubmit } = props
  return (
    <Box sx={{
      bgcolor: 'background.paper',
      borderRadius: '8px',
      p: 2,
      boxShadow: 1
    }}>
      <Box display='flex' mb={1}>
        <Typography sx={{ mr: 1 }} fontWeight='bold'>
          Funding Goal
        </Typography>
        <Typography>{amount} USD</Typography>
      </Box>
      <Box display='flex' mb={2}>
        <Typography sx={{ mr: 1 }} fontWeight='bold'>
          Current Funding
        </Typography>
        <Typography>{balance / 10 ** 18} USD</Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        mt: 3
      }}>
        <TextField
          onChange={(e) => setInvestAmount(parseInt(e.target.value, 10))}
          id='my-input'
          label='USD'
          type='number'
          size='small'
          placeholder='10'
          aria-describedby='USD'
          value={investAmount}
        />
        <Button sx={{ ml: 2 }} onClick={onSubmit}>Invest</Button>
      </Box>
      <Typography variant='body2' color='text.secondary' mt={1}>
        <strong>Note:</strong> You can get some USDT Test Tokens{' '}
        <a
          href='https://testnet.binance.org/faucet-smart'
          target='_blank'
          rel='noreferrer'
        >
          here
        </a>
      </Typography>
    </Box>
  )
}

export default Invest