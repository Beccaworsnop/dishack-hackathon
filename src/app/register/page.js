"use client"
import { useState } from "react";
import Link from "next/link";

export default function register() {
  const [formData, setFormData] = useState({
    bloodType: "",
    dob: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/hospital-bg.jpg')" }}>
      <nav className="w-full bg-white py-4 px-10 flex justify-between items-center shadow-md fixed top-0">
        <div className="text-red-600 font-bold text-lg"><Link href="/hospitallist">Guest Mode</Link></div>
        <div className="space-x-6 font-semibold">
          <a href="#" className="hover:text-red-500">Services</a>
          <a href="#" className="hover:text-red-500">Partner Hospitals</a>
          <a href="#" className="hover:text-red-500">About us</a>
          <a href="#" className="hover:text-red-500">Contact us</a>
        </div>
      </nav>

      <div className="mt-20 text-center">
        <h1 className="text-4xl font-bold text-red-600">iDonate</h1>
        <p className="text-yellow-300 text-lg">Seamless Blood Donation & Smart Conservation</p>
      </div>

      <div className="mt-10 bg-white p-6 rounded-2xl shadow-lg w-96">
        <button className="text-red-600 text-xl">&larr;</button>
        <h2 className="text-2xl font-bold text-center text-red-600">Register</h2>
        <p className="text-center text-gray-600">Already have an account? <Link href="/signIn" className="text-red-500 font-bold">Log in</Link></p>
        
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="flex space-x-4">
            <input type="text" name="bloodType" placeholder="Blood Type" className="w-1/2 p-2 border-b focus:outline-none" onChange={handleChange} />
            <input type="date" name="dob" className="w-1/2 p-2 border-b focus:outline-none" onChange={handleChange} />
          </div>
          <input type="name" name="name" placeholder="user name" className="w-full p-2 border-b focus:outline-none" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address" className="w-full p-2 border-b focus:outline-none" onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone Number" className="w-full p-2 border-b focus:outline-none" onChange={handleChange} />
          <Link href="/donorprofile"><button type="submit" className="w-full bg-red-600 text-white py-2 rounded-full text-lg font-bold">Create Account</button></Link>
        </form>
      </div>
    </div>
  );
}
