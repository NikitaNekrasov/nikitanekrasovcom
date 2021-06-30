import { useState, useEffect } from 'react';
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ContactForm from '@components/ContactForm'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Nikita Nekrasov [Full&#xb2; Stack Developer]</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤖</text></svg>" />
      </Head>

      <main className={styles.main}>
        <Header title="the future 'about me' of" linkto="https://www.linkedin.com/in/nikitanekrasov/"/>
        <p className="description">
          Full&#xb2; Stack Developer working on a new personal website. Currently compiling all of my best hits over the years, feel free to check out the <a href="https://blog.nikitanekrasov.com">
            blog</a> or contact me below!
        </p>
        {success && (
          <p style={{ color: 'green'}}>
            Thank you for reaching out, I'll be in touch shortly!
          </p>
        )}

        {!success && (
          <ContactForm />
        )}
      </main>

      <Footer />
    </div>
  )
}
