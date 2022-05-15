import React from 'react'
import { useRouter } from 'next/router'
import Detail from '../../src/components/projects/Detail'
import Base from '../../src/layouts/Base'

const Project = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <Base>
      <Detail address={slug} />
    </Base>
  )
}

export default Project