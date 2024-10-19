import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCard from './components/HomeCard'
import JobListings from './components/JobListings'
import Viewjobs from './components/ViewAllJobs'


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCard />
      <JobListings />
       <Viewjobs />
    

    </>
  )
}

export default App