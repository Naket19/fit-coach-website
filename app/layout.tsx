import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fit Coach - Coach Personnel IA | Programme Fitness Sur-Mesure',
  description: 'Transforme ton corps avec Fit Coach : coach personnel intelligent, programmes d\'entraînement personnalisés, suivi en temps réel. Essai gratuit 3 jours.',
  keywords: 'coach fitness, intelligence artificielle, programme musculation, entraînement personnalisé, app fitness, coach sportif',
  authors: [{ name: 'Fit Coach' }],
  creator: 'Fit Coach',
  publisher: 'Fit Coach',
  metadataBase: new URL('https://fitcoach.app'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://fitcoach.app',
    title: 'Fit Coach - Ton Coach Personnel IA',
    description: 'Des programmes d\'entraînement sur-mesure générés par IA. Disponible 24/7.',
    siteName: 'Fit Coach',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fit Coach - Application de coaching sportif IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fit Coach - Ton Coach Personnel IA',
    description: 'Des programmes d\'entraînement sur-mesure générés par IA. Disponible 24/7.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

