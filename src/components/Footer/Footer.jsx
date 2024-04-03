import React from 'react'
import Logo from '../../assets/Images/Logo.svg'
import X from '../../assets/Images/X.svg'
import faceBook from '../../assets/Images/Facebook.svg'
import Feed from '../../assets/Images/Feed.svg'



const Footer = () => {
  return (
    <div className='pt-[50px] pb-[40px] xl:max-w-[1695px] xl:mx-auto'>
        <div className='px-4 flex items-center justify-center gap-x-[18px] sm:gap-x-[30px]'>
            <img src={Logo} alt="Error Loading Image"  className='cursor-pointer'/>
            <p className='text-[#36485C] font-bold text-xl'>YOUR SITE</p>
        </div>

        <ul className='text-[#36485C] flex flex-col items-center gap-y-[20px] mt-10 sm:flex sm:flex-row sm:justify-center sm:gap-x-[65px]'>
            <li className='font-medium text-lg cursor-pointer sm:text-xl'>Features</li>
            <li className='font-medium text-lg cursor-pointer sm:text-xl'>Pricing</li>
            <li className='font-medium text-lg cursor-pointer sm:text-xl'>Enterprise</li>
            <li className='font-medium text-lg cursor-pointer sm:text-xl'>Careers</li>
        </ul>

        <p className='text-center pt-8 text-[#5F7896] font-medium text-base sm:text-lg'>&copy; Copyright 2024. Your Site. All rights reserved.</p>

        <div className='flex flex-row justify-center items-center gap-x-[50px] mt-8 sm:mt-10 '>
            <img src={X} alt="Error Loading Image" className='cursor-pointer lg:w-[2.1%]' />
            <img src={faceBook} alt="Error Loading Images" className='cursor-pointer lg:w-[2.1%]' />
            <img src={Feed} alt="Error Loading Image" className='cursor-pointer lg:w-[2.1%]' />
        </div>
    </div>
  )
}

export default Footer