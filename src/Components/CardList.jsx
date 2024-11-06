import  { useEffect, useState } from 'react';
import { getAllProducts, removeCard } from '../Utils';
import Cover from './Cover';
import { useLoaderData } from 'react-router-dom';

const CardList = () => {
  
  const handelSort = (sortBy) => {
    if (sortBy == 'price') {
      const sorted = [...product].sort((a, b) => b.price - a.price)
      setProduct(sorted)
    }
  }


  const [product, setProduct] = useState([])

  useEffect(() => {
    const addCard = getAllProducts()
    setProduct(addCard)
  }, [])
  
  const handelRemove = (id) => {
    removeCard(id)
    const addCard = getAllProducts()
    setProduct(addCard)
  }

  const handelDelate = () => {
    setProduct([''])
  }

  return (
    <div className="w-10/12 mx-auto">
      <div className="flex justify-between my-5">
        <h1 className="text-2xl font-bold">Card {product.length}</h1>
        <div className="flex space-x-4">
          <button onClick={()=>handelSort('price')} className="px-4 py-2 border border-purple-700 text-purple-700 rounded-full">Sort by price</button>
          <button onClick={()=> handelDelate()} className='px-4 py-2 text-white bg-purple-700 rounded-full'>Purchase</button>
        </div>
      </div>
      <div className="">
        {product.map(product => (
          <Cover handelRemove={handelRemove} key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CardList;