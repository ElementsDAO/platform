/* eslint-disable no-nested-ternary */
import React from 'react'
import type { Web3ReactHooks } from '@web3-react/core'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Status = ({
  isActivating,
  error,
  isActive,
}: {
  isActivating: ReturnType<Web3ReactHooks['useIsActivating']>
  error: ReturnType<Web3ReactHooks['useError']>
  isActive: ReturnType<Web3ReactHooks['useIsActive']>
}) => (
  <div>
    {error ? (
      <>
        🔴 {error.name ?? 'Error'}
        {error.message ? `: ${error.message}` : null}
      </>
    ) : isActivating ? (
      <>🟡 Connecting</>
    ) : isActive ? (
      <>🟢 Connected</>
    ) : (
      <>⚪️ Disconnected</>
    )}
  </div>
)

export default Status
