import React from 'react'
import Web3 from 'web3'

import { Box, List } from '@mui/material'
import { useWeb3React } from '@web3-react/core'

import ProposalListItem from './ProposalListItem'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const GOV_ABI = require('@contracts/applications.json')

const ProposalList = ({ contract, count }): any => {
  const [proposals, setProposals] = React.useState([])

  const init = async function (_account, _library): Promise<any> {
    let data
    const dataArray = []
    try {
      for (let i = 0; i < count; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        data = await contract.methods.proposals(i).call()
        console.log('proposal', data)
        const obj = {
          description: data.description,
          numVotes: data.numVotes,
          id: i,
        }
        dataArray.push(obj)
      }
      console.log('proposals', data)
      setProposals(dataArray)
      const web3 = new Web3(_library.provider)
      const tempContract = new web3.eth.Contract(GOV_ABI, data)
    } catch (error) {
      console.log('error', error)
    }
  }

  // React.useEffect(() => {
  //   if (!!account && !!library) {
  //     init(account, library)
  //   }
  //   return null
  // }, [account, library, chainId, contract, count])
  const createApplication = async (): Promise<any> => {
    console.log('TODO: Add metamask provider')
    // const x = await contract.methods
    //   .createApplication(1337)
    //   .send({ from: account })
    // console.log('öp', x)
  }
  const changeAmount = (value: number): void => {
    console.log('öp', value)
  }
  return (
    <Box>
      <p>Entries: {count}</p>

      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {proposals.map((proposal, index) => (
          <ProposalListItem contract={contract} proposal={proposal} />
        ))}
      </List>
    </Box>
  )
}

export default ProposalList
