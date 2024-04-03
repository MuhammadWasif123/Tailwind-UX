import React from 'react'
import Logo  from '../../assets/Images/Logo.svg'
import User from '../../assets/Images/User.svg'
import Menu from '../../assets/Images/Menu.svg'


const Navbar = () => {

    const navLinks=[
       {name:"Features"},
       {name:"Pricing"},
       {name:"Enterprise"},
       {name:"Careers"}
    ]


  return (
  <nav className='flex w-full items-center justify-between px-4 py-3 lg:container lg:mx-auto  xl:max-w-[1695px] xl:mx-auto'>
    <div className='flex items-center'>
        <img src={Logo} alt="Error Loading Image" className='cursor-pointer' />

        <div className='hidden  lg:flex gap-x-6 pl-[53px]'>
           {navLinks.map((item,index)=>(
            <p key={index} className='font-semibold text-[#36485C]'>{item.name}</p>


           ))}
        </div>

    </div>


    <div className='flex gap-x-4'>
        <p className='hidden lg:block font-medium  text-base text-[#36485C] pr-10'>Open an Account</p>

    <div className='flex gap-x-3'>
        <img src={User} alt="Error Loading Image"/>
        <span className='hidden lg:block font-medium text-[#36485C]'>Sign In</span>
    </div>
        <img src={Menu} alt="Error Loading Image"  className='lg:hidden' />
    </div>
   



  </nav>
  )
}

export default Navbar