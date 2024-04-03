import React from 'react'
import pinkBtn from '../../assets/Images/pink-button.svg'


const Cta = () => {
  return (
    <div className='w-[91%] rounded-[16px] bg-gradient-to-tr from-blue-500 to-orange-600 py-[54px] px-[32px] my-6 mx-6 md:my-[95px] md:w-[96%] xl:max-w-[1695px] xl:mx-auto'>
    <h1 className='text-center text-[#FFFFFF] font-medium text-[34px] px-8 lg:text-[42px]
    lg:px-[400px] lg:pb-[20px]'>Monitor your website like a pro</h1>
    
    <p className='text-[#FFFFFF] text-center font-normal text-[21px] pt-6 lg:text-[23px]'>Join over 800+ happy site owners boosting productivity and efficiency!</p>

    <div className='flex flex-col items-center justify-center md:flex md:flex-row md:gap-x-8 md:mt-6 md:pb-8'>
    <button className='capitalize w-fit bg-[#FFFFFF] text-center text-[#EB2891] px-8 py-4 rounded-[8px] font-medium text-lg mt-8 hover:bg-[#FFE9E9] transition-colors duration-300 ease-in-out'>Try for free</button>

    <p className='capitalize text-white flex flex-row gap-x-4 mt-8 text-xl cursor-pointer font-medium'>Contact sales
        <span><img src={pinkBtn} alt="Error Loading Image"/></span>
    </p>
    </div>
    </div>
  )
}

export default Cta