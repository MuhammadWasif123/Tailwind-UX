import React from 'react'
import Feature1 from '../../assets/Images/feature-1.svg'
import checkBtn from '../../assets/Images/check.svg'
import blueArrow from '../../assets/Images/blue-button.svg'


const FirstFeature = () => {
  return (
    <div className='flex flex-col px-[24px] sm:flex sm:flex-row-reverse lg:mr-[20px] lg:mt-[12px] xl:max-w-[1695px] xl:mx-auto '>
        <img src={Feature1} alt="Error Loading Image" className='hidden w-1/2 sm:block ' />
        <div className='sm:w-1/2 lg:pt-[48px] lg:pb-[15px] lg:pr-[13px] lg:pl-[13px] lg:flex lg:flex-col lg:gap-y-[15px]'>
            <h3 className='text-[#0085FF] font-medium text-xl md:text-base lg:text-xl '>Sales Monitoring</h3>
            <h1 className='text-[#172026] text-[34px] pt-[12px] sm:text-4xl lg:text-5xl font-semibold lg:leading-[50px]'>Simplify your sales monitoring</h1>

            <img src={Feature1} alt="Feature1"  className='pt-6 w-[96%] sm:hidden'/>

            <p className='text-[#36485C] text-lg py-[23px] sm:w-[87%] lg:text-[20px]'>Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard.</p>

            <ul className='flex flex-col gap-y-[10px]' >
              <li className='flex items-center gap-x-[20px] text-[#36485C] text-lg font-medium lg:text-base'>
               <span>
                <img src={checkBtn} alt="check btn" />
               </span>
               Lorem ipsum dolor sit amet
              </li>
              <li className='flex gap-x-[20px] items-center text-[#36485C] text-lg font-medium lg:text-base'>
               <span>
                <img src={checkBtn} alt="check btn" />
               </span>
               Consectetur adipiscing elit
              </li>
              <li className='flex gap-x-[20px] items-center text-[#36485C] text-lg font-medium lg:text-base'>
               <span>
                <img src={checkBtn} alt="check btn" />
               </span>
               Sed do eiusmod tempor incididunt ut labore 
              </li>

              <p className='flex gap-x-4 text-[#0085FF] text-xl font-semibold pt-4 lg:pt-10'>Learn More <span> <img src={blueArrow} alt="Check" className='h-[31px]' /> </span> </p>
              
              


            </ul>

        </div>
        
    </div>
  )
}

export default FirstFeature