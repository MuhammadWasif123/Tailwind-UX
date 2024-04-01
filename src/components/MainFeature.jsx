import React from 'react'
import FirstFeature from '../../src/components/Features/FirstFeature'
import SecondFeature from '../../src/components/Features/SecondFeature'
import ThirdFeature from '../../src/components/Features/ThirdFeature'

const MainFeature = () => {
  return (
    <>
     
     <div className='flex flex-col py-[56px] gap-y-[79px]'>

    <FirstFeature/>
    <SecondFeature/>
    <ThirdFeature/>
    </div>

    </>
  )
}

export default MainFeature