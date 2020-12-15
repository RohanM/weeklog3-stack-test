import { ReactElement } from 'react'

export default function Posts({ posts }): ReactElement {
  return (
    posts.map(post => (
      <p key={post.id}>{post.title}</p>
    ))
  );
};
