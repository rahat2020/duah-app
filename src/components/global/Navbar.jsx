import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-white rounded-3xl px-4 dark:bg-dark-bg lg:h-[calc(100vh)] xl:h-[110vh] 2xl:h-[93vh] 3xl:h-[93vh]  pb-16">
      <div className="pt-6 mb-6 xl:mb-1 2xl:mb-1 3xl:mb-24 container flex justify-center items-center">
        <Image src="/assets/logo.png" width={60} height={60} alt="logo" loading='lazy' />
      </div>

      <div class="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
        <div className=" w-1 rounded-tl-lg rounded-bl-lg "></div>
        <div className="p-2 flex flex-row justify-center items-center">
          <div className=" bg-icon-bg dark:bg-dark-bg-dark flex p-2 rounded-full items-center justify-center">
            <Image src="/assets/home.png" width={30} height={30} alt="logo" loading='lazy'/>
          </div>
        </div>
      </div>

      <div class="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
        <div className=" w-1 rounded-tl-lg rounded-bl-lg "></div>
        <div className="p-2 flex flex-row justify-center items-center">
          <div className=" bg-icon-bg dark:bg-dark-bg-dark flex p-2 rounded-full items-center justify-center">
            <Image src="/assets/all.png" width={30} height={30} alt="logo" loading='lazy'/>
          </div>
        </div>
      </div>

      <div class="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
        <div className=" w-1 rounded-tl-lg rounded-bl-lg "></div>
        <div className="p-2 flex flex-row justify-center items-center">
          <div className=" bg-icon-bg dark:bg-dark-bg-dark flex p-2 rounded-full items-center justify-center">
            <Image src="/assets/Memorize.png" width={30} height={30} alt="logo" loading='lazy'/>
          </div>
        </div>
      </div>

      <div class="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
        <div className=" w-1 rounded-tl-lg rounded-bl-lg "></div>
        <div className="p-2 flex flex-row justify-center items-center">
          <div className=" bg-icon-bg dark:bg-dark-bg-dark flex p-2 rounded-full items-center justify-center">
            <Image src="/assets/Bookmark.png" width={30} height={30} alt="logo" loading='lazy'/>
          </div>
        </div>
      </div>

      <div class="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
        <div className=" w-1 rounded-tl-lg rounded-bl-lg "></div>
        <div className="p-2 flex flex-row justify-center items-center">
          <div className=" bg-icon-bg dark:bg-dark-bg-dark flex p-2 rounded-full items-center justify-center">
            <Image src="/assets/Ruqyah.png" width={30} height={30} alt="logo" loading='lazy'/>
          </div>
        </div>
      </div>

      <div class="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
        <div className=" w-1 rounded-tl-lg rounded-bl-lg "></div>
        <div className="p-2 flex flex-row justify-center items-center">
          <div className=" bg-icon-bg dark:bg-dark-bg-dark flex p-2 rounded-full items-center justify-center">
            <Image src="/assets/qanda.png" width={30} height={30} alt="logo" loading='lazy'/>
          </div>
        </div>
      </div>
      <div class="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
        <div className=" w-1 rounded-tl-lg rounded-bl-lg "></div>
        <div className="p-2 flex flex-row justify-center items-center">
          <div className=" bg-icon-bg dark:bg-dark-bg-dark flex p-2 rounded-full items-center justify-center">
            <Image src="/assets/book.png" width={30} height={30} alt="logo" loading='lazy'/>
          </div>
        </div>
      </div>

      <div className="pt-2 mb-10 xl:mb-16 2xl:mb-16 3xl:mb-24 container flex justify-center items-center">
        <Image src="/assets/support.png" width={60} height={60} alt="logo" loading='lazy' />
      </div>

    </div>
  )
}

export default Navbar