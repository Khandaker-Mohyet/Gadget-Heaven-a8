import React, { useEffect, useState } from 'react';
import { getAllWishList, removeWishList } from '../Utils/WishList';
import Cover from './Cover';
import { removeCard } from '../Utils';

const WishList = () => {

  const [product, setProduct] = useState([])
  useEffect(() => {
    const addWishList = getAllWishList()
    setProduct(addWishList)
  }, [])
  
  const handelRemove = (id) => {
    removeWishList(id)
    const addWishList = getAllWishList()
    setProduct(addWishList)
  }

  return (
    <div className="w-10/12 mx-auto">
        {product.map(product => (
          <Cover handelRemove={handelRemove}  key={product.id} product={product} />
        ))}
      </div>
  );
};

export default WishList;