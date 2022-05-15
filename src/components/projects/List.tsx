import React from 'react'

import { Box, List as MuiList, Typography } from '@mui/material'

import { ContractsContext } from '@context/ContractsProvider'
import ListItem from './ListItem'

const List = ({ count }): any => {
  const { element } = React.useContext(ContractsContext)
  const [applications, setApplications] = React.useState([])

  const queryProjectAddresses = async function (): Promise<any> {
    let data
    const dataArray = []
    try {
      for (let i = 0; i < count; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        data = await element.methods.applications(i).call()
        dataArray.push(data)
      }
      setApplications(dataArray)
    } catch (error) {
      console.log('error', error)
    }
  }

  React.useEffect(() => {
    queryProjectAddresses()
  }, [])

  return (
    <Box>
      <MuiList>
        {applications.map((addr) => (
          <ListItem address={addr} />
        ))}
      </MuiList>
      <Typography mt={1}>
        <strong>Entries:</strong> {count}
      </Typography>
    </Box>
  )
}

export default List
