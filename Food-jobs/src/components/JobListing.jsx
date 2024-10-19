import { Link } from 'react-router-dom'
import React from 'react'
import { useState } from 'react';
import { FaMapMarker} from 'react-icons/fa'
import { FaList } from 'react-icons/fa6';
import { FaMoneyBill } from 'react-icons/fa6';
import { FaTag } from 'react-icons/fa6';

const JobListing = ({job}) => {

  const [ShowDescription, setShowDescription] = useState(false);

  let description = job.description;

  if (!ShowDescription) {
     description = description.substring(0, 90) + '...';
  }
  return (
    <>
       <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2"><FaList className='inline text-base mr-2 mb-1 text-yellow-400'/>{job.type}</div>
                <h3 className="text-xl font-bold">{job.title}<FaTag className='inline text-base ml-4 text-red-600'/></h3>
              </div>

              <div className="mb-2 text-slate-500">
               {description}
              </div>
              <button onClick = {() => setShowDescription((prevState) => !prevState)}
              className="text-green-500 mb-3 text-sm hover:text-green-600">{ ShowDescription ? 'Show less' : 'Show more'}</button>

              <h3 className="text-red-700 mb-2 font-bold">{job.salary} / Year<FaMoneyBill className='inline text-base ml-2  text-slate-300'/></h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-green-800 mb-3 mr-1 font-semibold">
                  <FaMapMarker className='inline text-sm  mb-1 mr-2'/>
                  {job.location}
                </div>
                <Link
                  to={`/jobs/${job.id}`}
                  className="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </Link>
              </div>
            </div>
          </div>
    </>
  )
}

export default JobListing