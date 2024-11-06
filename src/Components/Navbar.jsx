
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { getAllProducts } from "../Utils";
import { getAllWishList } from "../Utils/WishList";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';


  const [product, setProduct] = useState([])

  useEffect(() => {
    const addCard = getAllProducts()
    setProduct(addCard)
  }, [])
  
  


  const [products, setProducts] = useState([])
  useEffect(() => {
    const addWishList = getAllWishList()
    setProducts(addWishList)
  }, [])


  return (
    <div className={`navbar bg-base-100 w-11/12 mx-auto ${isHomePage === '/'? "bg-purple-700 text-white" : "bg-white"}`}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <NavLink
            className={({ isActive }) => ` font-bold ${isActive ? 'text-purple-700' : 'hover:text-purple-700'}`}
            to="/">Home</NavLink>
          <NavLink
            className={({ isActive }) => ` font-bold ${isActive ? 'text-purple-700' : 'hover:text-purple-700'}`}
            to="/statistics">Statistics</NavLink>
          <NavLink
            className={({ isActive }) => ` font-bold ${isActive ? 'text-purple-700' : 'hover:text-purple-700'}`}
            to="/dashboard">Dashboard</NavLink>
          <NavLink
            className={({ isActive }) => ` font-bold ${isActive ? 'text-purple-700' : 'hover:text-purple-700'}`}
            to="/blogs">Blogs</NavLink>
      </ul>
    </div>
    <Link to="/" className=" text-2xl font-bold">Gadget Heaven</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8">
          <NavLink
            className={({ isActive }) => ` font-bold ${isActive ? 'text-purple-700' : 'hover:text-purple-700'}`}
            to="/">Home</NavLink>
          <NavLink
            className={({ isActive }) => ` font-bold ${isActive ? 'text-purple-700' : 'hover:text-purple-700'}`}
            to="/statistics">Statistics</NavLink>
          <NavLink
            className={({ isActive }) => ` font-bold ${isActive ? 'text-purple-700' : 'hover:text-purple-700'}`}
            to="/dashboard">Dashboard</NavLink>
          <NavLink
            className={({ isActive }) => ` font-bold ${isActive ? 'text-purple-700' : 'hover:text-purple-700'}`}
            to="/blogs">Blogs</NavLink>
    </ul>
  </div>
  <div className="navbar-end flex gap-5">
        <a className="bg-white p-2 rounded-full border"><FaShoppingCart /></a>
        <span className="-ml-9 -mt-8 bg-white px-2 rounded-full">{product.length}</span>
        <a className="bg-white p-2 rounded-full border"><FiHeart /></a>
        <span className="-ml-8 -mt-8 bg-white px-2 rounded-full">{products.length}</span>
  </div>
</div>
  );
};

export default Navbar;