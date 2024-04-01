import '../src/App.css'

import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import MainFeature from './components/MainFeature'
import Faq from './components/Faq/Faq'
import Pricing from './components/Pricing/Pricing'
import Cta from './components/Cta/Cta'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <MainFeature/>
    <Faq/>
    <Pricing/>
    <Cta/>
    <Footer/>
    
    
    </>
  )
}

export default App