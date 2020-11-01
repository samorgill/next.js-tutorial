import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
       <p>Hi, I'm Sam. I'm a freelance web developer. You can hire me on <a href="https://twitter.com/samorgill" target="_blank">Twitter</a></p>
      </section>

      </Layout>
  )
}
