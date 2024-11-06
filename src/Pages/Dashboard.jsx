import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getAllProducts } from '../Utils';
import Card from '../Components/Card';

const Dashboard = () => {

  // const [product, setProduct] = useState([])
  // useEffect(() => {
  //   const addCard = getAllProducts()
  //   setProduct(addCard)
  // },[])

  return (
    <div>
      <div className="text-center bg-purple-700 text-white space-y-3 py-8">
        <h1 className="text-3xl font-bold">Dashobard</h1>
        <p>Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, <br /> we have it all!</p>
        <div className="flex justify-center space-x-4">
        <Link to="" className="bg-white text-purple-700 font-bold rounded-full px-4 py-2">Card</Link>
        <Link to="wishlist" className="bg-white text-purple-700 font-bold rounded-full px-4 py-2">Wishlist</Link>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {product.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div> */}
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;