import { ReactElement, useState } from 'react'

import Head from 'next/head'
import styles from '../styles/Home.module.css'

import EnterName from '../components/EnterName'

export default function Home(): ReactElement {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Chat
        </h1>

        <EnterName />
      </main>
    </div>
  )
}
