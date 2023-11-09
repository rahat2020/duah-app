// import { AuthContextProvider } from '@/Context/Context'
import { DuaCotextProvider } from '@/Context/Context'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <DuaCotextProvider>
    <Component {...pageProps} />
  </DuaCotextProvider>
}
