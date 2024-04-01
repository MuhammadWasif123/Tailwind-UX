import React from 'react'
import * as Accordion from '@radix-ui/react-accordion';
import Plus from '../../assets/Images/Plus.svg'

const items=[
  {
    id:1,
    question:"Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
  },
  {
    id:2,
    question:"Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
  },
  {
    id:3,
    question:"Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
  },
  {
    id:4,
    question:"Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
  },
  {
    id:5,
    question:"Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
  },
  
 


]

const Faq = () => {
  return (
    <div className='flex flex-col w-full px-[24px] md:flex md:flex-row  md:gap-x-4 md:mt-12'>
        <div className='pl-6 md:w-[40%] md:pt-16   '>
          <h3 className='text-[#EB2891] font-semibold text-xl md:pb-6 md:text-[19px]'>Frequently Asked Questions</h3>
          <h1 className='text-[#172026] font-bold capitalize text-3xl pt-[5px] md:font-semibold md:pb-4 md:text-4xl md:pr-[53px] lg:leading-10'>Lets clarify some of your questions</h1>
          <p className='text-[#36485C] text-xl pr-[60px]  font-medium  text-justify pt-[8px] md:pr-[20px] md:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>

        </div>


    <div className='w-[85%] pt-6 pl-6 md:w-[60%]'>
    <Accordion.Root
    type='single'
    defaultValue='item-1'
    collapsible
    className='flex flex-col gap-y-6'

    >
       {items.map((item,index)=>(
        <div key={index}>
            <Accordion.Item value={'items-${index+1}'} className='bg-[#E3F1FF] rounded-[9px] px-[19px] py-[4px] md:py-[7px]'>
            <Accordion.Header>
            <Accordion.Trigger className='border-none w-full flex items-center justify-between py-[14px]  '>
            <p className='text-[#172026] font-semibold text-[18px] text-left pr-[26px]'>{item.question}</p>
            <span>
                <img src={Plus} alt="Error Loading Image" className='w-12 md:w-6 ' />
            </span>



            </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content>
            <p className='text-[#36485C] text-lg pr-[15px] pb-4'>
                {item.answer}
            </p>

            </Accordion.Content>

            </Accordion.Item>


        </div>

       ))}




    </Accordion.Root>

    </div>

    </div>
  )
}

export default Faq