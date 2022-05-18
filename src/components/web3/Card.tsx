import React from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Card = ({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '20rem',
      padding: '1rem',
      margin: '1rem',
      overflow: 'auto',
      border: '1px solid',
      borderRadius: '1rem',
    }}
  >
    {children}
  </div>
)
