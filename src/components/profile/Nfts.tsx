import React from 'react'
import Web3 from 'web3'

import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'

import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'

import { ELEMENTARY_NFT } from '@config'

const ELEMENTARY_NFT_ABI = require('@contracts/elementaryNft.json')

const NFTS = [
  'https://cdn.discordapp.com/attachments/420674357652750367/975211600824905778/water.gif',
  'https://cdn.discordapp.com/attachments/420674357652750367/975211114164015144/fire.gif',
  'https://cdn.discordapp.com/attachments/420674357652750367/975209078324338708/ezgif-1-2280f4ac9c.gif',
  'https://cdn.discordapp.com/attachments/420674357652750367/975211377771814973/air.gif',
]

const Nfts: React.FC = () => {
  const web3 = useWeb3React<Web3Provider>()
  const { account, library } = web3

  const init = async function (_account, _library): Promise<any> {
    const web3 = new Web3(_library.provider)
    const contract = new web3.eth.Contract(
      ELEMENTARY_NFT_ABI,
      ELEMENTARY_NFT
    )
    const waterCount = await contract.methods.balanceOf(_account, 0).call()
    const fireCount = await contract.methods.balanceOf(_account, 1).call()
    const earthCount = await contract.methods.balanceOf(_account, 2).call()
    const airCount = await contract.methods.balanceOf(_account, 3).call()
    console.log('Counts: ', waterCount, fireCount, earthCount, airCount)
  }

  React.useEffect(() => {
    if (!!account && !!library) {
      init(account, library)
    }
  }, [account, library])

  return (
    <>
      <Typography variant='h6' gutterBottom fontWeight='bold'>
        NFTs
      </Typography>
      <Grid container spacing={3}>
        {NFTS.map((nft) => (
          <Grid item xs={3}>
            <Box sx={{
              width: '100%',
              height: 200,
              backgroundImage: `url(${nft})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              borderRadius: '8px',
              boxShadow: 1
            }} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Nfts