import React from 'react'

import { Box, BoxProps } from '@mui/material'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'

// import { ConnectButton } from '../web3/ConnectButton'

export const IdentityMenu: React.FC<BoxProps> = (props) => {
  // const { account } = useWeb3React<Web3Provider>()
  const { onClick } = props
  const truncateRegex = /^(0x[a-zA-Z0-9]{3})[a-zA-Z0-9]+([a-zA-Z0-9]{3})$/

  const truncateEthAddress = (addr: string): string => {
    const match = addr.match(truncateRegex)
    if (!match) return addr
    return `${match[1]}…${match[2]}`
  }
  return (
    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
      {'account' ? (
        <Box sx={{ cursor: 'pointer' }} onClick={onClick}>
          {truncateEthAddress('account')}
        </Box>
      ) : (
        // <ConnectButton />
        <p>todo</p>
      )}
    </Box>
  )
}

export default IdentityMenu
