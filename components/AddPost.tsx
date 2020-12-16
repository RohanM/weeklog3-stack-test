import { ReactElement, useState } from 'react'

export default function AddPost({ onPost }): ReactElement {
  let [post, setPost] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post }),
    });
    const newPost = await response.json();

    onPost(newPost.post);
  };

  return (
    <form onSubmit={submit}>
      <input type="text" value={post} onChange={e => setPost(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};
