import React from 'react'
import jobs from '../jobs.json'
import JobListing from './JobListing';


const JobListings = ({isHome = false}) => {

    const DisplayJobs = isHome ? jobs.slice(0, 3): jobs;


  return (
    <div>
        <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-green-500 mb-6 text-center">
             { isHome ? 'Recent Jobs' : 'All jobs'}
          </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          { DisplayJobs.map((job) =>(
             <JobListing key={job.id} job={job}/>
          ))}

        
        </div>
      </div>
    </section>

    </div>
  )
}

export default JobListings