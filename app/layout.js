import {Roboto_Flex} from 'next/font/google'
import './globals.css'
import AuthProvider from './components/auth/AuthProvider'
import {TriggerProvider} from '../app/context/triggerContext'
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
        <TriggerProvider>
        {children}
        </TriggerProvider>
        </AuthProvider>
        </body>
    </html>
    
  )
}
