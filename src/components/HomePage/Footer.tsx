import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-800 py-16 px-4">
      <div className="w-[90%] mx-auto flex flex-wrap justify-between text-white">
        {/* Column 1 */}
        <div className="w-full sm:w-1/4 mb-8 sm:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Driver Buddy</h3>
          <p className="text-lg text-gray-400">Making every journey memorable</p>
        </div>
        
        {/* Column 2 */}
        <div className="w-full sm:w-1/4 mb-8 sm:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Explore</h3>
          <ul>
            <li className="text-lg text-gray-400 mb-2">About Us</li>
            <li className="text-lg text-gray-400 mb-2">Features</li>
            <li className="text-lg text-gray-400 mb-2">Road Trips</li>
            <li className="text-lg text-gray-400 mb-2">Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="w-full sm:w-1/4 mb-8 sm:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Company</h3>
          <ul>
            <li className="text-lg text-gray-400 mb-2">Privacy Policy</li>
            <li className="text-lg text-gray-400 mb-2">Terms of Service</li>
            <li className="text-lg text-gray-400 mb-2">FAQ</li>
            <li className="text-lg text-gray-400 mb-2">Blog</li>
          </ul>
        </div>

        {/* Column 4 (Social Media Links) */}
        <div className="w-full sm:w-1/4 text-center sm:text-right">
          <h3 className="text-2xl font-semibold mb-4">Connect</h3>
          <div className="flex justify-center sm:justify-end space-x-6">
            <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
              <i className="fa-brands fa-facebook-f text-3xl"></i>
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
              <i className="fa-brands fa-instagram text-3xl"></i>
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
              <i className="fa-brands fa-twitter text-3xl"></i>
            </a>
          </div>
        </div>
      </div>

      <hr className="w-full mt-10 border-t border-gray-600" />
      
      <div className="text-center mt-8">
        <p className="text-gray-400 text-lg">
          &copy; 2025 Driver Buddy. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
