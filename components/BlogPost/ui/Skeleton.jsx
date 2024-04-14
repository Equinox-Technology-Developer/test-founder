import React from 'react';

const Skeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="rounded-md bg-gray-200 py-48"></div>
      <div className="mt-6 w-1/2 rounded-md bg-gray-200 py-5"></div>
      <div className="mt-8">
        <p className="mt-2 rounded-md bg-gray-200 py-3"></p>
        <p className="mt-2 rounded-md bg-gray-200 py-3"></p>
        <p className="mt-2 rounded-md bg-gray-200 py-3"></p>
        <p className="mt-2 rounded-md bg-gray-200 py-3"></p>
      </div>
    </div>
  );
};

export default Skeleton;
