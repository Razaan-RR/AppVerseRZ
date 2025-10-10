import React from 'react';

function Stats() {
  return (
    <div className="text-white py-14 text-center bg-gradient-to-br from-[#632EE3] to-[#9F62F2] px-4 sm:px-90">
      <h1 className="text-2xl sm:text-3xl font-bold">Trusted by Millions, Built for You</h1>
      <div className="flex flex-col sm:flex-row justify-between items-center pt-6 gap-6">
        <div>
          <p className="text-xs pb-2">Total Downloads</p>
          <h1 className="text-4xl sm:text-5xl font-bold pb-2">29.6M</h1>
          <p className="text-xs">21% more than last month</p>
        </div>
        <div>
          <p className="text-xs pb-2">Total Reviews</p>
          <h1 className="text-4xl sm:text-5xl font-bold pb-2">906K</h1>
          <p className="text-xs">46% more than last month</p>
        </div>
        <div>
          <p className="text-xs pb-2">Active Apps</p>
          <h1 className="text-4xl sm:text-5xl font-bold pb-2">132+</h1>
          <p className="text-xs">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
