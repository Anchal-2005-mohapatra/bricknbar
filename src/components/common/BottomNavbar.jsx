import React from 'react'
import logo from "../../assets/bottomNav/logo.png"
import { GiShop } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
const BottomNavbar = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* for small screen . */}
      <div className='block md:hidden lg:hidden px-5 py-2'>
        <div className='flex justify-between items-center'>
          <img src={logo} alt="" className='h-10 cursor-pointer' onClick={() => { navigate("/") }} />
          <div className='flex gap-5 cursor-pointer'>
            <GiShop  size={21} className='text-orange-700' />
            <FaShoppingCart size={21} className='text-orange-700' />
            <GiHamburgerMenu size={22} className='text-orange-700' />
          </div>
        </div>
        <div  className='relative mx-6 my-2 '>
           <input type="text" placeholder='Search anything..' className='px-3 py-2 w-full placeholder-gray-600 outline-none border-2 border-gray-100 shadow-lg rounded-lg'/>
        <FaSearch className='absolute text-gray-600 right-3 top-3 '/>
        </div>
       
      </div>


      {/* for medium screen . */}
      <div className='px-5 py-2 hidden md:block lg:hidden'>
        <div className='flex justify-between items-center'>
          <img src={logo} alt="" className='h-12 cursor-pointer' onClick={() => { navigate("/") }} />
          <div className=' relative flex border-1 border-gray-500 '>
            <div className=''><FaSearch className='absolute left-2 top-3 text-gray-800 ' color='gray' />
              <input type="text" placeholder='Search' className='lg:w-[500px] xl:w-[600px] px-8 py-2 shadow-lg rounded-l-md text-md text-gray-800 outline-none ' /></div>
            <button className='px-6 py-2 bg-[#00A2A2] rounded-r-md'>Search</button>
          </div>
          <div className='flex gap-5 cursor-pointer'>
            <GiShop  size={22} className='text-orange-700' />
            <FaShoppingCart size={22} className='text-orange-700' />
            <GiHamburgerMenu size={23} className='text-orange-700' />
          </div>
        </div>
      </div>


      {/* for large screen . */}
      <div className='px-5 py-2 hidden md:hidden lg:block'>
        <div className='flex justify-between items-center'>
          <img src={logo} alt="" className='h-12 cursor-pointer' onClick={() => { navigate("/") }} />
          <div className=' relative flex border-1 border-gray-500 '>
            <div className=''><FaSearch className='absolute left-2 top-3 text-gray-800 ' color='gray' />
              <input type="text" placeholder='Search' className='lg:w-[350px] xl:w-[400px] px-8 py-2 shadow-lg rounded-l-md text-md text-gray-800 outline-none ' />
            </div>
            <button className='px-6 py-2 bg-[#00A2A2] rounded-r-md'>Search</button>
        
          </div>
              <div className='flex items-center gap-2 px-6 py-2  bg-gradient-to-r from-[#dbfbff] to-[#9edcdc] rounded-lg border-2 border-[#dbfbff]'>
              <IoCallOutline size={20} className='text-[#CB593F]' />
              <a href="https://wa.me/+91(9777) 772-782">+91(9777) 772-782</a>
            </div>
          <div className='flex gap-5 cursor-pointer'>
            <GiShop  size={22} className='text-orange-700' />
            <FaShoppingCart size={22} className='text-orange-700' />
            <GiHamburgerMenu size={23} className='text-orange-700' />
          </div>
        </div>
      </div>
    </>
  )
}

export default BottomNavbar