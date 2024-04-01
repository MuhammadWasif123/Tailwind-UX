import React from 'react'
import blueArrow from '../../assets/Images/blue-button.svg'
import Gradient1 from '../../assets/Images/Gradient.svg'
import HeroImg from '../../assets/Images/Image.svg'
import Google from '../../assets/Images/Google.svg'
import Slack from '../../assets/Images/Slack.svg'
import trustPilot from '../../assets/Images/Trustpilot.svg'
import CNN from '../../assets/Images/CNN.svg'
import Clutch from '../../assets/Images/Clutch.svg'



const Hero = () => {
  return (
    <div className='pt-6 lg:pt-10 ' >
      <div className='px-[20px] lg:px-[250px]'>
        <h1 className='capatilize text-[#172026] font-medium text-center text-[32px] leading-[40px] lg:text-[64px] lg:leading-[72px] lg:font-semibold'>Start monitoring your website like a pro</h1>
        
        <p className='text-center pt-8 text-[16px] text-[#36485C] leading-6 px-2 font-semibold lg:font-medium lg:px-[40px]'>Get a birds eye view with our customizable dashboard. Stay on top of things! Revamp your work process with our game-changing feature. Boost productivity and efficiency!</p>

      </div>


      <div className='flex w-full px-10 pt-8 lg:flex justify-center gap-x-8 '>
        <button className='w-1/2 bg-[#4328EB] text-[#FFFFFF] cursor-pointer font-bold rounded-lg py-[20px] text-lg tracking-wider lg:w-fit lg:px-[32px] lg:py-[15px] lg:font-medium'>Try for free</button>
        <button className='w-1/2 text-[#4328EB] text-[18px] cursor-pointer font-medium flex items-center justify-center lg:w-fit lg:text-xl'>View Pricing <span className='pl-3'><img src={blueArrow} alt="Error Loading Image" /></span></button>


      </div>

    <div className='relative flex h-full w-full  justify-center py-[35px]'>
      <img src={Gradient1} alt="Error Loading Image" className='min-h-[656px] xl:min-h-[750px] w-full object-cover'/>

    

      <div className='absolute bottom-16 w-full flex flex-col z-10 lg:bottom-10'>
         <img src={HeroImg} alt="Error Loading Image" className='-ml-2 h-[380px] sm:-ml-6 sm:h-[470px] md:-ml-10 md:h-[560px] md:relative md:top-16 lg:h-[660px] lg:mr-4 lg:top-[115px] xl:h-[750px] xl:relative xl:top-[100px] ' />

       <div className='w-full flex flex-col items-center lg:container lg:flex lg:flex-row  lg:justify-between lg:px-6 lg:pb-6 lg:items-center'>
        <p className='text-[#FFFFFF] text-2xl font-medium lg:mt-2 lg:ml-[40px]'>Trusted by these partners</p>

       <div className='grid grid-cols-3  lg:grid-cols-5 justify-center items-center justify-items-center pr-[20px]  lg:px-[30px]  align-middle pt-[27px] '>
        <img src={Google} alt="Google"/>
        <img src={Slack} alt="Slack"/>
        <img src={trustPilot} alt="trustPilot"/>
        <img src={CNN} alt="CNN" className='ml-[96px]'/>
        <img src={Clutch} alt="Clutch" className='ml-[74px]' />



       </div>

       </div>

      </div>



    </div>


    </div>


    
  )
}

export default Hero