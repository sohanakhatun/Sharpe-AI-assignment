import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 bottom-0">
      <div className="container mx-auto text-center">
       
        <p className="mt-2 text-xs">
          © {new Date().getFullYear()} Made by Sohana Khatun
        </p>
      </div>
    </footer>
  );
};

export default Footer;
