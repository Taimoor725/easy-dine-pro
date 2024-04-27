import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const Jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'EasyDine',
  description: 'Smart Restraunts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Jakarta.className}>{children}
      <ToastContainer/>
      </body>
    </html>
  )
}
