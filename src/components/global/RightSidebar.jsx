import Image from 'next/image'
import React, { useState } from 'react'
import {
  Card,
  CardBody,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
} from "@material-tailwind/react";

const RightSidebar = () => {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className='h-screen ml-4'>
      <div className="flex justify-end items-end w-full text-center cursor-pointer">
        <Image src="/assets/profile.png" alt='profile' width={40} height={40} loading='lazy' />
      </div>
      <div className="">
        <Card className="mt-6 shadow-sm">
          <CardBody className='p-2'>
            <div className="flex justify-center items-center w-full text-center">
              <h6 className='font-bold text-blue-gray-900'>Settings</h6>
            </div>
            <>
              <Accordion open={open === 1}>
                <AccordionHeader onClick={() => handleOpen(1)} className='border-none'>
                  <div className="bg-custom-searchBtn-gray p-2 w-96 rounded flex justify-between items-center relative">
                    <div className="w-1 h-11 bg-custom-green absolute left-0 "></div>
                    <div className="bg-custom-blue-gray flex p-1 items-center rounded-full justify-center ">
                      <Image src="/assets/lang.png" alt="language" width={20} height={20} loading="lazy" />
                    </div>
                    <small className='text-success font-semibold text-center text-[.66em] leading '>
                      Language Settings
                    </small>
                  </div>
                </AccordionHeader>
                <AccordionBody className="py-2"> 
                  <div className="flex justify-evenly items-center">
                    <Button className='bg-custom-green text-white p-2 capitalize w-20 '>English</Button>
                    <Button className='bg-white text-gray-900 border-2 p-2 capitalize w-20'>বাংলা</Button>
                  </div>
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 2}>
                <AccordionHeader onClick={() => handleOpen(2)} className='border-none'>
                  <div className="bg-custom-searchBtn-gray p-2 w-96 rounded flex justify-between items-center relative">
                    <div className="w-1 h-11 bg-custom-green absolute left-0 "></div>
                    <div className="bg-custom-blue-gray flex p-1 items-center rounded-full justify-center ">
                      <Image src="/assets/lang.png" alt="language" width={20} height={20} loading="lazy" />
                    </div>
                    <small className='text-success font-semibold text-center text-[.66em] leading '>
                      Language Settings
                    </small>
                  </div>
                </AccordionHeader>
                <AccordionBody className="py-2"> 
                  <div className="flex justify-evenly items-center">
                    <Button className='bg-custom-green text-white p-2 capitalize w-20 '>English</Button>
                    <Button className='bg-white text-gray-900 border-2 p-2 capitalize w-20'>বাংলা</Button>
                  </div>
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 3}>
                <AccordionHeader onClick={() => handleOpen(3)} className='border-none'>
                  <div className="bg-custom-searchBtn-gray p-2 w-96 rounded flex justify-between items-center relative">
                    <div className="w-1 h-11 bg-custom-green absolute left-0 "></div>
                    <div className="bg-custom-blue-gray flex p-1 items-center rounded-full justify-center ">
                      <Image src="/assets/lang.png" alt="language" width={20} height={20} loading="lazy" />
                    </div>
                    <small className='text-success font-semibold text-center text-[.66em] leading '>
                      Language Settings
                    </small>
                  </div>
                </AccordionHeader>
                <AccordionBody className="py-2"> 
                  <div className="flex justify-evenly items-center">
                    <Button className='bg-custom-green text-white p-2 capitalize w-12'>English</Button>
                    <Button className='bg-white text-gray-900 border-2 p-2 capitalize w-12'>বাংলা</Button>
                  </div>
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 4}>
                <AccordionHeader onClick={() => handleOpen(4)} className='border-none'>
                  <div className="bg-custom-searchBtn-gray p-2 w-96 rounded flex justify-between items-center relative">
                    <div className="w-1 h-11 bg-custom-green absolute left-0 "></div>
                    <div className="bg-custom-blue-gray flex p-1 items-center rounded-full justify-center ">
                      <Image src="/assets/lang.png" alt="language" width={20} height={20} loading="lazy" />
                    </div>
                    <small className='text-success font-semibold text-center text-[.66em] leading '>
                      Language Settings
                    </small>
                  </div>
                </AccordionHeader>
                <AccordionBody className="py-2"> 
                  <div className="flex justify-evenly items-center">
                    <Button className='bg-custom-green text-white p-2 capitalize w-20 '>English</Button>
                    <Button className='bg-white text-gray-900 border-2 p-2 capitalize w-20'>বাংলা</Button>
                  </div>
                </AccordionBody>
              </Accordion>
            </>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default RightSidebar