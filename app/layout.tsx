import type {Metadata} from 'next'


export const metadata: Metadata = {
  title: 'slosa\'s web',
  metadataBase: new URL('https://slosa.love'),
  description: 'I\'m slosa\'s website',
  icons: {
    icon: '/icon.webp',
  },
  openGraph: {
    title: 'slosa\'s web',
    description: 'I\'m slosa\'s website',
    type: 'website',
    images: [
      {
        url: '/icon.webp',
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
