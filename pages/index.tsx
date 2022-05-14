import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import { Alert } from '@iotabots/components'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

import { ELEMENTS_ADDRESS } from '../config'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ELEMENTS_ABI = require('../contracts/elements.json')

const Home = ({ allPostsData }): any => {
  const { account, chainId, library, error: connectError } = useWeb3React()
  const [elementContract, setElementContract] = React.useState(undefined)
  const [totalSupply, setTotalSupply] = React.useState(undefined)
  const [count, setCount] = React.useState(undefined)

  const init = async function (_account, _library): Promise<any> {
    const web3 = new Web3(_library.provider)
    const tempGameDuelContract = new web3.eth.Contract(
      ELEMENTS_ABI,
      ELEMENTS_ADDRESS
    )
    setElementContract(tempGameDuelContract)
    let data

    try {
      data = await tempGameDuelContract.methods.applications_count().call()
      console.log('data', data)
      setCount(data)
      data = await tempGameDuelContract.methods.totalSupply().call()
      console.log('totalSupply', data)
      setTotalSupply(data)
    } catch (error) {
      console.log('error', error)
    }
  }

  React.useEffect(() => {
    if (!!account && !!library) {
      init(account, library)
    }
    return null
  }, [account, library, chainId])
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {connectError && <Alert severity='error'>{connectError.message}</Alert>}
      <section className={utilStyles.headingMd}>
        <h1 className={utilStyles.heading2Xl}>Elements</h1>

        <h2>Invest in green energy!</h2>
        <p>Investment platform for renewable energy</p>
        <p>[Alpha Version 0.1]</p>
        <p>Projects count: {count}</p>
        <p>Token Supply: {totalSupply}</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <div>{title}</div>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
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
