import * as React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import Base from '../src/layouts/Base'
import { experts } from '../src/data/experts'
import Button from '../src/components/Button'

const Experts: React.FC = () => {
  return (
    <Base>
      <Container maxWidth='md'>
        <Typography variant='h2' fontWeight='bold' gutterBottom>
          Experts
        </Typography>
        <Grid container spacing={3}>
          {experts.map(({ firstName, lastName, description }) => (
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', p: 1 / 2 }}>
                <CardContent>
                  <Typography gutterBottom variant='h6' fontWeight='bold'>
                    {`${lastName}, ${firstName}`}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {description}
                  </Typography>
                  <Button
                    color='secondary'
                    size='small'
                    sx={{ mt: 2 }}
                  >
                    Share
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Base>
  )
}

export default Experts
