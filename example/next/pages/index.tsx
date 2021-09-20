import type { NextPage } from 'next'
import Head from 'next/head'
import { Button, Input } from '@parley-hub/grace';

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Button label="Test" variant="info" onClick={() => alert('Test')} className="mb-4" />

        <Input type="text" placeholder="Username" className="mb-4" />

        <Input type="password" placeholder="1234567890" className="mb-4" />

        <Input type="text" placeholder="Search" buttonLabel="Search" />
      </main>
    </div>
  )
};

export default Home;
