import React from 'react'
import { format, parseISO } from 'date-fns'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Date = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

export default Date
