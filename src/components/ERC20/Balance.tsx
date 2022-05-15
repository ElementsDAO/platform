import React from 'react'
import Web3 from 'web3'

import { Typography } from '@mui/material'
import { useWeb3React } from '@web3-react/core'

import config from '@config'

const ERC20_ABI = require('@contracts/erc20.json')

interface Props {
  address: string
}

const Balance: React.FC<Props> = ({ address }) => {
  const { account, library, chainId } = useWeb3React()
  const [balance, setBalance] = React.useState([])

  const init = async (_account, _library): Promise<any> => {
    const web3 = new Web3(_library.provider)
    const contract = new web3.eth.Contract(ERC20_ABI, config.contracts.ustd)

    const x = await contract.methods.balanceOf(address).call()
    console.log('Balance::address USDT', x)
    setBalance(x)
  }

  React.useEffect(() => {
    if (!!account && !!library && !!address) {
      init(account, library)
    }
    return null
  }, [account, library, chainId, address])
  return (
    <Typography>
      Balance: {balance} USDT
    </Typography>
  )
}

export default Balance
