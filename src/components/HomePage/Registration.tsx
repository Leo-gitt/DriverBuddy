import React from "react";
import AppButton from "../base/AppButton";

const Registration = () => {
  return (
    <div className="relative w-full min-h-screen mx-auto py-16 bg-gradient-to-r from-cyan-100 to-orange-100">
      {/* Sparks and Lines Effect Container */}
      <div className="absolute inset-0 z-0">
        <div className="spark-lines"></div>
        <div className="sparkles"></div>
      </div>

      <div className="w-full max-w-lg mx-auto p-8 bg-white rounded-3xl shadow-xl z-10 relative transform-gpu perspective-1000">
        <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-10">
          Register for Early Access
        </h2>

        <form className="flex flex-col space-y-8">
          {/* Name Input */}
          <div className="relative">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              className="w-full p-4 bg-transparent border-2 border-gray-300 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 ease-in-out"
              placeholder="John Doe"
              name="name"
              id="name"
            />
            <div className="absolute inset-y-0 right-4 flex items-center justify-center text-gray-400">
              <i className="fa-solid fa-user"></i>
            </div>
          </div>

          {/* Email Input */}
          <div className="relative">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              className="w-full p-4 bg-transparent border-2 border-gray-300 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 ease-in-out"
              placeholder="john@example.com"
              name="email"
              id="email"
            />
            <div className="absolute inset-y-0 right-4 flex items-center justify-center text-gray-400">
              <i className="fa-solid fa-envelope"></i>
            </div>
          </div>

          {/* Phone Input */}
          <div className="relative">
            <label
              htmlFor="phone"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <input
              type="text"
              className="w-full p-4 bg-transparent border-2 border-gray-300 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 ease-in-out"
              placeholder="(555) 123-4567"
              name="phone"
              id="phone"
            />
            <div className="absolute inset-y-0 right-4 flex items-center justify-center text-gray-400">
              <i className="fa-solid fa-phone-alt"></i>
            </div>
          </div>

          <div className="text-center">
            <AppButton
              borderRadius="30px"
              width="100%"
              height="3.5rem"
            >
              Register Now
            </AppButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
