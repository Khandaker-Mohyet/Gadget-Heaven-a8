import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Statistics = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Gadget Heaven | Statistics</title>
        </Helmet>
      <div className="text-center bg-purple-700 text-white space-y-3 py-8">
        <h1 className="text-3xl font-bold">Statistics</h1>
        <p>Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, <br /> we have it all!</p>
      </div>
      <h1 className="text-purple-700 text-6xl font-bold text-center my-14">No Data to Show Statistics
      </h1>
      </div>
      </HelmetProvider>
  );
};

export default Statistics;