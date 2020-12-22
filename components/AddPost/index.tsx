import { ReactElement, FormEvent, useState } from 'react'
import { Post } from '../../lib/types'

export default function AddPost({
  author,
  onPost
}: { author: string, onPost: (post: Post) => void }): ReactElement {

  let [message, setMessage] = useState("");

  const submit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ author, message }),
    });
    const newPost = await response.json();

    onPost(newPost.post);

    setMessage("");
  };

  return (
    <form onSubmit={submit}>
      <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};
