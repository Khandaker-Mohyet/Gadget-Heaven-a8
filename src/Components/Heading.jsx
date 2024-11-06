import React from 'react';

const Heading = ({title}) => {
  return (
    <div className="flex flex-col w-full justify-center items-center my-12">
      <h1 className="flex flex-col w-full justify-center items-center font-bold text-3xl">
        {title}
      </h1>
    </div>
  );
};

export default Heading;