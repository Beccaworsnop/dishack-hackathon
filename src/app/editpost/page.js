'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const ArrowLeft ="arrowleft"
const EditPost = () => {
  const [isEmergency, setIsEmergency] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center bg-white p-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <Link href="/profile" className="text-red-600 flex items-center mb-4 font-bold text-lg">
          <ArrowLeft className="mr-2" /> Edit Post
        </Link>
        <hr className="mb-4" />

        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 flex justify-center items-center bg-gray-200 rounded-full">
            <span className="text-2xl">👤</span>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">FEKKAI Ahmed</h2>
          </div>
        </div>

        <div className="mb-4">
          <label className="font-semibold text-gray-700">Blood Type :</label>
          <p className="border-b pb-1 text-gray-600">A+</p>
        </div>
        
        <div className="mb-4">
          <label className="font-semibold text-gray-700">Phone Number :</label>
          <p className="border-b pb-1 text-gray-600">0550 50 50 50</p>
        </div>
        
        <div className="mb-4">
          <label className="font-semibold text-red-600">Emergency :</label>
          <div className="flex items-center mt-1">
            <input
              type="checkbox"
              className="w-5 h-5 accent-red-600"
              checked={isEmergency}
              onChange={() => setIsEmergency(!isEmergency)}
            />
            <span className="ml-2 text-sm text-gray-600">
              In this case, a red text saying <span className="text-red-600 font-semibold">"Emergency Call"</span> will appear.
            </span>
          </div>
        </div>
        
        <div className="flex justify-between mt-6">
         <Link href="/hospitalprofile"><button className="px-4 py-2 border border-red-600 text-red-600 rounded-full font-semibold hover:bg-red-100">
            Discard
          </button></Link>
          <Link href="/hospitalprofile"><button className="px-6 py-2 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700">
            Confirm
          </button></Link> {/*the feature to confirm the changes is not fonctional yet*/}
        </div>
      </div>
    </div>
  );
};

export default EditPost;