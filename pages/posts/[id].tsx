import React from 'react'
import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'

const Post = ({ postData }): any => (
  <Layout home>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <article>
      <h1 >{postData.title}</h1>
      <div>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  </Layout>
)

export const getStaticPaths = async (): Promise<any> => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }): Promise<any> => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}

export default Post
