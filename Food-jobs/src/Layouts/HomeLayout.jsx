import React from 'react'
import { Outlet } from 'react-router-dom';
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
  return <>
           <Navbar />
           <Outlet />
           <ToastContainer/>
         </>
  
}

export default HomeLayout;