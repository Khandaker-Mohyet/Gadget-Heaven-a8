import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Blogs from "../Pages/Blogs";
import ErrorPage from "../Components/ErrorPage";
import ProductsCard from "../Components/ProductsCard";
import Details from "../Pages/Details";
import CardList from "../Components/CardList";
import WishList from "../Components/WishList";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../Categories.json'),
        children: [
          {
            path: "/",
            element: <ProductsCard></ProductsCard>,
            loader: () => fetch('../Products.json'),
          },
          {
            path: "/category/:category",
            element: <ProductsCard></ProductsCard>,
            loader: () => fetch('../Products.json'),
          },
        ]
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch('../Products.json'),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            index: true,        
            element: <CardList></CardList>,
            loader: () => fetch('../Products.json'),
          },
          {
            path: "wishlist",
            element: <WishList></WishList>,
          },
        ]
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ]
  },
  
]);


export default router