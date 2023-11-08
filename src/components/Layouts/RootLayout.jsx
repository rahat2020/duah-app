import React, { useState } from 'react'
import Navbar from '../global/Navbar'
import LeftSidebar from '../global/LeftSidebar'
import RightSidebar from '../global/RightSidebar'

const RootLayout = ({ children }) => {

  return (
    <main className='w-full flex justify-between items-start h-full p-8 bg-blue-gray-50'>
      
      <nav className='w-1/12 h-full'>
        <Navbar />
      </nav>
      <aside className="w-3/12 h-full">
        <LeftSidebar />
      </aside>
      <section className="w-6/12 h-full ">
        {children}
      </section>
      <aside className="w-2/12 h-full">
        <RightSidebar />
      </aside>
    </main>
  )
}

export default RootLayout