'use client'

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
 
export function Control() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  return (
    <ul>
      <li><Link href="/create">Create</Link></li>
      {id?<>
        <li><Link href={`/update/${id}`}>Update</Link></li>
        <li><button type="button" onClick={async () => {
          const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${id}`, {
            method: 'DELETE'
          });
          await resp.json();
          router.push(`/`);
          router.refresh();
        }}>Delete</button></li>
      </>: null}
    </ul>
  );
}
