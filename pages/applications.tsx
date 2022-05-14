import * as React from 'react'
import Head from 'next/head'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

import { ELEMENTS_ADDRESS } from '../config'

import NewApplication from '../components/Applications/NewApplication'
import ApplicationList from '../components/Applications/ApplicationList'
import ApplicationDetail from '../components/Applications/ApplicationDetail'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ELEMENTS_ABI = require('../contracts/elements.json')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const APPLICATION_ABI = require('../contracts/applications.json')

const Home = ({ allPostsData }): any => {
  const { query } = useRouter()

  const { account, library, chainId } = useWeb3React()
  const [elementContract, setElementContract] = React.useState(undefined)
  const [count, setCount] = React.useState(undefined)
  const [detail, setDetail] = React.useState(false)
  const [state, setState] = React.useState('list')

  const init = async function (_account, _library): Promise<any> {
    const web3 = new Web3(_library.provider)
    const tempGameDuelContract = new web3.eth.Contract(
      ELEMENTS_ABI,
      ELEMENTS_ADDRESS
    )
    setElementContract(tempGameDuelContract)
    let data

    const address = query.addr || undefined
    const newApplication = query.new || undefined

    if (typeof address === 'string') {
      const tempContract = new web3.eth.Contract(APPLICATION_ABI, address)
      try {
        data = await tempContract.methods.balance().call()
        console.log('balance', data)
        setDetail(true)
        setState('detail')
      } catch (error) {
        console.log('error', error)
      }
    } else if (typeof newApplication === 'string') {
      console.log('newApplication', newApplication)
      setState('new')
    } else {
      try {
        data = await tempGameDuelContract.methods.applications_count().call()
        console.log('applications_count', data)
        setCount(data)
      } catch (error) {
        console.log('error', error)
      }
    }
  }

  React.useEffect(() => {
    if (!!account && !!library) {
      console.log('query.addr', query.addr)
      init(account, library)
    }
    return null
  }, [account, library, chainId, state])

  return (
    <Layout home>
      <Head>
        <title>Applications</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {query.addr ? (
          <ApplicationDetail address={query.addr} />
        ) : (
          <div>
            {count && (
              <>
                {state === 'new' && (
                  <>
                    <Button
                      onClick={() => setState('list')}
                      // href={{ pathname: '/applications', query: { new: 'true' } }}
                    >
                      Back
                    </Button>
                    <NewApplication contract={elementContract} />
                  </>
                )}
                {state === 'list' && (
                  <>
                    <Button
                      onClick={() => setState('new')}
                      // href={{ pathname: '/applications', query: { new: 'true' } }}
                    >
                      Create new Application
                    </Button>
                    <ApplicationList contract={elementContract} count={count} />
                  </>
                )}
              </>
            )}
          </div>
        )}
      </section>
    </Layout>
  )
}

export const getStaticProps = async (): Promise<any> => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default Home
