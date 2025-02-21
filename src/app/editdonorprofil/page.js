'use client';

import { useState } from 'react';
import Link from 'next/link';
const ArrowLeft ="arrowleft"
const Camera ="camera"
const EditProfile = () => {
  const [username, setUsername] = useState('FEKKAI Ahmed');
  const [phoneNumber, setPhoneNumber] = useState('0550 50 50 50');
  const [bio, setBio] = useState(
    'always available to help and donate'
  );

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-white">
      <div className="w-full max-w-3xl bg-white shadow-lg p-6 rounded-xl border">
        <div className="flex items-center mb-4">
          <Link href="/profile">
            <ArrowLeft className="w-6 h-6 text-black cursor-pointer" />
          </Link>
          <h1 className="text-2xl font-bold text-black ml-4">Edit Profile</h1>
        </div>

        <div className="flex flex-col items-center mb-6">
          <div className="relative w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
            <Camera className="w-8 h-8 text-gray-600" />
          </div>
          <p className="mt-2 text-sm font-semibold text-black">Change Profile Picture</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-black font-semibold">Edit Username :</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border-b border-gray-400 focus:outline-none focus:border-black p-1 bg-transparent text-gray-700"
            />
          </div>
          <div>
            <label className="text-black font-semibold">Edit Number :</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full border-b border-gray-400 focus:outline-none focus:border-black p-1 bg-transparent text-gray-700"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="text-black font-semibold">Edit Bio :</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full border-b border-gray-400 focus:outline-none focus:border-black p-2 bg-transparent text-gray-700 resize-none"
          ></textarea>
        </div>

        <div className="flex justify-center gap-4">
          <Link href="/donorprofile"><button className="px-6 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition">
            Discard
          </button></Link>
          <Link href="/donorprofile"><button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
            Confirm
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
