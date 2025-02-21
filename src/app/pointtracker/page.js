'use client';

import Button from '../components/button';
import Link from 'next/link';

export default function CheckPoints() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-100">
    

      {/* Content */}
      <div className="mt-10 w-3/4 bg-green-700 text-white rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Check Points</h2>
        
        <div className="flex items-center space-x-4">
          <div>
            <h3 className="text-lg font-semibold">FEKKAI Ahmed</h3>
            <p className="text-sm">0550 50 50 50</p>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-6 flex items-center w-full">
          <span className="font-bold">Lvl 24----</span>
          <span className="font-bold">Lvl 25</span>
        </div>

        {/* Privileges Section */}
        <div className="mt-6">
          <h3 className="font-bold text-lg">Privileges</h3>
          <p className="text-sm text-white mt-2">
          10% lower price in blood tests          </p>
        </div>
      </div>

      {/* Back Button */}
      <Link href="/donorprofile"><Button className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">
        Back
      </Button></Link>
    </div>
  );
}
