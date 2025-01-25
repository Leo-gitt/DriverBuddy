import React from "react";

const HowItWorks = () => {
  return (
<div className="relative">
  {/* Parallax Background */}
  <div
    className="absolute inset-0 bg-fixed blur-sm"
    style={{
      backgroundImage: "url('../../../public/images/ImageImage.jpg')",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>

  {/* Content Overlay */}
  <div className="relative bg-black bg-opacity-50 p-10">
    <h2 className="text-4xl font-bold text-white text-center mb-10">
      How it works
    </h2>
    <div className="flex justify-center items-center">
      <div className="rounded-full bg-gray-500 w-24 h-24 flex justify-center items-center">
        <i className="fa-solid fa-download text-5xl text-orange-500"></i>
      </div>
      <hr className="w-[20%] mx-4 border-white" />
      <div className="rounded-full bg-gray-500 w-24 h-24 flex justify-center items-center">
        <i className="fa-regular fa-map text-5xl text-orange-500"></i>
      </div>
      <hr className="w-[20%] mx-4 border-white" />
      <div className="rounded-full bg-gray-500 w-24 h-24 flex justify-center items-center">
        <i className="fa-solid fa-location-arrow text-5xl text-orange-500"></i>
      </div>
    </div>
  </div>
</div>

  );
};

export default HowItWorks;
