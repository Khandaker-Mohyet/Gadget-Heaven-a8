import React from 'react';
import Banner from '../Components/Banner';
import Heading from '../Components/Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../Components/Categories';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
  const catagories = useLoaderData()
  console.log(catagories)
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Gadget Heaven | Home</title>
        </Helmet>
      <Banner></Banner>
      <Heading title={'Explore Cutting-Edge Gadgets'}></Heading>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 w-10/12 mx-auto gap-6">
       <div className="col-span-1">
          <Categories catagories={catagories}></Categories>
       </div>
       <div className="md:col-span-2 lg:col-span-3">
          <Outlet></Outlet>
       </div>
      </div>
      </div>
      </HelmetProvider>
  );
};

export default Home;