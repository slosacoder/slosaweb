import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'slosas web',
  metadataBase: new URL('https://slosa.love'),
  description: 'Im a slosas website',
  icons: {
    icon: '/cat.webp',
  },
  openGraph: {
    title: 'slosas web',
    description: 'Im a slosas website',
    images: [
      {
        url: '/cat.webp',
        width: 1200,
        height: 630,
      }
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
