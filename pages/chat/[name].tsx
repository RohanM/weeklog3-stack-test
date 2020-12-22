import { ReactElement, useState } from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { PrismaClient } from '@prisma/client'

import styles from '../../styles/Home.module.css'

import { Post } from '../../lib/types'

import Posts from '../../components/Posts'
import AddPost from '../../components/AddPost'

export default function Chat({ posts: initialPosts }: { posts: Post[] }): ReactElement {
  const router = useRouter();
  const { name } = router.query

  let [posts, setPosts] = useState(initialPosts);

  const onPost = (post: Post) => {
    setPosts(posts.concat(post));
  };

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

        <Posts posts={posts} />
        <AddPost author={name} onPost={onPost} />
      </main>
    </div>
  );
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
