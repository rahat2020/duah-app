import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '@/components/Layouts/RootLayout'
import DuahConent from '@/components/DuahConent'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <RootLayout>
      <main>
       <DuahConent/>
      </main>
    </RootLayout>
  )
}
