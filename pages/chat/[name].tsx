import { ReactElement, useState } from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

import Posts from '../../lib/data/posts'

import styles from '../../styles/Home.module.css'

import { Post } from '../../lib/types'

import PostList from '../../components/PostList'
import AddPost from '../../components/AddPost'

export default function Chat({ posts: initialPosts }: { posts: Post[] }): ReactElement {
  const router = useRouter();
  const name = router.query.name as string;

  const [posts, setPosts] = useState(initialPosts);

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

        <PostList posts={posts} />
        <AddPost author={name} onPost={onPost} />
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await Posts.all();

  return {
    props: { posts }
  };
}
