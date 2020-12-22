import { ReactElement } from 'react'
import { Post } from '../../lib/types'

import styles from './index.module.scss'

export default function PostList({ posts }: { posts: Post[] }): ReactElement {
  return (
    <div className={styles.posts}>
      {posts.map(post => (
        <div key={post.id} className={styles.post}><span>{post.author}:</span> {post.message}</div>
      ))}
    </div>
  );
};
