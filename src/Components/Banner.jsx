import React from 'react';
import banner from '../assets/banner.jpg'


const Banner = () => {
  return (
    <div>
      <div className="text-center bg-purple-700 text-white w-full space-y-5 pt-20 pb-48">
      <h1 className="text-5xl font-bold ">
        Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
      </h1>
      <p>
        Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all! and this is nothing.
      </p>
      <button className="bg-white rounded-full py-2 px-4 text-purple-700 font-bold">Shop Now</button>
      </div>
      <div className=" ">
        <img className="max-h-[450px] w-8/12 mx-auto -mt-40 rounded-xl border p-3" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;