import React from "react";
import AppButton from "../base/AppButton";

const Registration = () => {
  return (
    <div className="w-1/3 mx-auto p-10">
      <h2 className="text-center text-3xl">Register for Early Access</h2>
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-5">
          Name
        </label>
        <input
          type="text"
          className="mb-10 p-3 rounded-xl"
          placeholder="John Doe"
          name="name"
          id="name"
        />
        <label htmlFor="email" className="mb-5">
          Email
        </label>
        <input
          type="text"
          className="mb-10 p-3 rounded-xl"
          placeholder="john@example.com"
          name="email"
          id="email"
        />
        <label htmlFor="phone" className="mb-5">
          Phone Number
        </label>
        <input
          type="text"
          className="mb-10 p-3 rounded-xl"
          placeholder="John Doe"
          name="phone"
          id="phone"
        />
      </div>
      <div className="text-center ">
        <AppButton borderRadius="20px" width="100%" height="3rem">
          Register Now
        </AppButton>
      </div>
    </div>
  );
};

export default Registration;
