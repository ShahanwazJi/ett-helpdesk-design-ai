
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-800 text-neutral-300 py-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs mb-2 md:mb-0">
            &copy; {currentYear} Department of Telecommunications, Government of India. All Rights Reserved.
          </div>
          <div className="text-xs">
            <span>Terms of Service</span>
            <span className="mx-2">|</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
