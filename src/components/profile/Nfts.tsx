import React from 'react'
import Web3 from 'web3'

import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { useRouter } from 'next/router'

import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'

import config from '@config'
import Button from '@components/button'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ELEMENTARY_NFT_ABI = require('@contracts/elementaryNft.json')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const VELE_NFT_ABI = require('@contracts/vele.json')

const NFTS = [
  'https://cdn.discordapp.com/attachments/420674357652750367/975211600824905778/water.gif',
  'https://cdn.discordapp.com/attachments/420674357652750367/975211114164015144/fire.gif',
  'https://cdn.discordapp.com/attachments/420674357652750367/975209078324338708/ezgif-1-2280f4ac9c.gif',
  'https://cdn.discordapp.com/attachments/420674357652750367/975211377771814973/air.gif',
]

const Nfts: React.FC = () => {
  const context = useWeb3React<Web3Provider>()
  const { account, library } = context
  const [vele, setVele] = React.useState([])
  const [veleContract, setVeleContract] = React.useState(undefined)
  const router = useRouter()

  const init = async function (_account, _library): Promise<any> {
    const web3 = new Web3(_library.provider)
    const contract = new web3.eth.Contract(
      ELEMENTARY_NFT_ABI,
      config.contracts.elementary
    )
    const tempVeleContract = new web3.eth.Contract(
      VELE_NFT_ABI,
      config.contracts.vele
    )

    setVeleContract(tempVeleContract)
    const data = await tempVeleContract.methods.walletOfOwner(_account).call()
    setVele(data)
    console.log('data', data)
    const waterCount = await contract.methods.balanceOf(_account, 0).call()
    const fireCount = await contract.methods.balanceOf(_account, 1).call()
    const earthCount = await contract.methods.balanceOf(_account, 2).call()
    const airCount = await contract.methods.balanceOf(_account, 3).call()
    console.log('Counts: ', waterCount, fireCount, earthCount, airCount)
  }

  const buy = async (): Promise<any> => {
    console.log('buy')
    const data = await veleContract.methods
      .mint(account)
      .send({ from: account })
    console.log('data', data)
    router.reload()
  }

  React.useEffect(() => {
    if (!!account && !!library) {
      init(account, library)
    }
  }, [account, library])

  return (
    <>
      <Typography variant='h5' gutterBottom fontWeight='bold'>
        NFTs
      </Typography>
      <hr />
      <Typography variant='h6' gutterBottom fontWeight='bold'>
        Void Element NFT
      </Typography>
      <Button onClick={buy}>Buy Void Element NFT</Button>
      {vele.length > 0 ? (
        <Grid container spacing={3}>
          {vele.map((nft) => (
            <Grid item xs={3}>
              <Box
                sx={{
                  width: '100%',
                  height: 200,
                  backgroundImage: `url(https://images.pexels.com/photos/7130548/pexels-photo-7130548.jpeg?cs=srgb&dl=pexels-gradienta-7130548.jpg&fm=jpg)`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  borderRadius: '8px',
                  boxShadow: 1,
                }}
              >
                <Typography variant='h6' gutterBottom fontWeight='bold'>
                  {nft}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant='body1' gutterBottom fontWeight='bold'>
          You dont any Void Element NFT
        </Typography>
      )}
      <Typography variant='h6' gutterBottom fontWeight='bold'>
        Elements
      </Typography>
      <Grid container spacing={3}>
        {NFTS.map((nft) => (
          <Grid item xs={3}>
            <Box
              sx={{
                width: '100%',
                height: 200,
                backgroundImage: `url(${nft})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                borderRadius: '8px',
                boxShadow: 1,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Nfts
