import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Providers } from '@/components/Providers'
import CustomCursor from '@/components/CustomCursor'
import BackgroundCursorEffects from '@/components/BackgroundCursorEffects'
import CursorTrail from '@/components/CursorTrail'
import MagneticCursor from '@/components/MagneticCursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Codriva - Digital Transformation & Custom Software Development',
    description: 'Codriva is a digital transformation and custom software development company dedicated to helping businesses scale smarter by reimagining customer experience, streamlining operations, and leveraging technology for measurable growth.',
    keywords: 'digital transformation, custom software development, UI/UX design, mobile app development, cloud solutions, data analytics, business intelligence, IoT, API integrations',
    authors: [{ name: 'Codriva Team' }],
    openGraph: {
        title: 'Codriva - Digital Transformation & Custom Software Development',
        description: 'Helping businesses scale smarter through innovation, integrity, and collaboration.',
        type: 'website',
        locale: 'en_US',
    },
    metadataBase: new URL('https://codriva.com'),
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <CustomCursor />
                    <BackgroundCursorEffects />
                    <CursorTrail />
                    <MagneticCursor />
                    <Navigation />
                    <main>{children}</main>
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
