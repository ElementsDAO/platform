import React from 'react'
import {
  Box,
  Button,
  Container,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import Link from 'next/link'

import { USDT_ADDRESS } from '../../../config'
import Base from '../../layouts/Base'

const APPLICATION_ABI = require('../../../src/contracts/applications.json')
const ERC20_ABI = require('../../../src/contracts/erc20.json')

const Detail = ({ address }): any => {
  const { account, library, chainId } = useWeb3React()
  const [balance, setBalance] = React.useState(undefined)
  const [contract, setContract] = React.useState(undefined)
  const [usdt, setUsdt] = React.useState(undefined)
  const [amount, setAmount] = React.useState(undefined)
  const [investAmount, setInvestAmount] = React.useState(10)
  const [investors, setInvestors] = React.useState(undefined)
  // const [address, setAddress] = React.useState(undefined)

  const DemoApplication = {
    name: 'Demo',
    description: 'Demo',
  }

  const [application, setApplication] = React.useState(DemoApplication)

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
        data = await tempContract.methods.amount().call()
        console.log('amount', data)
        setAmount(data)
      } catch (error) {
        console.log('error balance', error)
      }

      try {
        data = await tempContract.methods.baseURI().call()
        console.log('uri', data)
        try {
          fetch(data)
            .then((response) => response.json())
            .then((res) => {
              console.log('res', res)
              setApplication(res)
            })
        } catch (error) {
          console.log('error uri', error)
        }
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
    const web3 = new Web3(library.provider)
    const correctTnvestAmount = web3.utils.toBN(investAmount * 10 ** 18) // investAmount * 10000000000
    console.log('correctTnvestAmount', correctTnvestAmount)

    const res = await usdt.methods
      .approve(address, correctTnvestAmount)
      .send({ from: account })
    console.log('approval', res)

    const x = await contract.methods
      .invest(correctTnvestAmount)
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
    <Container maxWidth='md'>
      <Link href='/applications'>Back to projects</Link>
      <Typography fontWeight='bold' variant='h2'>
        {application.name}
      </Typography>

      <Typography variant='body2' color='text.primary'>
        {application.description}
      </Typography>
      <Box>
        <p>Investment goal: {amount} USD</p>
        <p>Current: {balance / 10 ** 18} USD</p>
        <Typography variant='h5' color='#fff' gutterBottom>
          Invest now!
        </Typography>
        <FormControl>
          <InputLabel htmlFor='my-input'>Invest amount (USD)</InputLabel>
          <Input
            onChange={(e) => changeAmount(parseInt(e.target.value, 10))}
            id='my-input'
            type='number'
            placeholder='10'
            aria-describedby='USD'
            value={investAmount}
          />
        </FormControl>
        <Button onClick={invest}>Invest</Button>
        <Typography>
          Note: You can get some USDT Test Tokens{' '}
          <a
            href='https://testnet.binance.org/faucet-smart'
            target='_blank'
            rel='noreferrer'
          >
            here
          </a>
        </Typography>
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
    </Container>
  )
}

export default Detail
