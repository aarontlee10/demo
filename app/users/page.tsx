import Link from 'next/link'
export default function Page(): JSX.Element {
  console.log('rendered users page')
  return (
    <div>
      <ul>
        Here is a list of users
        <li>user 1</li>
        <li>user 2</li>
      </ul>
      <Link href="/">Back to Home</Link>
    </div>
  )
}