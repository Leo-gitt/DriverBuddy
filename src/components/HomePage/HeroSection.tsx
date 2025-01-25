import React from "react";
import AppButton from "../base/AppButton";

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Background with Gradient Overlay */}
      <div
        className="h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('../../../public/images/ImageImage.jpg')",
        }}
      >
        <div className="h-full w-full bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
      </div>

    
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 max-w-4xl p-8 text-center bg-white/10 backdrop-blur-md rounded-3xl shadow-lg border border-white/20">
        <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-500 animate-fade-in">
          Turn Every Drive into an Adventure
        </h1>
        <p className="text-lg md:text-2xl mt-6 mb-4 text-gray-200 drop-shadow-sm">
          Discover hidden gems, save money on gas, and make carpooling fun
        </p>
        <p className="mb-8 text-xl md:text-3xl font-bold text-white">
          All with <span className="text-cyan-500">Driver Buddy</span>
        </p>
        <div className="text-center font-bold">
          <AppButton
            showIcon={true}
            width="20%"
            height="3rem"
            borderRadius="50px"
          >
            Download the App
          </AppButton>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
