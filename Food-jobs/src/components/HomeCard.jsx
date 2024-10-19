import React from 'react'
import Card from './Card'


const HomeCard = () => {
  return (
    <div>
        <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">For Aspires</h2>
            <p className="mt-2 mb-4">
              Browse our Cooking jobs and start your career today
            </p>
            <a
              href="/jobs.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Jobs
            </a>
           </Card>
           <Card bg='bg-green-200'>
           <h2 className="text-2xl font-bold">For Employers</h2>
            <p className="mt-2 mb-4">
              List your job to find the perfect chef for the role
            </p>
            <a
              href="/add-job.html"
              className="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
            >
              Add Job
            </a>
           </Card>
        </div>
      </div>
    </section>
    </div>
  )
}

export default HomeCard