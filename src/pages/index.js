import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '@/components/Layouts/RootLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <RootLayout>
      <main>
        <h1>welcome to homew</h1>
      </main>
    </RootLayout>
  )
}
