import React from "react";
import checkBtn from '../../assets/Images/check.svg'
import whiteCheckBtn from '../../assets/Images/white-check.svg'

const Pricing = () => {
  return (
    <div className="pt-[90px] lg:px-[15px] xl:max-w-[1695px] xl:mx-auto">
      <h1 className="text-center text-[#172026] text-3xl capitalize font-medium md:text-4xl">Flexible plans for you</h1>
      <p className="text-center text-[#36485C] pt-4 font-medium  text-lg md:text-xl md:pt-4">No hidden fees!</p>

      <div className="flex flex-col gap-y-[30px] px-6 pt-8 md:flex md:flex-row md:gap-x-[21px] md:pt-16">
        <div className="w-full flex flex-col bg-[#F5F4FF] p-6 rounded-[9px] shadow-lg   transform hover:translate-y-[-12px] transition duration-300 ease-in-out md:shadow-xl ">
          <div>
            <h3 className="text-[#4328EB] pb-[8px] font-semibold text-lg">Free Trial</h3>
            <p className="text-[#36485C] font-medium text-base">Perfect for testing the waters</p>

            <h2 className="text-[#172026] font-semibold text-2xl pt-4 md:pt-8 md:pb-2">
              $0 <span className="text-[#5F7896]">/mo</span>
            </h2>
            
            <ul className="flex flex-col gap-y-2 pt-4">
                <li className="flex flex-row items-center gap-x-4 text-[#36485C] text-base font-medium">
                    <span> <img src={checkBtn} alt="Error Loading Image"/></span>
                    Lorem ipsum dolor sit amet
                </li>
                <li className="flex flex-row items-center gap-x-4 text-[#36485C] text-base font-medium">
                <span> <img src={checkBtn} alt="Error Loading Image"/></span>
                  Sed do eiusmod tempor incididunt
                </li>
                <li className="flex flex-row items-center gap-x-4 text-[#36485C] text-base font-medium">
                <span> <img src={checkBtn} alt="Error Loading Image"/></span>
                 Consectetur adipiscing elit
                </li>
            </ul>
          </div>

          <button className="bg-[#FFFFFF] mt-6 p-4 text-[#4328EB] font-medium text-lg rounded-[9px] hover:bg-[#FFE9E9] transition-colors duration-300 ease-in-out md:mt-[80px] ">Start Trial</button>
        </div>

        <div className="w-full flex flex-col bg-[#4328EB] p-6 rounded-[9px] shadow-lg   transform hover:translate-y-[-12px] transition duration-300 ease-in-out md:shadow-xl">
          <div>
            <h3 className="text-[#FFFFFF] pb-[8px] font-semibold text-lg">Business</h3>
            <p className="text-[#F4F8FA] font-medium text-base">Perfect for testing the waters</p>

            <h2 className="text-[#F4F8FA] font-semibold text-2xl pt-4  md:pb-4">
              $500 <span className="text-[#F4F8FA]">/mo</span>
            </h2>
            
            <ul className="flex flex-col gap-y-2 pt-4 text-[#F4F8FA]">
                <li className="flex flex-row items-center gap-x-4 text-[#F4F8FA] text-base font-medium">
                    <span> <img src={whiteCheckBtn} alt="Error Loading Image"/></span>
                    Lorem ipsum dolor sit amet
                </li>
                <li className="flex flex-row items-center gap-x-4 text-[#F4F8FA] text-base font-medium">
                <span> <img src={whiteCheckBtn} alt="Error Loading Image"/></span>
                  Sed do eiusmod tempor incididunt
                </li>
                <li className="flex flex-row items-center gap-x-4 text-[#F4F8FA] text-base font-medium">
                <span> <img src={whiteCheckBtn} alt="Error Loading Image"/></span>
                 Consectetur adipiscing elit
                </li>
                <li className="flex flex-row items-center gap-x-4 text-[#F4F8FA] text-base font-medium">
                <span> <img src={whiteCheckBtn} alt="Error Loading Image"/></span>
                Lorem ipsum dolor sit amet
                </li>
                <li className="flex flex-row items-center gap-x-4 text-[#F4F8FA] text-base font-medium">
                <span> <img src={whiteCheckBtn} alt="Error Loading Image"/></span>
                Sed do eiusmod tempor incididunt
                </li>
            </ul>
          </div>

          <button className="bg-[#FFFFFF] mt-6 p-4 text-[#4328EB] font-medium text-lg rounded-[9px] capitalize hover:bg-[#FFE9E9] transition-colors duration-300 ease-in-out md:mt-6">Get Started</button>
        </div>
      
        <div className="w-full flex flex-col bg-[#E73939] p-6 rounded-[9px] shadow-lg   transform hover:translate-y-[-12px] transition duration-300 ease-in-out md:shadow-xl">
          <div>
            <h3 className="text-[#FFFFFF] pb-[8px] font-semibold text-lg">Enterprise</h3>
            <p className="text-[#F4F8FA] font-medium text-base">Perfect for big companies</p>

            <h2 className="text-[#F4F8FA] font-semibold text-2xl pt-4 md:pb-4">
            Custom
            </h2>
            
            <p className="text-[#F4F8FA] pt-2 font-medium text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. 
            </p>

            <p className="text-[#F4F8FA] pt-4 font-medium text-base">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit 
            </p>
          </div>

          <button className="text-[#E73939] mt-6 p-4 bg-[#FFFFFF] font-medium text-lg rounded-[9px] capitalize hover:bg-[#FFE9E9] transition-colors duration-300 ease-in-out md:mt-6">Contact Us</button>
        </div>


      </div>
    </div>
  );
};

export default Pricing;
