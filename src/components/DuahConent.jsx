import { Input } from '@material-tailwind/react'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Image from 'next/image';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const DuahConent = () => {
    return (
        <div className='ml-4'>
            <div className=" items-end flex justify-end gap-x-2 lg:flex p-2">
                <div className="relative flex justify-center items-center text-center w-full gap-6 md:w-max shadow">

                    <Input
                        type="search"
                        placeholder="Search by Dua name"
                        containerProps={{
                            className: "min-w-[288px]",
                        }}
                        className="bg-white border-none placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />

                    <div className="!absolute right-1 top-[4px] rounded-md flex justify-center items-center bg-custom-searchBtn-gray w-10 h-8">
                        <SearchIcon className='text-gray-600 text-xl' />
                    </div>

                </div>
            </div>

            <div className="flex mb-2 flex-row bg-white rounded-lg px-3 py-2 justify-start items-center">
                <p className='text-title font-bold leading-[25px] text-sm text-gray-600'>
                    <span className='text-success text-sm leading-[25px] text-mss style-Kalpurush'>
                        Section:
                    </span> The servant is dependent on his Lord</p>
            </div>

            <div className="">
                <Card className="mt-4 w-full shadow-none">
                    <CardBody>
                        <div className="flex flex-row justify-start items-center ">
                            <Image src="/assets/allah.png" alt="allah" width={25} height={25} loading="lazy" className='object-contain' />
                            <small className='text-success font-semibold ms-3'>22. The reward of freeing the four slaves of Bani Ismail (AS)</small>
                        </div>
                        <div className="w-full">
                            <p className=" text-[.90rem] font-semibold dark:text-[#e4e4e4] mt-5 text-justify leading-8">
                                Say ten times -
                            </p>
                            <p className='dark:text-[#e4e4e4] my-4 text-right leading-loose text-3xl font-bold'
                                style={{ "word-spacing": "8px", "fontSize": "1.3rem", "fontFamily": "me_quran" }}> لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ</p>
                            <p className='text-gray-700 my-1 text-justify leading-6 italic' style={{ fontSize: '.89em' }}>
                                <strong className='me-2 font-extrabold'>Transliteration:</strong>
                                <span className='font-semibold'> Laa 'ilaaha 'illAllahu wahdahu laa shareeka lahu, lahul-mulku wa lahul-hamdu wa Huwa 'alaa kulli shay'in Qadeer</span>
                            </p>
                            <p className='dark:text-[#252525] text-justify leading-6' style={{ fontSize: '.89em' }}>
                                <span className='me-2 font-extrabold'>Translation:</span>
                                <span className='font-semibold'>None has the right to be worshipped except Allah, alone, without any partner. To Him belong all sovereignty and praise and He is over all things omnipotent.</span>
                            </p>
                            <div className="flex flex-col justify-start item-start mt-2">
                                <p className='text-success text-sm font-bold'>Reference:</p>
                                <span className='text-gray-700 text-sm font-bold'>Bukhari No: 6403; Muslim No: 2693</span>
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter className="p-4">
                        <div className="flex justify-between items-center w-full">
                            <div className="w-10 h-10 rounded-full bg-custom-green flex justify-center items-center cursor-pointer">
                                <PlayArrowIcon className='text-white' />
                            </div>
                            <div className=" w-64 flex items-center flex-row justify-between gap-x-8 xs:gap-x-6">
                                <div className="relative w-6 h-6 flex justify-center items-center">
                                    <Image src="/assets/copy.png" width={15} height={10} className='object-cover cursor-pointer' />
                                </div>
                                <div className="relative w-6 h-6 flex justify-center items-center">
                                    <Image src="/assets/save.png" width={15} height={10} className='object-cover cursor-pointer' />
                                </div>
                                <div className="relative w-6 h-6 flex justify-center items-center">
                                    <Image src="/assets/light.png" width={15} height={10} className='object-cover cursor-pointer' />
                                </div>
                                <div className="relative w-6 h-6 flex justify-center items-center">
                                    <Image src="/assets/share.png" width={15} height={10} className='object-cover cursor-pointer' />
                                </div>
                                <div className="relative w-6 h-6 flex justify-center items-center">
                                    <Image src="/assets/report.png" width={15} height={10} className='object-cover cursor-pointer' />
                                </div>
                            </div>

                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default DuahConent