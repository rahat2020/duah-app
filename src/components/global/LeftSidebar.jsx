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
import axios from 'axios';


const LeftSidebar = ({ data, singleCategoryDua }) => {
  console.log('singleCategoryDua', singleCategoryDua)

  const [open, setOpen] = useState(0);
  const toggleAccordion = (index) => {
    setOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  // fetching subcategory data

  const [catId, setCatId] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/subcategory/${catId}/${7}`);
        console.log('API data:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='h-full ml-4'>
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

          {/*  overflow scroll start here*/}
          <div className='p-2 max-h-[400px] overflow-auto'>
            <div>
              {data.map((item, index) => (
                <div key={index} className={`border-b rounded-xl text-xl p-2 ${open === index ? 'bg-custom-blue-gray' : ''}`} 
                onClick={setCatId(item?.cat_id)}>
                  <div
                    className="flex justify-between items-center p-4 cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="flex justify-start items-start">
                      <div className="bg-custom-catgoryImg-gray p-1 rounded-lg">
                        <Image src="/assets/fever.png" alt="fever" width={40} height={40} loading="lazy" />
                      </div>
                      <div className="flex justify-start items-start ms-4 flex-col">
                        <p className='text-base font-semibold text-blue-gray-800 style-inter-cat dark:text-dark-text sm:text-mss'>
                          {item?.cat_name_en}
                        </p>
                        <small className='text-gray-500 text-xs mt-1 dark:text-dark-text xs:text-[11px]'>
                          Subcategory: {item?.no_of_subcat}
                        </small>
                      </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                      <p className='text-sm text-blue-gray-800 font-semibold'>{item?.no_of_dua}</p>
                      <span className='text-sm text-gray-500 font-medium dark:text-dark-text xs:text-[11px]'>Duas</span>
                    </div>
                  </div>
                  {open === index && (
                    <div className=" ml-5 border-l-2 border-dotted my-2 border-success">
                      <div className="flex border-dotted flex-col justify-start items-start gap-y-2 ml-3 ">
                        <div className="flex flex-row my-2">
                          <div className="bg-custom-green -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5"></div>
                          <div className="flex flex-col justify-start items-start">
                            <p className='text-[.88rem] text-blue-gray-800 cursor-pointer font-semibold text-left dark:text-dark-text xs:text-2xs '>
                              Those whose duas are accepted
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/*  overflow scroll ends here*/}
        </div>
      </div>

    </div>
  )
}

export default LeftSidebar

