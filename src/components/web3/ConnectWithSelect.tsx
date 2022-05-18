/* eslint-disable no-void */
/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
import React, { useCallback, useState } from 'react'
import type { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import type { Web3ReactHooks } from '@web3-react/core'
import { GnosisSafe } from '@web3-react/gnosis-safe'
import type { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import { WalletConnect } from '@web3-react/walletconnect'
import { CHAINS, getAddChainParameters, URLS } from './chains'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const ChainSelect = ({
  chainId,
  switchChain,
  displayDefault,
  chainIds,
}: {
  chainId: number
  switchChain: (chainId: number) => void | undefined
  displayDefault: boolean
  chainIds: number[]
}) => (
  <select
    value={chainId}
    onChange={(event) => {
      switchChain?.(Number(event.target.value))
    }}
    disabled={switchChain === undefined}
  >
    {displayDefault ? <option value={-1}>Default Chain</option> : null}
    {chainIds.map((cId) => (
      <option key={cId} value={cId}>
        {CHAINS[cId]?.name ?? cId}
      </option>
    ))}
  </select>
)
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const ConnectWithSelect = ({
  connector,
  chainId,
  isActivating,
  error,
  isActive,
}: {
  connector: MetaMask | WalletConnect | CoinbaseWallet | Network | GnosisSafe
  chainId: ReturnType<Web3ReactHooks['useChainId']>
  isActivating: ReturnType<Web3ReactHooks['useIsActivating']>
  error: ReturnType<Web3ReactHooks['useError']>
  isActive: ReturnType<Web3ReactHooks['useIsActive']>
}) => {
  const isNetwork = connector instanceof Network
  const displayDefault = !isNetwork
  const chainIds = (isNetwork ? Object.keys(URLS) : Object.keys(CHAINS)).map(
    (_chainId) => Number(_chainId)
  )

  const [desiredChainId, setDesiredChainId] = useState<number>(
    isNetwork ? 1 : -1
  )

  const switchChain = useCallback(
    async (_desiredChainId: number) => {
      setDesiredChainId(desiredChainId)
      // if we're already connected to the desired chain, return
      if (_desiredChainId === chainId) return
      // if they want to connect to the default chain and we're already connected, return
      if (_desiredChainId === -1 && chainId !== undefined) return

      if (connector instanceof WalletConnect || connector instanceof Network) {
        await connector.activate(
          _desiredChainId === -1 ? undefined : _desiredChainId
        )
      } else {
        await connector.activate(
          _desiredChainId === -1
            ? undefined
            : getAddChainParameters(_desiredChainId)
        )
      }
    },
    [connector, chainId]
  )

  if (error) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {!(connector instanceof GnosisSafe) && (
          <ChainSelect
            chainId={desiredChainId}
            switchChain={switchChain}
            displayDefault={displayDefault}
            chainIds={chainIds}
          />
        )}
        <div style={{ marginBottom: '1rem' }} />
        <button
          onClick={() =>
            connector instanceof GnosisSafe
              ? void connector.activate()
              : connector instanceof WalletConnect ||
                connector instanceof Network
              ? void connector.activate(
                  desiredChainId === -1 ? undefined : desiredChainId
                )
              : void connector.activate(
                  desiredChainId === -1
                    ? undefined
                    : getAddChainParameters(desiredChainId)
                )
          }
        >
          Try Again?
        </button>
      </div>
    )
  }
  if (isActive) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {!(connector instanceof GnosisSafe) && (
          <ChainSelect
            chainId={desiredChainId === -1 ? -1 : chainId}
            switchChain={switchChain}
            displayDefault={displayDefault}
            chainIds={chainIds}
          />
        )}
        <div style={{ marginBottom: '1rem' }} />
        <button onClick={() => void connector.deactivate()}>Disconnect</button>
      </div>
    )
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {!(connector instanceof GnosisSafe) && (
        <ChainSelect
          chainId={desiredChainId}
          switchChain={isActivating ? undefined : switchChain}
          displayDefault={displayDefault}
          chainIds={chainIds}
        />
      )}
      <div style={{ marginBottom: '1rem' }} />
      <button
        onClick={
          isActivating
            ? undefined
            : () =>
                connector instanceof GnosisSafe
                  ? // eslint-disable-next-line no-void
                    void connector.activate()
                  : connector instanceof WalletConnect ||
                    connector instanceof Network
                  ? connector.activate(
                      desiredChainId === -1 ? undefined : desiredChainId
                    )
                  : connector.activate(
                      desiredChainId === -1
                        ? undefined
                        : getAddChainParameters(desiredChainId)
                    )
        }
        disabled={isActivating}
      >
        Connect
      </button>
    </div>
  )
}
