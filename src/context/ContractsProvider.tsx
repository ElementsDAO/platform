import React from 'react'
import Web3 from 'web3'

import { useWeb3React } from '@web3-react/core'

import config from '@config'

interface ContractsContextProps {
  element?: any
  children?: React.ReactNode
}

export const ContractsContext = React.createContext<ContractsContextProps>(
  {} as ContractsContextProps
)

const ELEMENTS_ABI = require('@contracts/elements.json')

const ContractsProvider: React.FC<ContractsContextProps> = ({ children }) => {
  const { account, library } = useWeb3React()

  const [element, setElement] = React.useState(undefined)

  const initElement = async function (): Promise<any> {
    const web3 = new Web3(library.provider)
    const elementContract = new web3.eth.Contract(
      ELEMENTS_ABI,
      config.contracts.elements
    )
    setElement(elementContract)
  }

  React.useEffect(() => {
    if (!!account && !!library) {
      initElement()
    }
    return null
  }, [account, library])

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
