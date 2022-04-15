import React from 'react'
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from '@iotabots/components'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import Link from 'next/link'

import Balance from '../ERC20/Balance'

import { USDT_ADDRESS } from '../../config'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const APPLICATION_ABI = require('../../contracts/applications.json')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ERC20_ABI = require('../../contracts/erc20.json')

const ApplicationDetail = ({ address }): any => {
  const { account, library, chainId } = useWeb3React()
  const [balance, setBalance] = React.useState(undefined)
  const [contract, setContract] = React.useState(undefined)
  const [usdt, setUsdt] = React.useState(undefined)
  const [investAmount, setInvestAmount] = React.useState(100)
  const [investors, setInvestors] = React.useState(undefined)
  // const [address, setAddress] = React.useState(undefined)

  const init = async function (_account, _library): Promise<any> {
    let data
    try {
      console.log('applications', data)
      const web3 = new Web3(_library.provider)
      const tempContract = new web3.eth.Contract(APPLICATION_ABI, address)
      const tempContract2 = new web3.eth.Contract(ERC20_ABI, USDT_ADDRESS)

      setUsdt(tempContract2)
      setContract(tempContract)
      try {
        data = await tempContract.methods.balance().call()
        console.log('balance', data)
        setBalance(data)
      } catch (error) {
        console.log('error balance', error)
      }

      try {
        data = await tempContract.methods.totalInvestors().call()
        console.log('totalInvestors', data)
        const dataArray = []
        for (let i = 0; i <= data; i += 1) {
          // eslint-disable-next-line no-await-in-loop
          data = await tempContract.methods.investors(i).call()
          console.log('investors', data)
          if (data === '0x0000000000000000000000000000000000000000') break
          dataArray.push(data)
        }
        console.log('investors', dataArray)
        setInvestors(dataArray)
        console.log('investors', data)
      } catch (error) {
        console.log('error balance', error)
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  const invest = async (): Promise<any> => {
    console.log('öp')

    const res = await usdt.methods
      .approve(address, investAmount)
      .send({ from: account })
    console.log('approval', res)

    const x = await contract.methods
      .invest(investAmount)
      .send({ from: account })
    console.log('öp', x)
  }
  const changeAmount = (value: number): void => {
    console.log('öp', value)
    setInvestAmount(value)
  }

  React.useEffect(() => {
    if (!!account && !!library) {
      init(account, library)
    }
    return null
  }, [account, library, chainId])
  return (
    <>
      <Typography variant='h2' align='center' color='#fff' gutterBottom>
        Application Detail
      </Typography>
      <Box>
        <Link href='/applications'>go to application list</Link>
        <p>Balance: {balance} USD</p>

        <FormControl>
          <InputLabel htmlFor='my-input'>Invest amount (USD)</InputLabel>
          <Input
            onChange={(e) => changeAmount(parseInt(e.target.value, 10))}
            id='my-input'
            type='number'
            placeholder='100'
            aria-describedby='USD'
            value={investAmount}
          />
        </FormControl>
        <Button onClick={invest}>Invest</Button>

        <Typography>Investors List</Typography>
        {investors && investors.length ? (
          <ul>
            {investors.map((addr, index) => (
              <li key={`investor-${addr}`}>{addr}</li>
            ))}
          </ul>
        ) : (
          <Typography>No Investors yes</Typography>
        )}
      </Box>
    </>
  )
}

export default ApplicationDetail
