
'use client';

import React from "react";
import Card from "../components/card";
import Button from "../components/button";
import Link from "next/link";

const Pencil ="pencil"
const Home ="home"
const HospitalProfile = () => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-red-600">iDonate</h1>
        <nav className="flex space-x-6 text-lg font-medium">
          <a href="/postslist" className="hover:text-red-600">Requests</a>
          <a href="/hospitallist" className="hover:text-red-600">Hospitals</a>
          <a href="/hospitalpacks" className="hover:text-red-600">packs</a>
          <a href="/hardware" className="hover:text-red-600">Temperature Track</a>
        </nav>
      </header>

      {/* Profile Section */}
      <Card className="p-6 shadow-md rounded-lg border border-gray-300">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
            👤
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-700">FEKKAI Ahmed</h2>
            <p className="text-lg font-semibold text-gray-700">0550 50 50 50</p>
          </div>
          <div className="ml-auto flex space-x-2">
            <Home className="w-6 h-6 text-gray-700 cursor-pointer" />
            <Pencil className="w-6 h-6 text-gray-700 cursor-pointer" />
          </div>
        </div>
        <p className="text-gray-600">
          20yo / A+ blood type / Bab el Oued , Algiers , Algeria</p>
      </Card>

      {/* Recent Posts */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Recent Posts</h2>
        <Card className="p-4 border border-gray-300">
          <div className="flex justify-between">
            <p className="font-semibold text-gray-700">FEKKAI Ahmed</p>
            <span className="text-red-600 font-semibold">Emergency Call</span>
          </div>
          <p className="text-sm text-gray-500">16 Aug 24</p>
          <p className="mt-2 text-gray-700"><strong>Blood Type:</strong> <span className="text-red-600">A+</span></p>
          <p className="mt-2 text-gray-700"><strong>Phone Number:</strong> <span className="text-red-600">0550 50 50 50</span></p>
          <p className="mt-2 text-gray-700"><strong>State:</strong> <span className="text-green-600">Done</span></p>
          <div className="flex justify-end space-x-2 mt-4">
            <Link href="/editpost"><Button className="border border-gray-400">Edit Post</Button></Link>
            <Button className="bg-red-600 text-white">Delete Post</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HospitalProfile;
