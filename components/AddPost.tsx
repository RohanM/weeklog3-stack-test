import { ReactElement, useState } from 'react'

export default function AddPost(): ReactElement {
  let [post, setPost] = useState("");

  const submit = (e) => {
    e.preventDefault();

    fetch("/api/posts", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post }),
    });
  };

  return (
    <form onSubmit={submit}>
      <input type="text" value={post} onChange={e => setPost(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};
