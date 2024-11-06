import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const MainLayouts = () => {
  return (
    <div>
      <Toaster></Toaster>
      <Navbar></Navbar>
      <Outlet ></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;