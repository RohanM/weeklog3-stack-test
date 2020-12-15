import { ReactElement, useState } from 'react'

export default function AddPost(): ReactElement {
  let [post, setPost] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log(post);
  };

  return (
    <form onSubmit={submit}>
      <input type="text" value={post} onChange={e => setPost(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};
