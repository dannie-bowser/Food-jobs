import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCard from './components/HomeCard';
import JobListings from './components/JobListings';
import Viewjobs from './components/ViewAllJobs';
import HomePage from './pages/HomePage';
import HomeLayout from './Layouts/HomeLayout';
import Jobspage from './pages/Jobspage';
import NotFoundPage from './pages/NotFoundPage';
import Jobpage, {jobLoader} from './pages/Jobpage';
import AddJob from './pages/AddJob';
import EditJobPage from './pages/EditJobPage';


const App = () => {

  // add new job
  const addJob = async (newJob) => {
     const res = await fetch('/api/jobs',{

      method: 'POST',
      headers: {
       'Content-Type': 'application/json'
      },
       body:JSON.stringify(newJob)
     });

     return;
  }
  

  // delete new job
     const deleteJob = async (id) => {
      const res = await fetch(`/api/jobs/${id}`,{
        method: 'DELETE',
       });
  
       return;
     }
  
     const updateJob = async (job) => {
      const res = await fetch(`/api/jobs/${job.id}`,{

        method: 'PUT',
        headers: {
         'Content-Type': 'application/json'
        },
         body:JSON.stringify(job)
       });
  
       return;
     }



  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
     <Route index element={<HomePage />} />
     <Route path="/jobs" element={<Jobspage />} />
     <Route path="/add-job" element={<AddJob  addJobSubmit={addJob}/>} />
     <Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader}/>
     <Route path="/jobs/:id" element={<Jobpage deleteJob={deleteJob}/>} loader={jobLoader}/>
     <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
  );
  return <RouterProvider router={router}/>
}

export default App;