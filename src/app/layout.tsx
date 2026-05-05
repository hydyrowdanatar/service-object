import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/shared/CookieBanner'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Contact, Phone, Email Verification | Data Quality Services',
    description: 'With our suite of data verification APIs for phone, email, address and more, you can keep your business database clean, accurate, and up to date.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        </body>
        </html>
    )
}