import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FiHeart } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { addToCard } from '../Utils';
import { addToWishList } from '../Utils/WishList';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Details = () => {
  const data = useLoaderData()
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const { product_title, product_image, category, price, description, specification, availability, rating } = product
  console.log(specification)


  const handelWishList = () => {
    addToWishList(product)
  }

  const handelCard = (product) => {
    addToCard(product)
    
  }


  useEffect(() => {

    const singleData = data.find(product => product.id == id)
    setProduct(singleData)
    
  }, [data, id])
  console.log(specification)
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Gadget Heaven | Details</title>
        </Helmet>
      <div className="text-center bg-purple-700 text-white space-y-4 pt-8 pb-24">
        <h1 className="text-3xl font-bold">Product Details</h1>
        <p>Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, <br /> we have it all!</p>
      </div>
      <div className="grid grid-cols-3 mx-auto gap-6 md:w-3/6 bg-slate-100 rounded-2xl p-12 -mt-20 mb-20" >
        <div className="col-span-1 h-52">
          <img className="rounded-xl h-48" src={product_image} alt="" />
        </div>
        <div className="space-y-3 col-span-2">
          <h1 className="text-3xl font-bold">{product_title}</h1>
          <span className="px-3 py-1 bg-green-200 rounded-full mt-1"> {availability? "In stock" : "stock out"} </span>
          <h3>Price:$ {price} </h3>
          <h4>{availability}</h4>
          <p>{description}</p>
          <p><span className="font-bold">specification:</span> <br />
            {specification &&  
              specification.map((s, idx) => <li key={idx}>
                {s}
              </li>)
            }
          </p>
          <p>Rating: <div className="rating rating-sm">
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  
            <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
              defaultChecked />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  
</div> {rating}</p>
          <div className="flex space-x-4 items-center">
            <button onClick={()=> handelCard(product)} className="flex items-center space-x-2 py-2 px-4 border border-purple-700 bg-purple-700 rounded-full hover:bg-white hover:text-purple-700 text-white font-bold"
              >
              <span>Add To Card </span>
              <FaShoppingCart />
            </button>
            <button onClick={()=>handelWishList(product)} className="bg-white p-2 rounded-full border"><FiHeart /></button>
          </div>
        </div>
      </div>
      </div>
      </HelmetProvider>
  );
};

export default Details;