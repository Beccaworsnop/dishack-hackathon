import React from "react";
import Link from "next/link";

const HospitalPacks = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4" style={{ backgroundImage: "url('/background.jpg')" }}>
      

      <h1 className="text-3xl font-bold text-red-700 mt-6">iDonate</h1>
      <p className="text-yellow-600 font-semibold text-lg">Get more features with our packs ! </p>

      <div className="grid grid-cols-3 gap-6 mt-8">
        <div className="w-40 h-40 bg-white shadow-lg flex items-center justify-center text-black text-lg font-semibold">pack 1</div>
        <div className="w-40 h-40 bg-white shadow-lg flex items-center justify-center text-black text-lg font-semibold">pack 2</div>
        <div className="w-40 h-40 bg-white shadow-lg">pack 3</div>
      </div>

      <Link href="/hospitalprofile"><button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600">Back</button></Link>
    </div>
  );
};

export default HospitalPacks;
