import React from "react";

const HowItWorks = () => {
  return (
    <div className="relative">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-fixed blur-lg"
        style={{
          backgroundImage: "url('../../../public/images/ImageImage.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Overlay for Better Contrast */}
      <div className="relative bg-black bg-opacity-60 p-16 md:p-24 text-white">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-12 text-gray-100">
          How It Works
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">

          {/* Step 1: Download App */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 p-6 mb-4">
              <i className="fa-solid fa-download text-5xl text-white"></i>
            </div>
            <p className="text-lg font-semibold text-gray-100 mb-2">Download the App</p>
            <p className="text-gray-300">
              Start by downloading the app from the app store and install it on your phone.
            </p>
          </div>

          {/* HR line */}
          <hr className="md:h-40 w-1 md:border-l-4 border-t-4 border-white mx-4" />

          {/* Step 2: Set Destination */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 p-6 mb-4">
              <i className="fa-regular fa-map text-5xl text-white"></i>
            </div>
            <p className="text-lg font-semibold text-gray-100 mb-2">Set Your Destination</p>
            <p className="text-gray-300">
              Enter your destination and let the app find the best route for you.
            </p>
          </div>

          {/* HR line */}
          <hr className="md:h-40 w-1 md:border-l-4 border-t-4 border-white mx-4" />

          {/* Step 3: Start Your Journey */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 p-6 mb-4">
              <i className="fa-solid fa-location-arrow text-5xl text-white"></i>
            </div>
            <p className="text-lg font-semibold text-gray-100 mb-2">Start Your Journey</p>
            <p className="text-gray-300">
              Now, follow the directions and enjoy your smooth road trip experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
