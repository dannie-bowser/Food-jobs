import React from 'react'
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import JobListings from '../components/JobListings'
import Viewjobs from '../components/ViewAllJobs'


const HomePage = () => {
  return (
    <div>
      <Hero />
      <HomeCard />
      <JobListings isHome={true} />
      <Viewjobs />
    </div>
  )
}

export default HomePage