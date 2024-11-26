import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/components/Header'
import Footer from '@/components/Footer';
import Script from 'next/script';
import { GoogleAds } from '@/components/GoogleAds';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://kidscareplus.vn'),
  title: 'Kidscareplus',
  description: 'KIDS CARE PLUS vừa bổ sung Canxi, Phospho, D3, K2 làm nguyên liệu cho quá trình tạo xương, vừa chứa thành phần CBP kích thích nguyên bào xương phát triển, nhờ ...',
  keywords: 'Oz Farm Kid\'s Care Plus',
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    locale: 'vi_VN',
    title: 'Kids Care Plus',
    url: 'https://kidscareplus.vn/',
    siteName: 'KidsCarePlus',
    type: 'website'
  },
  icons: {
    icon: [
      {
        rel: 'icon',
        url: '/favicon.ico'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Ads Conversion Tracking */}
        <GoogleAds ad_id='AW-16773984613' />

        {/* Google Analytics 4 */}
        <Script
          id="google-analytics-script"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-CGBMSFBQYF"
        />
        
        <Script id="google-analytics-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CGBMSFBQYF');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
