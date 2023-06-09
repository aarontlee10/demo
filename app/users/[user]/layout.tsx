import Link from 'next/link'
export const metadata = {
  title: 'user layout',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav><Link href="/users">Users</Link></nav>
        {children}
      </body>
    </html>
  );
}
