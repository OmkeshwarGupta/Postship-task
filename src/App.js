import React from 'react'
import Navbar from './components/Navbar'
import WelcomeSection from './components/WelcomeSection'
import PerformanceSection from './components/PerformanceSection'
import './App.css'
import FunctionSection from './components/FunctionSection'
const App = () => {
  return (
    <div className='inter-font bg-[#FFFDFA]'>
      <Navbar />
      <WelcomeSection />
      <PerformanceSection />
      <FunctionSection />
    </div>
  )
}

export default App
