'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update(props){
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const id = props.params.id;

  async function refresh(){
    const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${id}`);
    const topic = await resp.json();
    setTitle(topic.title);
    setBody(topic.body);
  }

  useEffect(()=>{
    refresh();
  }, []);

  return(
    <form onSubmit={async event => {
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;

      const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, body})
      });
      const topic = await resp.json();
      router.push(`/read/${topic.id}`);
      router.refresh();
    }}>
      <h2>Update</h2>
      <p><input type="text" name="title" placeholder="title" value={title}
       onChange={(e) => setTitle(e.target.value)}/></p>
      <p><textarea name="body" palceholder="body" value={body}
       onChange={(e) => setBody(e.target.value)}></textarea></p>
      <p><button type="submit">Update</button></p>
    </form>
  );
}
