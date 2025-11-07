import React from 'react'
import { FaRegEnvelope } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";


const Shop = ({ shop, onClose }) => {
    if (!shop) {
        return null;
    }
    return (
        <div className='fixed insert-0 z-[100] flex items-center justify-center h-full '>
        <div className='h-full w-full absolute insert-0 bg-black bg-opacity-50'> </div>
        <div className='relative z-10 max-h-[80vh] flex items-center justify-center my-5 mx-3 overflow-auto w-full'>
        <div className=' flex min-h-[#700px] overflow-auto '>
            <div className='hidden md:block lg:block'>
                <div className='rounded-l-xl px-6 py-7 grid gap-4 items-center bg-gray-800 text-white'>
                    <div className='grid gap-2'>
                        <div className='text-3xl font-bold '><p>Let's Shop Smart,</p>
                            <p> Let's Shop Together</p></div>
                        <p className='text-gray-300 w-[260px]'>Dicover deals, trends, and Products made just for you!</p>
                    </div>
                    <hr className='border-gray-600 my-5' />
                    <div className='grid gap-4 w-[260px]'>
                        <div className='flex items-center gap-2'>
                            <FaRegEnvelope size={18} className='text-[#CB593F]' />
                            <a href="mailto:bricknbar1@gmail.com">bricknbar1@gmail.com</a>
                        </div>
                        <div className='flex items-center gap-2'>
                            <IoCallOutline size={20} className='text-[#CB593F]' />
                            <a href="https://wa.me/+91(9777) 772-782">+91(9777) 772-782</a>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CiLocationOn size={25} className='text-[#CB593F]' />
                            <a href="BricnBar,Plot no-769 Kalinga Vihar, Bhubaneswar, Odisha-751019">BricnBar,Plot no-769 Kalinga Vihar, Bhubaneswar, Odisha-751019</a>
                        </div>
                    </div>
                    <hr className='border-gray-600 my-5' />
                    <div className='flex justify-between my-3 '>
                      <div className='bg-orange-600 flex items-center justify-center rounded-full w-9 h-9'><FaFacebook /></div>  
                        <FaInstagram />
                        <FaXTwitter />
                        <FaPinterestP />
                        <IoLogoYoutube />
                        <IoLogoLinkedin />

                    </div>

                </div>
            </div>
            <div className='bg-white rounded-r-xl flex  justify-center '>
                 <div className=' px-6 py-4'>
                <div className='flex items-start justify-between mb-2  md:mb-4'>
                    <p className='text-gray-700 text-sm md:text-md'>I'm interested in...</p>
                    <div className='bg-orange-600 flex items-center justify-center rounded-full  w-7 md:w-9 h-7 md:h-9'><RxCross2 color='white' onClick={onClose}/></div>
                </div>
                <ul className='grid grid-cols-3 items-center gap-2 md:gap-3 my-4'>
                    <li className='px-3 py-2 text-sm text-white rounded-lg bg-[#CB593F]'>
                        Civil Materials
                    </li>
                    <li className='px-3 py-2 md:text-sm text-xs text-gray-600 border-none bg-white shadow-lg  active:text-white rounded-lg active:bg-[#CB593F]'>
                        Bath & Santitary
                    </li>
                    <li className='px-3 py-2 md:text-sm text-xs text-gray-600 border-none bg-white shadow-lg  active:text-white rounded-lg active:bg-[#CB593F]'>
                        Tiles & Flooring
                    </li>
                    <li className='px-3 py-2 md:text-sm text-xs text-gray-600 border-none bg-white shadow-lg  active:text-white rounded-lg active:bg-[#CB593F]'>
                        Ply & Laminate
                    </li>
                    <li className='px-3 py-2 md:text-sm text-xs text-gray-600 border-none bg-white shadow-lg  active:text-white rounded-lg active:bg-[#CB593F]'>
                        Electical
                    </li>
                    <li className='px-3 py-2 md:text-sm text-xs text-gray-600 border-none bg-white shadow-lg  active:text-white rounded-lg active:bg-[#CB593F]'>
                        Paints
                    </li>
                    <li className='px-3 py-2 md:text-sm text-xs text-gray-600 border-none bg-white shadow-lg  active:text-white rounded-lg active:bg-[#CB593F]'>
                        Door & Windows
                    </li>
                    <li className='px-3 py-2 md:text-sm text-xs text-gray-600 border-none bg-white shadow-lg  active:text-white rounded-lg active:bg-[#CB593F]'>
                        Interiors
                    </li>
                    <li className='px-3 py-2 md:text-sm text-xs text-gray-600 border-none bg-white shadow-lg  active:text-white rounded-lg active:bg-[#CB593F]'>
                        Hardware
                    </li>
                </ul>
                <div className='flex flex-col  gap-3 md:gap-4 my-3 md:my-5'>
                    <input type="text" placeholder='Your name' className=' w-full px-3 md:py-2 border-0 outline-none border-b-2 placeholder:gray-400 '/>
                    <input type="text" placeholder='Phone Number' className='px-3 md:py-2 border-0 border-b-2 placeholder:gray-400 outline-none  w-full' />
                    <input type="text" placeholder='Your email'className='px-3 md:py-2 border-0 border-b-2 placeholder:gray-400 outline-none  w-full' />
                    <input type="text" placeholder='Your message'className='px-3 md:py-2 border-0 border-b-2 placeholder:gray-400 outline-none   w-full' />
                </div>
                <div className='flex justify-end md:mt-5'>
                    <button className='text-white rounded px-3 py-2 bg-[#CB593F] flex gap-3 items-center  '>   <IoIosSend  color="white " size={20} className=''/> Send Message</button>
                </div>
            </div>
            </div>
           
        </div>
    </div>
        </div>
    )
}

export default Shop