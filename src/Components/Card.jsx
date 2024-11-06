import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
  const {id, product_title, product_image, price, availability} = product || {}
  return (
    <div className="flex relative">
      <div 
        className="transition hover:scale-105 shadow-xl h-72 rounded-xl overflow-hidden min-w-64 mb-10">
        <figure className="w-full h-40 overflow-hidden">
          <img className="h-48 p-5 flex justify-center items-center" src={product_image} alt="" />
        </figure>
        <div className="p-4">
          <h1 className="text-xl"> {product_title}</h1>
          <p>price: {price} $</p>
        </div>
        <Link to={`/details/${id}`}
        className=" ml-14 rounded-full border border-purple-700 text-purple-700 px-4 py-2 hover:bg-purple-700 hover:text-white"
        >view details</Link>
        </div>
    </div>
  );
};

export default Card;