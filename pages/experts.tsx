import { Web3Provider } from '@ethersproject/providers'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Section,
  SectionHeader,
  Typography,
} from '@iotabots/components'
import { useWeb3React } from '@web3-react/core'
import * as React from 'react'
import { useRouter } from 'next/router'
import Layout, { siteTitle } from '../components/layout'

const Experts: React.FC = (props: any) => {
  const [bots, setBots] = React.useState<Array<any>>([])
  const context = useWeb3React<Web3Provider>()
  const router = useRouter()
  const { account, active } = context

  const experts = [
    {
      firstName: 'John',
      lastName: 'Petterson',
      description: 'Renewable Energy Policy and Electricity Market Design',
      address: '',
    },
    {
      firstName: 'Wisteria',
      lastName: 'Ravenclaw',
      description: 'Renewable Energy Project Development and Finance',
      address: '',
    },
    {
      firstName: 'Norman',
      lastName: 'Gordon',
      description: 'Sustainable Energy Policy Design and Laws',
      address: '',
    },
    {
      firstName: 'Ursula',
      lastName: 'Gurnmeister',
      description: 'Climate Finance, Emission Trading',
      address: '',
    },
    {
      firstName: 'Niles',
      lastName: 'Peppertrout',
      description: 'Renewable Energy Policies and Regulations',
      address: '',
    },
    {
      firstName: 'Douglas',
      lastName: 'Lyphe',
      description: 'Energy Economics, Energy Policy, Governance',
      address: '',
    },
  ]

  React.useEffect(() => {
    if (!active || !account) {
      setBots([])
    }
  }, [account, active])

  return (
    <Layout home>
      <Section>
        <SectionHeader
          title='Experts'
          subtitle='Experts in renewable energy.'
        />
        <Container>
          <Grid container>
            {experts.map(({ firstName, lastName, description, address }) => (
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ maxWidth: 200, minHeight: 300 }}>
                  <CardContent>
                    <Typography gutterBottom variant='h5'>
                      {`${lastName}, ${firstName}`}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small'>Share</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>
    </Layout>
  )
}

export default Experts
