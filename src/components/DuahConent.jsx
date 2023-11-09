import { Input } from '@material-tailwind/react'
import React, { useContext, useEffect, useState } from 'react'
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
import axios from 'axios';
import { DuaContext } from '@/Context/Context';

const DuahConent = ({ staticData, dynamicData }) => {
    // console.log('staticData,dynamicData', staticData, dynamicData)
    const [open, setOpen] = useState(false)
    const [clientSideData, setClientSideData] = useState([]);
    const { duas } = useContext(DuaContext)
    console.log('duas', duas)

    // const catId = localStorage.getItem('catId') 
    // const catId = typeof window !== "undefined" ? window.localStorage.getItem('catId') || '' : false;
    // console.log('catId from dua', catId)
    console.log('clientSideData', clientSideData)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/category/${duas}`);
                console.log('response', response)
                setClientSideData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [duas]);



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

            <div className="max-h-[29rem] overflow-auto">
                {
                    clientSideData?.map((item, index) => (
                        <Card className="mt-4 w-full shadow-none" key={index}>
                            <CardBody>
                                <div className="flex flex-row justify-start items-center ">
                                    <Image src="/assets/allah.png" alt="allah" width={25} height={25} loading="lazy" className='object-contain' />
                                    <small className='text-success font-semibold ms-3'>{item?.dua_name_en}</small>
                                </div>
                                <div className="w-full">
                                    <p className=" text-[.90rem] font-semibold dark:text-[#e4e4e4] mt-5 text-justify leading-8">
                                        {item?.top_en ? item?.top_en : 'N/A'}
                                    </p>
                                    <p className='dark:text-[#e4e4e4] my-4 text-right leading-loose text-3xl font-bold'
                                        style={{ "word-spacing": "8px", "fontSize": "1.3rem", "fontFamily": "me_quran" }}>
                                        {item?.dua_indopak}
                                    </p>
                                    <p className='text-gray-700 my-1 text-justify leading-6 italic' style={{ fontSize: '.89em' }}>
                                        <strong className='me-2 font-extrabold text-blue-gray-800'>Transliteration:</strong>
                                        <span className='font-semibold'> {item?.transliteration_en}</span>
                                    </p>
                                    <p className='dark:text-[#252525] text-justify leading-6' style={{ fontSize: '.89em' }}>
                                        <span className='me-2 font-extrabold text-blue-gray-800'>Translation:</span>
                                        <span className='font-semibold'>{item?.translation_en}</span>
                                    </p>
                                    <div className="flex flex-col justify-start item-start mt-2">
                                        <p className='text-success text-sm font-bold'>Reference:</p>
                                        <span className='text-gray-700 text-sm font-bold'>{item?.refference_en}</span>
                                    </div>
                                </div>
                            </CardBody>
                            <CardFooter className="p-4">
                                <div className="flex justify-between items-center w-full">
                                    <div className="w-10 h-10 rounded-full bg-custom-green flex justify-center items-center cursor-pointer"
                                        onClick={() => setOpen(!false)}>
                                        {
                                            open === true ?
                                                <div className="w-10 ">
                                                    <audio controls autoplay>
                                                        <source src={item?.audio} type="audio/mp3" />
                                                    </audio>
                                                </div>
                                                :
                                                <PlayArrowIcon className='text-white' />
                                        }
                                    </div>
                                    <div className=" w-64 flex items-center flex-row justify-between gap-x-8 xs:gap-x-6">
                                        <div className="relative w-6 h-6 flex justify-center items-center">
                                            <Image src="/assets/copy.png" alt="icons" width={15} height={10} className='object-cover cursor-pointer' />
                                        </div>
                                        <div className="relative w-6 h-6 flex justify-center items-center">
                                            <Image src="/assets/save.png" alt="icons" width={15} height={10} className='object-cover cursor-pointer' />
                                        </div>
                                        <div className="relative w-6 h-6 flex justify-center items-center">
                                            <Image src="/assets/light.png" alt="icons" width={15} height={10} className='object-cover cursor-pointer' />
                                        </div>
                                        <div className="relative w-6 h-6 flex justify-center items-center">
                                            <Image src="/assets/share.png" alt="icons" width={15} height={10} className='object-cover cursor-pointer' />
                                        </div>
                                        <div className="relative w-6 h-6 flex justify-center items-center">
                                            <Image src="/assets/report.png" alt="icons" width={15} height={10} className='object-cover cursor-pointer' />
                                        </div>
                                    </div>

                                </div>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default DuahConent


// export const getStaticPaths = async () => {
//     const paths = await fetchDynamicPaths();

//     return {
//       paths,
//       fallback: true,
//     };
//   };

export const getStaticProps = async ({ params }) => {
    const staticData = await fetchStaticData();
    return {
        props: {
            // staticData,
            dynamicData: params.slug,
        },
    };
};