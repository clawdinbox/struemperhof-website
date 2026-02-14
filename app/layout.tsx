import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Strümper Hof | Tradition seit 1876',
  description: '5. Generation familiengeführtes Restaurant in Meerbusch. Regionale Küche, Wild aus eigener Jagd, Catering & Veranstaltungen.',
  keywords: 'Restaurant Meerbusch, Strümper Hof, Wildwochen, Catering, Hochzeiten, Traditionshaus',
  openGraph: {
    title: 'Strümper Hof | Tradition seit 1876',
    description: '5. Generation familiengeführtes Restaurant in Meerbusch',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  )
}