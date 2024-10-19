import { Link } from 'react-router-dom'
import React from 'react'
import { FaSpoon } from 'react-icons/fa6'
import { FaBook } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
import Card from './Card'


const HomeCard = () => {
  return (
    <div>
        <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">For Aspires<FaSpoon className='inline text-base ml-2 text-green-700'/></h2>
            <p className="mt-2 mb-4">
              Browse our Cooking jobs and start your career today
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Jobs<FaSearch className='inline text-sm font-thin ml-1 mb-1 text-green-700'/>
            </Link>
           </Card>
           <Card bg='bg-green-200'>
           <h2 className="text-2xl font-bold">For Employers<FaBook className='inline text-base ml-2 text-slate-700'/></h2>
            <p className="mt-2 mb-4">
              List your job to find the perfect chef for the role
            </p>
            <Link
              to="/add-job"
              className="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
            >
              Add Job +
            </Link>
           </Card>
        </div>
      </div>
    </section>
    </div>
  )
}

export default HomeCard