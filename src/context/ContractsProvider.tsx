import React from 'react'
import Web3 from 'web3'

import { useWeb3React } from '@web3-react/core'

import config from '@config'
import { hooks, network } from '@components/web3/connectors/network'

interface ContractsContextProps {
  element?: any
  children?: React.ReactNode
}

export const ContractsContext = React.createContext<ContractsContextProps>(
  {} as ContractsContextProps
)

const ELEMENTS_ABI = require('@contracts/elements.json')

const {
  useChainId,
  useAccounts,
  useError,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks
const ContractsProvider: React.FC<ContractsContextProps> = ({ children }) => {
  // const { account, library } = useWeb3React()
  const provider = useProvider()
  const isActive = useIsActive()

  const [element, setElement] = React.useState(undefined)

  const initElement = async function (): Promise<any> {
    const web3 = new Web3(provider.connection.url)
    const elementContract = new web3.eth.Contract(
      ELEMENTS_ABI,
      config.contracts.elements
    )
    setElement(elementContract)
  }

  React.useEffect(() => {
    if (isActive) {
      initElement()
    }
    return null
  }, [isActive])

  const context = {
    element,
  }

  return (
    <ContractsContext.Provider value={context}>
      {children}
    </ContractsContext.Provider>
  )
}

export default ContractsProvider
