import Link from 'next/link';
export default function Home() {
  console.log('rendered home page')
  return (
    <main>
      <div>
        Hello, Next.js!
      </div>
      <Link href="/users">Users</Link>
    </main>
  )
}
