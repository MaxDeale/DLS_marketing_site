import './globals.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Deale Legal Systems | Document Intelligence for Law Firms',
  description: 'Enterprise document intelligence and case material processing platform for law firms. Source-grounded document classification, extraction, and retrieval.',
  keywords: 'legal tech, document intelligence, case material processing, law firm software, legal document analysis',
  authors: [{ name: 'Deale Legal Systems' }],
  openGraph: {
    title: 'Deale Legal Systems | Document Intelligence for Law Firms',
    description: 'Enterprise document intelligence and case material processing platform for law firms.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

