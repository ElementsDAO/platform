import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'

import config from '@config'
import CoverImage from './CoverImage'
import Content from './Content'
import Invest from './Invest'
import Investors from './Investors'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const APPLICATION_ABI = require('@contracts/applications.json')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ERC20_ABI = require('@contracts/erc20.json')

const DemoApplication = {
  name: 'First awesome demo project',
  description: 'Lorem ipsum dolor sit amet',
  cover:
    'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
}

const Detail = ({ address }): any => {
  const { account, library, chainId } = useWeb3React()

  const [contract, setContract] = React.useState(undefined)
  const [balance, setBalance] = React.useState(undefined)
  const [usdt, setUsdt] = React.useState(undefined)

  const [amount, setAmount] = React.useState(undefined)
  const [investAmount, setInvestAmount] = React.useState(10)

  const [investors, setInvestors] = React.useState(undefined)

  const [application, setApplication] = React.useState(DemoApplication)

  const init = async function (_account, _library): Promise<any> {
    let data
    try {
      const web3 = new Web3(_library.provider)
      const tempContract = new web3.eth.Contract(APPLICATION_ABI, address)
      const tempContract2 = new web3.eth.Contract(
        ERC20_ABI,
        config.contracts.ustd
      )

      setUsdt(tempContract2)
      setContract(tempContract)
      try {
        data = await tempContract.methods.balance().call()
        setBalance(data)
        data = await tempContract.methods.amount().call()
        setAmount(data)
      } catch (error) {
        console.log('error balance', error)
      }

      try {
        data = await tempContract.methods.baseURI().call()
        try {
          fetch(data)
            .then((response) => response.json())
            .then((res) => {
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
        const dataArray = []
        for (let i = 0; i <= data; i += 1) {
          // eslint-disable-next-line no-await-in-loop
          data = await tempContract.methods.investors(i).call()
          if (data === '0x0000000000000000000000000000000000000000') break
          dataArray.push(data)
        }
        setInvestors(dataArray)
      } catch (error) {
        console.log('error balance', error)
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  const onSubmitInvest = async (): Promise<any> => {
    const web3 = new Web3(library.provider)
    const correctTnvestAmount = web3.utils.toBN(investAmount * 10 ** 18)

    await usdt.methods
      .approve(address, correctTnvestAmount)
      .send({ from: account })

    await contract.methods.invest(correctTnvestAmount).send({ from: account })
  }

  React.useEffect(() => {
    if (!!account && !!library) {
      init(account, library)
    }
    return null
  }, [account, library, chainId])

  return (
    <Box>
      <CoverImage image={DemoApplication.cover} />
      <Container maxWidth='md'>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Content
              name={application.name}
              description={application.description}
            />
          </Grid>
          <Grid item xs={4}>
            <Invest
              amount={amount}
              balance={balance}
              investAmount={investAmount}
              setInvestAmount={setInvestAmount}
              onSubmit={onSubmitInvest}
            />
            <Investors investors={investors} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Detail
