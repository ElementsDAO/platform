import React from 'react'
import { Typography } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import { USDT_ADDRESS } from '../../../config'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ERC20_ABI = require('../../src/contracts/erc20.json')

const Balance = ({ address }): any => {
  const { account, library, chainId } = useWeb3React()
  const [balance, setBalance] = React.useState([])

  const init = async (_account, _library): Promise<any> => {
    console.log('Balance::address USDT', address)
    const web3 = new Web3(_library.provider)
    const contract = new web3.eth.Contract(ERC20_ABI, USDT_ADDRESS)

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
  return <Typography>Balance: {balance} USDT</Typography>
}

export default Balance
