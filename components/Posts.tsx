import { ReactElement } from 'react'
import { Post } from '../lib/types'

export default function Posts({ posts }: { posts: Post[] }): ReactElement {
  return (
    <>
      {posts.map(post => (
        <p key={post.id}>{post.message}</p>
      ))}
    </>
  );
};
