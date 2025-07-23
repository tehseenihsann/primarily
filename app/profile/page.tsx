'use client'

import { useSession, signIn } from 'next-auth/react'
import { useEffect } from 'react'

export default function Profile() {
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === 'unauthenticated') {
      signIn()
    }
  }, [status])

  if (status === 'loading') return <p>Loading...</p>
  if (!session) return <p>Redirecting to sign in...</p>

  return (
    <main style={{ padding: 20 }}>
      <h1>Profile</h1>
      <p>Email: {session.user?.email}</p>
      <p>Name: {session.user?.name}</p>
    </main>
  )
}
