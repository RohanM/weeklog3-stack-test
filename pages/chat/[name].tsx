import { ReactElement } from 'react'
import { useRouter } from 'next/router'

export default function Chat(): ReactElement {
  const router = useRouter();
  const { name } = router.query

  return (
    <div>
      Hello, {name}!
    </div>
  );
}
