import {Link, NavLink } from "react-router-dom";


const Categories = ({catagories}) => {
  return (
    <div className="flex flex-col">
      <Link to="/" className="text-base text-center rounded-full py-2 px-4 font-bold mb-5 bg-gray-200">All Product</Link>
      {
        catagories.map(category => <NavLink
          className={({isActive})=> `text-base text-center rounded-full py-2 px-4 font-bold mb-5 ${isActive? 'bg-purple-700 text-white' : 'bg-gray-200'}`}
          key={category.category}
          to={`/category/${category.category}`}>
            {category.category}</NavLink>)
      }
    </div>
  );
};

export default Categories;