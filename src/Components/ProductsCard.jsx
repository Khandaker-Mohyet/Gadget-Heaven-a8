import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const ProductsCard = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredByCategories = data.filter(product => product.category === category);
      setProducts(filteredByCategories);
    }
    else {
      setProducts(data)
    }
  }, [data, category]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsCard;
