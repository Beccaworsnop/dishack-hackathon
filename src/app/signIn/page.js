import Image from 'next/image';
import Link from 'next/link';

export default function signIn() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Navbar */}
      <nav className="absolute top-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-10">
        <div className="ml-8 font-bold text-red-600">Guest Mode</div>
        <ul className="flex space-x-6 mr-8 text-black font-semibold">
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Partner Hospitals</li>
          <li className="cursor-pointer">About us</li>
          <li className="cursor-pointer">Contact us</li>
        </ul>
      </nav>
      
      {/* Sign In Form */}
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg w-96">
        <button className="text-red-600 text-xl font-bold mb-4">&larr;</button>
        <h2 className="text-2xl font-bold text-red-600 text-center">Sign In</h2>
        <p className="text-center text-gray-600 mt-2">Don't have an account yet? <Link href="/accounttype"><span className="text-red-600 font-semibold cursor-pointer">Create one</span></Link></p>
        
        <div className="mt-6">
          <label className="block text-gray-700 font-semibold">Username</label>
          <input type="text" className="w-full p-2 border-b border-gray-400 focus:outline-none focus:border-red-600" />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700 font-semibold">Password</label>
          <input type="password" className="w-full p-2 border-b border-gray-400 focus:outline-none focus:border-red-600" />
        </div>
        
        <button className="w-full mt-6 bg-red-600 text-white font-semibold py-3 rounded-full shadow-md hover:bg-red-700">Sign In</button>
      </div>
    </div>
  );
}