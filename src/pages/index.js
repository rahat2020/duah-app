import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="bg-red-400 h-full">
        <h1 className='text-neutral-50'>hello world</h1>
      </div>
    </main>
  )
}
