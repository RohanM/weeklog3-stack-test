import { ReactElement, FormEvent, useState } from 'react'
import { useRouter } from 'next/router'

export default function EnterName(): ReactElement {
  const router = useRouter();
  let [name, setName]: [name: string, setName: (arg0: string) => void] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/chat/${name}`);
  };

  return (
    <form onSubmit={submit}>
      <input type="text" placeholder="Your name..." value={name} onChange={e => setName(e.target.value)} />
      <button type="submit">Begin</button>
    </form>
  );
}
