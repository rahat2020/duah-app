import React, { useState } from 'react'
import { Button } from "@material-tailwind/react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Input
} from "@material-tailwind/react";
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const LeftSidebar = () => {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className='h-screen ml-4'>
      <div className=" flex flex-col justify-start items-start">
        <div className="flex justify-start items-start text-left">
          <h2 className='text-base py-4 text-blue-gray-800 font-bold text-left'>Duas Page</h2>
        </div>

        <div className="bg-gray-50 rounded-xl">
          <div className="flex justify-center items-center bg-custom-green p-4 rounded-t-xl">
            <span className='text-white font-400 text-center'>Categories</span>
          </div>
          <div className="hidden items-center gap-x-2 lg:flex p-2 bg-white">
            <div className="relative flex justify-center items-center text-center w-full gap-6 md:w-max shadow rounded-lg">
              <Input
                type="search"
                placeholder="Search Categories"
                containerProps={{
                  className: "min-w-[288px]",
                }}
                className=" !border-t-blue-gray-200 border-gray-200 border-1 pl-9 rounded-lg placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <div className="!absolute left-3 top-[13px] flex justify-center items-center">
                <SearchIcon className='text-gray-500 text-xl' />
              </div>
            </div>
          </div>
          <div className='p-2'>
            <Accordion open={open === 1}>
              <AccordionHeader onClick={() => handleOpen(1)} className='rounded-xl text-xl p-2 bg-custom-blue-gray'>
                <div className="flex justify-start items-start">
                  <div className="bg-custom-catgoryImg-gray p-1 rounded-lg">
                    <Image src="/assets/fever.png" alt="fever" width={40} height={40} loading="lazy" />
                  </div>
                  <div className="flex justify-start items-start ms-4 flex-col">
                    <p className='text-base style-kalpurush text-blue-gray-900 style-inter-cat dark:text-dark-text sm:text-mss'>Dua's Importance</p>
                    <small className='text-gray-500 text-xs mt-1 dark:text-dark-text xs:text-[11px]'>Subcategory: 7 </small>
                  </div>
                </div>
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at. We&apos;re constantly
              </AccordionBody>
            </Accordion>
          </div>



        </div>
      </div>

    </div>
  )
}

export default LeftSidebar