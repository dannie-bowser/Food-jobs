import React from 'react'
import jobs from '../jobs.json'
import JobListing from './JobListing';
import { useState, useEffect } from 'react';
import Spinner from './Spinner';


const JobListings = ({isHome = false}) => {

   const [jobs, setJobs] = useState([]);
   const  [loading, setLoading] = useState(true);

   useEffect(() => { 
       const fetchJobs = async () => {
        try {
          const apiURL = isHome ? '/api/jobs?_limit=3' :
          '/api/jobs'
          const res = await fetch( apiURL );
          const data = await res.json();
          console.log(data)
          setJobs(data);

        } catch (error) {

          console.log('Error fetching data', error);

        } finally {
          
          setLoading(false);

        }
       }
       fetchJobs();
   }, [])


  return (
    <div>
        <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-green-500 mb-6 text-center">
             { isHome ? 'Recent Jobs' : 'All jobs'}
          </h2>
          
          {loading ? <Spinner  loading={loading}/>: 
          
          <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              { jobs.map((job) =>(
             <JobListing key={job.id} job={job}/>
              ))}
        </div>
         </>}

        
      </div>
    </section>

    </div>
  )
}

export default JobListings