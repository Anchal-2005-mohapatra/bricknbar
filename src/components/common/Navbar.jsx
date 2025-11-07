import React, { useState, useEffect } from 'react'
import './Navbar.css';
import BottomNavbar from './BottomNavbar';


const Navbar = () => {
    const words = [" NEW SEASON, NEW OFFER: YOU CAN'T MISS", " FREE DELIVERY OVER ₹5000", "EASY RETURNS & EASY REFUNDS", " LIMITED TIME OFFERS: ONLY FOR YOU"]
    const [cureentIdx, setCurrentIdx] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIdx((pre) => pre === words.length - 1 ? 0 : pre + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, [words.length]);


    return (
        <>
        <div className=' '>
            {/* small screen . */}
            <div className='block md:hidden lg:hidden text-sm text-center font-medium bg-[#3c3c3c] text-[#FFFFFF] px-2 py-2'>
                {words[cureentIdx]}
            </div>


            {/* for large screen .  */}
            <div className='parent hidden md:block lg:block bg-[#3c3c3c] text-[#FFF] text-xs font-medium px-4 py-2 '>
                <div className='scroll'>
                    <div className=' text '>
                        <ul className=' flex gap-9 '>
                            <li >
                                NEW SEASON, NEW OFFER: YOU CAN'T MISS <span className='px-3'>  —</span>
                            </li>
                            <li>
                                FREE DELIVERY OVER ₹5000 <span className='px-3'>  —</span>
                            </li>
                            <li>
                                EASY RETURNS & EASY REFUNDS <span className='px-3'>  —</span>
                            </li>
                            <li>
                                LIMITED TIME OFFERS: ONLY FOR YOU <span className='px-3'>  —</span>
                            </li>
                            <li >
                                NEW SEASON, NEW OFFER: YOU CAN'T MISS <span className='px-3'>  —</span>
                            </li>
                            <li>
                                FREE DELIVERY OVER ₹5000 <span className='px-3'>  —</span>
                            </li>
                            <li>
                                EASY RETURNS & EASY REFUNDS <span className='px-3'>  —</span>
                            </li>
                            <li>
                                LIMITED TIME OFFERS: ONLY FOR YOU <span className='px-3'>  —</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <BottomNavbar/>
                 </div>
        </>
    )
}

export default Navbar


























// import React from 'react'
// import "swiper/css";
// import "swiper/css/autoplay";
// import "swiper/css/navigation";
// import { Navigation, Autoplay } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';



// const Navbar = () => {
//     return (
//         <>

//         {/* Small screen */}
//         <div className='bg-[#333] text-[#FFFFFF] px-2 py-2'>
//             <Swiper modules={[Autoplay, Navigation]}
//                 slidesPerView={1}
//                 autoplay={{ delay: 3000 }}
//                 spaceBetween={30}
//             >
//                 <SwiperSlide>
//                     <div className='block md:hidden lg:hidden text-center font-medium text-sm'>
//                         NEW SEASON, NEW OFFER: YOU CAN'T MISS
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div className='block md:hidden lg:hidden text-center font-medium text-sm'>
//                        FREE DELIVERY OVER ₹5000
//                     </div>
//                 </SwiperSlide>
//                  <SwiperSlide>
//                     <div className='block md:hidden lg:hidden text-center font-medium text-sm'>
//                     EASY RETURNS & EASY REFUNDS

//                     </div>
//                 </SwiperSlide>
//                  <SwiperSlide>
//                     <div className='block md:hidden lg:hidden text-center font-medium text-sm'>
//                        LIMITED TIME OFFERS: ONLY FOR YOU

//                     </div>
//                 </SwiperSlide>
//             </Swiper>

//         </div>
//         </>
//     )
// }

// export default Navbar

