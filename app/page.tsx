'use client'

import { useSession, signIn, signOut } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <p>Loading session...</p>
  }

  return (
    <main style={{ padding: 20 }}>
      {!session ? (
        <>
          <h1>You are not signed in</h1>
          <button onClick={() => signIn('google')}>Sign in with Google</button>
        </>
      ) : (
        <>
          <h1>Signed in as {session.user?.email}</h1>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </main>
  )
}
