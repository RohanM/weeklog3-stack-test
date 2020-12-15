export default function Posts({ posts }): string {
  return (
    posts.map(post => (
      <p key={post.id}>{post.title}</p>
    ))
  );
};
