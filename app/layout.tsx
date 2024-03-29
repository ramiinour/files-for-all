import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Header from '@/components/layout/Header'
import { ThemeProvider } from '@/components/ThemeProvider'
const inter = Inter({ subsets: ['latin'] })
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Files For All',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <ClerkProvider>
     <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
        <Header/>
        {children}

        <Toaster/>
        </ThemeProvider>
        
        </body>
    </html>
   </ClerkProvider>
  )
}
