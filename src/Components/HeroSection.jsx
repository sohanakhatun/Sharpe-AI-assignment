import React from 'react'
import backgroundImage from "../Images/bg2.jpg";
const HeroSection = () => {
    return (
        <div className="mt-[70px] relative h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute opacity-50 inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Transform Your Transactions Today</h1>
        <p className="text-lg mb-8">Sharpe AI helps streamline and optimize your transaction processes for maximum efficiency.</p>
        <button className="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
      );
}

export default HeroSection