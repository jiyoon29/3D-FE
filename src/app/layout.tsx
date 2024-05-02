import Header from '@/components/common/header/Header'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import ReactQueryProvider from '@/reactQuery/Provider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReduxProviders } from '@/store/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NeuroidAsset',
  description: '3D 에셋 자산거래 서비스',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={inter.className}>
      <body>
        <ReactQueryProvider>
          <ReduxProviders>
            {children}
            <ReactQueryDevtools />
          </ReduxProviders>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
