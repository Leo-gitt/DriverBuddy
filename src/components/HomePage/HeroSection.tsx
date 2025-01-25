import React from "react";
import AppButton from "../base/AppButton";

const HeroSection = () => {
  return (
    <div className="relative">
      <div
        className="h-screen bg-cover bg-center bg-fixed blur-sm"
        style={{
          backgroundImage: "url('../../../public/images/ImageImage.jpg')",
        }}
      ></div>
      <div className="absolute top-1/3 left-[4%] w-11/12 p-10 text-center">
        <h1 className="text-7xl bg-transparent text-center font-bold text-white">
          Turn Every Drive into an Adventure
        </h1>
        <p className="text-2xl mt-5 mb-5 text-white">
          Discover hidden gems, save money on gas, and make carpooling fun---all{" "}
        </p>
        <p className="mb-10 text-2xl text-white">with Driver Buddy</p>
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
