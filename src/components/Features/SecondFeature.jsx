import React from 'react'
import Feature2 from '../../assets/Images/feature-2.svg'
import checkBtn from '../../assets/Images/check.svg'
import greenBtn from '../../assets/Images/green-button.svg'


const SecondFeature = () => {
  return (
    <div className='flex flex-col px-[24px] sm:flex sm:flex-row sm:gap-x-16 xl:max-w-[1695px] xl:mx-auto'>
      <img src={Feature2} alt="Feature2" className='hidden sm:block sm:w-1/2 lg:pl-6' />
      
      <div className='sm:w-1/2 lg:pt-12  '>
        <h3 className='text-xl font-medium text-[#00A424] md:text-base lg:text-lg '>
        Customer Support
        </h3>
        <h1 className='font-medium text-[#172026] text-[34px] pt-4 lg:text-[38px] lg:font-semibold lg:w-[75%] lg:leading-10'>Get in touch with your customers</h1>

        <img src={Feature2} alt="Error Loading Image" className='w-[100%] pt-6 sm:hidden' />

        <p className='text-[#36485C] text-lg py-6 font-normal lg:text-xl'>Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. </p>

        <ul className='flex flex-col gap-y-4 lg:py-4'>
         <li className='flex flex-row items-center gap-x-4 text-lg font-medium text-[#36485C] lg:text-base'>
          <span>
            <img src={checkBtn} alt="Error Loading Image"/>
          </span>
          Lorem ipsum dolor sit amet
         </li >
         <li className='flex flex-row items-center gap-x-4 text-lg font-medium text-[#36485C] lg:text-base'>
          <span>
            <img src={checkBtn} alt="Error Loading Image"/>
          </span>
          Consectetur adipiscing elit
          </li>
         <li className='flex flex-row items-center gap-x-4 text-lg font-medium text-[#36485C] lg:text-base'>
         <span>
            <img src={checkBtn} alt="Error Loading Image"/>
          </span>
         Sed do eiusmod tempor incididunt ut labore 
         </li>

        </ul>

        <p className='cursor-pointer text-[#00A424] text-xl font-medium lg:font-semibold flex gap-x-4 py-6 lg:py-8'>Learn More  <span><img src={greenBtn} alt="Error Loading Image" className='h-[31px]' /></span></p>


      </div>
        

    </div>
  )
}

export default SecondFeature