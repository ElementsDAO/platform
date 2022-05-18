import React, { useEffect, useState } from 'react'
import type { BigNumber } from '@ethersproject/bignumber'
import { formatEther } from '@ethersproject/units'
import type { Web3ReactHooks } from '@web3-react/core'

function useBalances(
  provider?: ReturnType<Web3ReactHooks['useProvider']>,
  accounts?: string[]
): BigNumber[] | undefined {
  const [balances, setBalances] = useState<BigNumber[] | undefined>()

  // eslint-disable-next-line consistent-return
  useEffect((): any => {
    if (provider && accounts?.length) {
      let stale = false

      // eslint-disable-next-line no-void
      void Promise.all(
        accounts.map((account) => provider.getBalance(account))
      ).then((_balances) => {
        if (stale) return
        setBalances(_balances)
      })

      return () => {
        stale = true
        setBalances(undefined)
      }
    }
  }, [provider, accounts])

  return balances
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Accounts = ({
  accounts,
  provider,
  ENSNames,
}: {
  accounts: ReturnType<Web3ReactHooks['useAccounts']>
  provider: ReturnType<Web3ReactHooks['useProvider']>
  ENSNames: ReturnType<Web3ReactHooks['useENSNames']>
}) => {
  const balances = useBalances(provider, accounts)

  if (accounts === undefined) return null

  return (
    <div>
      Accounts:{' '}
      <b>
        {accounts.length === 0
          ? 'None'
          : accounts?.map((account, i) => (
              <ul
                key={account}
                style={{
                  margin: 0,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {ENSNames?.[i] ?? account}
                {balances?.[i] ? ` (Ξ${formatEther(balances[i])})` : null}
              </ul>
            ))}
      </b>
    </div>
  )
}
