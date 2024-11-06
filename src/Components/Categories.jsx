import {Link, NavLink } from "react-router-dom";


const Categories = ({catagories}) => {
  return (
    <div className="flex flex-col">
      {
        catagories.map(category => <NavLink
          className={({isActive})=> `text-base rounded-full py-2 px-4 font-bold mb-5 ${isActive? 'bg-purple-700 text-white' : 'bg-gray-200'}`}
          key={category.category}
          to={`/category/${category.category}`}>
            {category.category}</NavLink>)
      }
    </div>
  );
};

export default Categories;