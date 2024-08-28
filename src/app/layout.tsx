import './globals.css'

import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import { cn } from '@/lib/utils'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Richard Rodrigues',
  description: 'Portfolio of Richard Rodrigues',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen tracking-wide', rubik.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <main className="max-w-2xl mx-auto px-8 py-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
