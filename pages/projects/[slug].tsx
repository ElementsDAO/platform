import React from 'react'
import { useRouter } from 'next/router'

import Detail from '@components/projects/Detail'
import Base from '@layouts/Base'

const Project = (): any => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <Base sx={{ pt: '64px' }}>
      <Detail address={slug} />
    </Base>
  )
}

export default Project
