import { Web3Provider } from '@ethersproject/providers'
import { Container, Grid } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import * as React from 'react'
import { useRouter } from 'next/router'
import { SectionHeader } from '../components/SectionHeader'
import { Section } from '../components/Section'
import Layout from '../components/layout'

const Profile: React.FC = (props: any) => {
  const [bots, setBots] = React.useState<Array<any>>([])
  const context = useWeb3React<Web3Provider>()
  const router = useRouter()
  const { account, active } = context
  const { addresses } = props

  React.useEffect(() => {
    if (!active || !addresses?.length) {
      setBots([])
      return
    }

    // Filter bot-ids for the active address
    const iotabots = (addresses || [])
      .filter((obj) => obj?.address === account)
      .map((obj) => obj.id)
    setBots(iotabots)
  }, [account, active, addresses])

  return (
    <Layout home>
      <Section>
        <SectionHeader
          title='Profile'
          subtitle='Here at your profile we will show all your NFTs from different collections.'
        />
        <Container maxWidth='md'>
          <Grid container spacing={6}>
            <Grid item xs={12} md={8}>
              {addresses}
            </Grid>
          </Grid>
        </Container>
      </Section>
    </Layout>
  )
}

export default Profile
