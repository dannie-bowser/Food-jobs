import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCard from './components/HomeCard'
import JobListings from './components/JobListings'
import Viewjobs from './components/ViewAllJobs'
import HomePage from './pages/HomePage'
import HomeLayout from './Layouts/HomeLayout'
import Jobspage from './pages/Jobspage'
import NotFoundPage from './pages/NotFoundPage'



const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<HomeLayout />}>
   <Route index element={<HomePage />} />
   <Route path="/jobs" element={<Jobspage />} />
   <Route path="*" element={<NotFoundPage />} />
  </Route>
)
);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App