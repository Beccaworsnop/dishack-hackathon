import Image from 'next/image';
import Link from 'next/link';

export default function accountType() {
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
      
      {/* Main Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold text-red-600">iDonate</h1>
        <p className="text-lg text-yellow-300 mt-2">Seamless Blood Donation & Smart Conservation</p>
        
        <div className="mt-6 flex flex-col items-center space-y-4">
          <Link href="/register"><button className="px-8 py-3 bg-white text-red-600 font-semibold rounded-full shadow-md hover:bg-gray-200">Donor</button></Link>
          <Link href="/registerhospital"><button className="px-8 py-3 bg-red-600 text-white font-semibold rounded-full shadow-md hover:bg-red-700">Hospital</button></Link>
        </div>
      </div>
    </div>
  );
}