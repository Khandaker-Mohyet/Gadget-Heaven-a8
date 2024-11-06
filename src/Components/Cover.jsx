import React from 'react';
import { MdDelete } from "react-icons/md";

const Cover = ({ product, handelRemove, }) => {
  const {id, product_title, product_image, price, description} = product || {}
  return (
    <div className='m-4 p-2 border-2 rounded-lg'>
      <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
            <img className="h-20 w-20 rounded-lg" src={product_image} alt="" />
            <div>
              <h1 className="text-base font-bold">{product_title}</h1>
            <p>{description}</p>
            <p>Price:$  {price}</p>
            </div>
          </div>
          <button onClick={()=>handelRemove(id)}  className=" size-7 mr-5"><MdDelete /></button>
          </div>
    </div>
  );
};

export default Cover;