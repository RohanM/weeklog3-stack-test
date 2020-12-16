import { useState } from 'react'

import Head from 'next/head'
import { GetServerSideProps } from 'next'
import styles from '../styles/Home.module.css'

import Posts from '../components/Posts'
import AddPost from '../components/AddPost'

import { PrismaClient } from '@prisma/client'

export default function Home({ posts: initialPosts }) {
  let [posts, setPosts] = useState(initialPosts);

  const onPost = (post) => {
    setPosts(posts.concat(post));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Posts posts={posts} />
        <AddPost onPost={onPost} />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const prisma = new PrismaClient();
  const posts = (await prisma.post.findMany()).map(
    post => ({ ...post, createdAt: post.createdAt.toString() })
  );

  return {
    props: { posts }
  };
}
