'use client'

import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  console.log(1111111)
  return (
    <>
      <h1>
        <button type="button" onClick={() => router.push('/about#1', { scroll: true })} >title1！</button>
      </h1>
      <h1>
        <button type="button" onClick={() => router.push('/about#2', { scroll: true })} >title2！</button>
      </h1>
      <h1>
        <button type="button" onClick={() => router.push('/about#3', { scroll: true })} >title3！</button>
      </h1>
      <h1>
        <button type="button" onClick={() => router.push('/about#4', { scroll: true })} >title4！</button>
      </h1>
      <h1>
        <button type="button" onClick={() => router.push('/niubi', { scroll: true })} >title5！</button>
      </h1>
    </>

  )
}