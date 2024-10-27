import { NavLink } from 'react-router-dom'
import React from 'react'
import logo from '../assets/images/logo.png'
import chef from '../assets/images/chef.png'


const Navbar = () => {

  const LinkClass = ({isActive}) => isActive ? 'text-green-600 bg-white hover:bg-green-700 hover:text-white rounded-md px-3 py-2'
                : 'text-white hover:bg-green-700 hover:text-white rounded-md px-3 py-2';

  return (
    <div>
        <nav className=" bg-orange-600 border-b border-orange-600">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            {/* <!-- Logo --> */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/index.html">
              <img
                className="h-10 w-auto"
                src={chef}
                alt="React Jobs"
              />
              <span className="hidden md:block text-white text-2xl font-extrabold tracking-[-3px] ml-2"
                >TASTE QUEST</span
              >
           </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={LinkClass}
                  >Home</NavLink>
                <NavLink
                  to="/jobs"
                  className={LinkClass}
                  >Jobs</NavLink>
                <NavLink
                  to="/add-job"
                  className={LinkClass}
                  >Add Job</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar