import { Inter } from 'next/font/google'
import RootLayout from '@/components/Layouts/RootLayout'
import DuahConent from '@/components/DuahConent'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data, subCat, duas,}) {
  // console.log('subCat',subCat)
  // console.log('duas',duas)
  // console.log('inde-page-cat',data)
  // console.log('singleCategoryDua',singleCategoryDua)
  return (
    <RootLayout data={data}>
      <main>
       <DuahConent/>
      </main>
    </RootLayout>
  )
}

export const getStaticProps = async () => {
  // storage
  // const catId = typeof window !== "undefined" ? window.localStorage.getItem('catId') || '' : false;
  // console.log('catId from index',catId)
  // FETCHING API'S
  const res = await fetch('http://localhost:5000/category')
  // const singleCategory = await fetch(`http://localhost:5000/category/4`)
  // const singleCategory = await fetch(`http://localhost:5000/category/${catId}`)
  const subRes = await fetch('http://localhost:5000/subcategory')
  const duah = await fetch('http://localhost:5000/duas')
  // API CONVERTING TOT THE JSON
  const data = await res.json()
  // const singleCategoryDua = await singleCategory.json()
  const subCat = await subRes.json()
  const duas = await duah.json()

  return {
    props: { data,subCat, duas }
  }
}
