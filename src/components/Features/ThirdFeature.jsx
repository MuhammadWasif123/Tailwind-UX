import React from 'react'
import Feature3 from '../../assets/Images/feature-3.svg'
import checkBtn from '../../assets/Images/check.svg'
import pinkBtn from '../../assets/Images/pink-button.svg'

const ThirdFeature = () => {
  return (
    <div className='flex flex-col px-[24px] sm:flex sm:flex-row-reverse sm:gap-x-16 xl:max-w-[1695px] xl:mx-auto'>
    <img src={Feature3} alt="Feature2" className='hidden sm:block sm:w-1/2 lg:pr-6' />
    
    <div className='sm:w-1/2 lg:pt-12  '>
      <h3 className='text-xl font-medium text-[#EB2891] md:text-base lg:text-lg '>
      Growth Monitoring
      </h3>
      <h1 className='font-medium text-[#172026] text-[34px] pt-4 lg:text-[38px] lg:font-semibold lg:w-[75%] lg:leading-10'>Monitor your site’s new subscribers</h1>

      <img src={Feature3} alt="Error Loading Image" className='w-[100%] pt-6 sm:hidden' />

      <p className='text-[#36485C] text-lg py-6 font-normal lg:text-xl'>Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. </p>

    <div className='flex flex-row gap-x-10 py-4 w-full'>
      <div className='w-1/2 flex flex-col gap-y-4'>
        <h3 className='font-bold text-2xl lg:font-semibold text-[#172026] lg:text-3xl'>100+</h3>
        <p className='text-[#36485C] font-medium text-lg lg:font-medium lg:text-lg'>Lorem ipsum dolor sit</p>
      </div>
      <div className='w-1/2 flex flex-col gap-y-4'>
        <h3 className='font-bold lg:font-semibold text-2xl text-[#172026] lg:text-3xl'>800+</h3>
        <p className='text-[#36485C] font-medium  text-lg lg:font-medium lg:text-lg'>Conse adipiscing elit</p>
      </div>
    </div>

      <p className='cursor-pointer text-[#EB2891] text-xl font-medium lg:font-semibold flex gap-x-4 py-6 lg:py-8'>Learn More  <span><img src={pinkBtn} alt="Error Loading Image" className='h-[31px]' /></span></p>

    </div>
    
  </div>
  )
}

export default ThirdFeature