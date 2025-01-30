import React from 'react'

const CardsSection = () => {
  return (
    <div className='w-full min-h-screen mx-auto py-16 bg-gradient-to-r from-cyan-100 to-orange-100'>
      <h2 className='text-center text-6xl font-extrabold mb-16 text-gray-800 tracking-tight'>
        Everything You Need for the Perfect Road Trip
      </h2>
      <div className='flex flex-wrap justify-center gap-8 px-[16px]'>
        {/* Save on Gas Card */}
        <div className='bg-white shadow-xl border border-gray-300 rounded-xl w-full sm:w-1/3 p-8 transform hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-2xl'>
          <p className='text-center'>
            <i className='fa-solid fa-gas-pump text-5xl text-orange-500 mb-5'></i>
          </p>
          <p className='text-2xl font-semibold text-gray-800 mt-5 mb-3'>
            Earn Rewards
          </p>
          <div className='border-b-2 border-orange-500 mb-4'></div>
          <p className='text-gray-600'>
            Get discounts on gas, food and many other things on the road!
          </p>
        </div>

        {/* Interactive Games Card */}
        <div className='bg-white shadow-xl border border-gray-300 rounded-xl w-full sm:w-1/3 p-8 transform hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-2xl'>
          <p className='text-center'>
            <i className='fa-solid fa-gamepad text-5xl text-orange-500 mb-5'></i>
          </p>
          <p className='text-2xl font-semibold text-gray-800 mt-5 mb-3'>
            Interactive Games
          </p>
          <div className='border-b-2 border-orange-500 mb-4'></div>
          <p className='text-gray-600'>
            Make carpooling fun with built-in games and icebreakers.
          </p>
        </div>

        {/* Discover Places Card */}
        <div className='bg-white shadow-xl border border-gray-300 rounded-xl w-full sm:w-1/3 p-8 transform hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-2xl'>
          <p className='text-center'>
            <i className='fa-solid fa-location-dot text-5xl text-orange-500 mb-5'></i>
          </p>
          <p className='text-2xl font-semibold text-gray-800 mt-5 mb-3'>
            Discover Places
          </p>
          <div className='border-b-2 border-orange-500 mb-4'></div>
          <p className='text-gray-600'>
            Get personalized recommendations for scenic spots and great
            eateries.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardsSection
