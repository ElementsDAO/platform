import * as React from 'react'
import Head from 'next/head'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import { Box, Button, Container, Grid, Input, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import CircularProgress from '@mui/material/CircularProgress'
import Layout from '../components/layout'
import NewProposal from '../components/Proposals/NewProposal'
import ProposalList from '../components/Proposals/ProposalList'
import AddVoter from '../components/Proposals/AddVoter'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const GOV_ABI = require('../contracts/liquidDemocracy.json')

const bytecode =
  '0x608060405234801561001057600080fd5b506112e8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063ac637c7a1161005b578063ac637c7a14610129578063c08cc02d14610145578063c7f758a814610163578063f4ab9adf1461019457610088565b80630121b93f1461008d578063013cf08b146100a95780634f24186a146100da578063a3ec138d146100f6575b600080fd5b6100a760048036038101906100a29190610cb5565b6101b0565b005b6100c360048036038101906100be9190610cb5565b610355565b6040516100d1929190610dc5565b60405180910390f35b6100f460048036038101906100ef9190610c6c565b610411565b005b610110600480360381019061010b9190610c3f565b61047e565b6040516101209493929190610e90565b60405180910390f35b610143600480360381019061013e9190610c3f565b6104bb565b005b61014d610794565b60405161015a9190610e75565b60405180910390f35b61017d60048036038101906101789190610cb5565b6107a0565b60405161018b929190610dc5565b60405180910390f35b6101ae60048036038101906101a99190610c3f565b610883565b005b6000805b60018054905081101561024f573373ffffffffffffffffffffffffffffffffffffffff16600182815481106101ec576101eb611123565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561023c576001915061024f565b80806102479061104d565b9150506101b4565b5080610290576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161028790610e15565b60405180910390fd5b60008054905082106102d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ce90610e35565b60405180910390fd5b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905082816000018190555060028160030160006101000a81548160ff0219169083600381111561034b5761034a6110c5565b5b0217905550505050565b6000818154811061036557600080fd5b906000526020600020906002020160009150905080600001805461038890610fea565b80601f01602080910402602001604051908101604052809291908181526020018280546103b490610fea565b80156104015780601f106103d657610100808354040283529160200191610401565b820191906000526020600020905b8154815290600101906020018083116103e457829003601f168201915b5050505050908060010154905082565b6000604051806040016040528083815260200160008152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001908051906020019061046e929190610b02565b5060208201518160010155505050565b60026020528060005260406000206000915090508060000154908060010154908060020154908060030160009054906101000a900460ff16905084565b6000805b60018054905081101561055a573373ffffffffffffffffffffffffffffffffffffffff16600182815481106104f7576104f6611123565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610547576001915061055a565b80806105529061104d565b9150506104bf565b508061059b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059290610e15565b60405180910390fd5b600060038111156105af576105ae6110c5565b5b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff166003811115610611576106106110c5565b5b1415610652576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064990610df5565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614158015610695575061069382336109b4565b155b6106d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106cb90610e55565b60405180910390fd5b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154816001018190555060038160030160006101000a81548160ff0219169083600381111561078a576107896110c5565b5b0217905550505050565b60008080549050905090565b606060008083815481106107b7576107b6611123565b5b9060005260206000209060020201600001600084815481106107dc576107db611123565b5b9060005260206000209060020201600101548180546107fa90610fea565b80601f016020809104026020016040519081016040528092919081815260200182805461082690610fea565b80156108735780601f1061084857610100808354040283529160200191610873565b820191906000526020600020905b81548152906001019060200180831161085657829003601f168201915b5050505050915091509150915091565b604051806080016040528060008152602001600081526020016001805490508152602001600160038111156108bb576108ba6110c5565b5b815250600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000155602082015181600101556040820151816002015560608201518160030160006101000a81548160ff02191690836003811115610946576109456110c5565b5b02179055509050506001819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60005b6003808111156109ca576109c96110c5565b5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff166003811115610a2c57610a2b6110c5565b5b1415610af7576001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015481548110610a8857610a87611123565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1692508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610af25760019050610afc565b6109b7565b600090505b92915050565b828054610b0e90610fea565b90600052602060002090601f016020900481019282610b305760008555610b77565b82601f10610b4957805160ff1916838001178555610b77565b82800160010185558215610b77579182015b82811115610b76578251825591602001919060010190610b5b565b5b509050610b849190610b88565b5090565b5b80821115610ba1576000816000905550600101610b89565b5090565b6000610bb8610bb384610efa565b610ed5565b905082815260208101848484011115610bd457610bd3611186565b5b610bdf848285610fa8565b509392505050565b600081359050610bf681611284565b92915050565b600082601f830112610c1157610c10611181565b5b8135610c21848260208601610ba5565b91505092915050565b600081359050610c398161129b565b92915050565b600060208284031215610c5557610c54611190565b5b6000610c6384828501610be7565b91505092915050565b600060208284031215610c8257610c81611190565b5b600082013567ffffffffffffffff811115610ca057610c9f61118b565b5b610cac84828501610bfc565b91505092915050565b600060208284031215610ccb57610cca611190565b5b6000610cd984828501610c2a565b91505092915050565b610ceb81610f96565b82525050565b6000610cfc82610f2b565b610d068185610f36565b9350610d16818560208601610fb7565b610d1f81611195565b840191505092915050565b6000610d37601b83610f36565b9150610d42826111a6565b602082019050919050565b6000610d5a602a83610f36565b9150610d65826111cf565b604082019050919050565b6000610d7d601383610f36565b9150610d888261121e565b602082019050919050565b6000610da0601a83610f36565b9150610dab82611247565b602082019050919050565b610dbf81610f8c565b82525050565b60006040820190508181036000830152610ddf8185610cf1565b9050610dee6020830184610db6565b9392505050565b60006020820190508181036000830152610e0e81610d2a565b9050919050565b60006020820190508181036000830152610e2e81610d4d565b9050919050565b60006020820190508181036000830152610e4e81610d70565b9050919050565b60006020820190508181036000830152610e6e81610d93565b9050919050565b6000602082019050610e8a6000830184610db6565b92915050565b6000608082019050610ea56000830187610db6565b610eb26020830186610db6565b610ebf6040830185610db6565b610ecc6060830184610ce2565b95945050505050565b6000610edf610ef0565b9050610eeb828261101c565b919050565b6000604051905090565b600067ffffffffffffffff821115610f1557610f14611152565b5b610f1e82611195565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000610f5282610f6c565b9050919050565b6000819050610f6782611270565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610fa182610f59565b9050919050565b82818337600083830152505050565b60005b83811015610fd5578082015181840152602081019050610fba565b83811115610fe4576000848401525b50505050565b6000600282049050600182168061100257607f821691505b60208210811415611016576110156110f4565b5b50919050565b61102582611195565b810181811067ffffffffffffffff8211171561104457611043611152565b5b80604052505050565b600061105882610f8c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561108b5761108a611096565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f44656c65676174696e6720746f20696e76616c696420766f7465720000000000600082015250565b7f596f7520617265206e6f742061626c6520746f20766f7465206f6e207468697360008201527f2070726f706f73616c2100000000000000000000000000000000000000000000602082015250565b7f496e76616c69642070726f706f73616c20696400000000000000000000000000600082015250565b7f466f726d696e6720612064656c65676174696f6e206379636c65000000000000600082015250565b60048110611281576112806110c5565b5b50565b61128d81610f47565b811461129857600080fd5b50565b6112a481610f8c565b81146112af57600080fd5b5056fea26469706673582212200b3b74bfee5836a4f5c0deb738b28c9c8bf4c2065750673087302d7f842f26ef64736f6c63430008070033'

const Stake = (): any => {
  const router = useRouter()
  const { query } = useRouter()

  const { account, library, chainId } = useWeb3React()
  const [contract, setContract] = React.useState(undefined)
  const [loading, setLoading] = React.useState(false)
  const [proposalCount, setProposalCount] = React.useState(0)
  const [address, setAddress] = React.useState(undefined)
  const [loadingMessage, setLoadingMessage] = React.useState('')
  const [formInput, updateFormInput] = React.useState({
    name: '',
  })
  const [searchInput, updateSearchInput] = React.useState({
    addr: '',
  })

  const init = async function (_account, _library): Promise<any> {
    const web3 = new Web3(_library.provider)

    const tempAddress = query.addr || undefined

    if (typeof tempAddress === 'string' && web3.utils.isAddress(tempAddress)) {
      setLoading(true)
      console.log('proposal detected!')
      setAddress(tempAddress)

      const tempContract = new web3.eth.Contract(GOV_ABI, tempAddress)
      setContract(tempContract)
      try {
        const data = await tempContract.methods.getProposalCount().call()

        console.log('getProposalCount:', data)
        setProposalCount(data)
        setLoading(false)
      } catch (error) {
        console.log('Error createProposal: ', error)
        setLoading(false)
      }
    }
  }

  const createContract = async (): Promise<any> => {
    console.log('öp')

    setLoadingMessage('createContract...')
    setLoading(true)
    const { name } = formInput
    // if (!name || !description || !price || !fileUrl) return
    /* first, upload to IPFS */
    const data = JSON.stringify({
      name,
    })
    console.log('öpsd')
    try {
      console.log('öpsdsd1')
      const web3 = new Web3(library.provider)
      console.log('öpsdsd2')
      const x = await new web3.eth.Contract(GOV_ABI)
        .deploy({ data: bytecode, arguments: ['First Proposal'] })
        .send({ gas: 0, from: account })

      console.log('öpsdsd3')
      console.log('createContract', x)
      console.log('Contract deployed to', x.options.address)

      setAddress(x.options.address)
      setLoading(false)
      router.push('/vote', { query: { addr: x.options.address } })
    } catch (error) {
      console.log('Error createContract: ', error)
      setLoading(false)
    }
  }
  const search = async (): Promise<any> => {
    setLoading(true)

    console.log('search: ')
    router.push('/vote', { query: searchInput })
  }

  React.useEffect(() => {
    if (!!account && !!library) {
      init(account, library)
    }
    return null
  }, [account, library, chainId, address])

  return (
    <Layout home>
      <Head>
        <title>Vote</title>
      </Head>
      <section>
        <Typography variant='h3' color='text.primary'>
          ElementsDAO
        </Typography>
        <Typography variant='h5' color='text.primary'>
          Liquid Democracy System
        </Typography>
        {address ? (
          <Container sx={{ py: 8 }} maxWidth='md'>
            <Typography variant='h6' color='text.primary'>
              Proposals
            </Typography>
            <ProposalList contract={contract} count={proposalCount} />
            <AddVoter contract={contract} />
            <NewProposal contract={contract} />
            <hr />
            <hr />
            <Button
              disabled={loading}
              variant='contained'
              onClick={() => {
                setAddress(undefined)
                router.push('/vote')
              }}
              className='font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg'
            >
              Create new Governance
            </Button>
          </Container>
        ) : (
          <Container sx={{ py: 8 }} maxWidth='md'>
            <Typography variant='h4' color='text.primary'>
              Search
            </Typography>
            <Grid
              container
              spacing={0}
              direction='row'
              alignItems='center'
              justifyContent='center'
            // style={{ minHeight: '100vh' }}
            >
              <Grid item xs={8}>
                <Typography
                  variant='body1'
                  align='center'
                  color='#fff'
                  gutterBottom
                >
                  Search for a Liquid Democracy.
                </Typography>
                <Box
                  component='form'
                  sx={{
                    '& > :not(style)': { m: 1, margin: '20px' },
                  }}
                >
                  <Input
                    disabled={loading}
                    placeholder='Address'
                    className=''
                    onChange={(e: any) =>
                      updateSearchInput({
                        ...searchInput,
                        addr: e.target.value,
                      })
                    }
                  />
                  <Box
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                  >
                    {loading ? (
                      <CircularProgress color='primary' size='5em' />
                    ) : null}

                    <Typography
                      variant='body1'
                      align='center'
                      color='#fff'
                      gutterBottom
                    >
                      {loading ? loadingMessage : ''}
                    </Typography>
                    <br />
                    <Button
                      disabled={loading}
                      variant='contained'
                      onClick={search}
                      className='font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg'
                    >
                      Search
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <br />
            <br />
            <Typography variant='h4' color='text.primary'>
              Create a new Liquid Democracy
            </Typography>
            <Grid
              container
              spacing={0}
              direction='row'
              alignItems='center'
              justifyContent='center'
            // style={{ minHeight: '100vh' }}
            >
              <Grid item xs={8}>
                <Typography
                  variant='body1'
                  align='center'
                  color='#fff'
                  gutterBottom
                >
                  Create our own Liquid Democracy where people can create and
                  vote on proposals.
                </Typography>
                <Box
                  component='form'
                  sx={{
                    '& > :not(style)': { m: 1, margin: '20px' },
                  }}
                >
                  <Input
                    disabled={loading}
                    placeholder='Name'
                    className=''
                    onChange={(e: any) =>
                      updateFormInput({ ...formInput, name: e.target.value })
                    }
                  />
                  <Box
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                  >
                    {loading ? (
                      <CircularProgress color='primary' size='5em' />
                    ) : null}

                    <Typography
                      variant='body1'
                      align='center'
                      color='#fff'
                      gutterBottom
                    >
                      {loading ? loadingMessage : ''}
                    </Typography>
                    <br />
                    <Button
                      disabled={loading}
                      variant='contained'
                      onClick={createContract}
                      className='font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg'
                    >
                      Create
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        )}
      </section>
    </Layout>
  )
}

export default Stake
