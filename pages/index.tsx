import * as React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";

import { ELEMENT_ADDRESS } from "../config";

const ELEMENT_ABI = require("../contracts/element.json");

export default function Home({ allPostsData }) {
  const { account, library, chainId } = useWeb3React();
  const [elementContract, setElementContract] = React.useState(undefined);

  const init = async function (_account, _library) {
    const web3 = new Web3(_library.provider);
    const _gameDuelContract = new web3.eth.Contract(
      ELEMENT_ABI,
      ELEMENT_ADDRESS
    );
    setElementContract(_gameDuelContract);
    let data;

    try {
      data = await _gameDuelContract.methods.applications_count().call();
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
    }
  };

  React.useEffect(() => {
    if (!!account && !!library) {
      init(account, library);
    }
    return null;
  }, [account, library, chainId]);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Incentivised crowd investment platform for renewable energy</p>
        <p>[Alpha Version 0.1]</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
