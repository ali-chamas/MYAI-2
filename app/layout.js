import {Roboto_Flex} from 'next/font/google'
import './globals.css'
import AuthProvider from './components/auth/AuthProvider'

const inter = Roboto_Flex({ subsets: ['latin'] })

export const metadata = {
  title: 'MY AI',
  description: 'Your favourite AI partner',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
        {children}
        </AuthProvider>
        </body>
    </html>
    
  )
}
