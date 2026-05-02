import { Space_Grotesk, Space_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
})

export const metadata = {
  title: 'Gopal Awasthi | Software Engineer',
  description: 'Aspiring Software Engineer | Java Developer | Problem Solver',
  keywords: 'Gopal Awasthi, Software Engineer, Java Developer, Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body className="bg-gray-950 text-white font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
