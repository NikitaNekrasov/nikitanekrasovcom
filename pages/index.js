import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nikita Nekrasov [Full&#xb2; Stack Developer]</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤖</text></svg>" />
      </Head>

      <main>
        <Header title="You have reached the voice mailbox of " linkto="https://www.linkedin.com/in/nikitanekrasov/"/>
        <p className="description">
          <b>
            Full&#xb2; Stack Developer working on a new personal website. Currently compiling all of my best hits over the years, feel free to visit when the blog is live!
          </b>
        </p>
      </main>

      <Footer />
    </div>
  )
}
