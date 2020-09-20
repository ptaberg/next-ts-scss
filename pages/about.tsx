import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
      <Link href="/">
        <a>Go home</a>
      </Link>
  </Layout>
)

export default AboutPage
