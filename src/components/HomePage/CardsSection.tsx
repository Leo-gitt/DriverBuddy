import React from 'react'

const CardsSection = () => {
  return (
    <div className='w-11/12 mx-auto bg-white pb-20 pt-20'>
        <h2 className='text-center text-5xl  mb-20'>Everything you need for the Perfect Road Trip</h2>
        <div className='flex'>
            <div className='border-2 border-red-500 mr-5 p-5 w-1/3 rounded-xl'>
                <p><i className="fa-solid fa-gas-pump text-4xl text-orange-500 mb-5"></i></p>
                <p className='text-xl font-bold  mt-5 mb-8'>Save on Gas</p>
                <p>Compare real-time gas prices and find the best deals on your route</p>
            </div>
            <div className='border-2 border-red-500 mr-5 w-1/3 p-5  rounded-xl'>
                <p><i className="fa-solid fa-gamepad text-4xl text-orange-500 mb-5"></i></p>
                <p className='text-xl font-bold mt-5 mb-8'>Interactive Games</p>
                <p className='text-gray-400'>Make carpooling fun with built-in games and icebreakers</p>
            </div>
            <div className='border-2 border-red-500 w-1/3 p-5  rounded-xl'>
                <p><i className="fa-solid fa-location-dot text-4xl text-orange-500 mb-5"></i></p>
                <p className='text-xl font-bold  mt-5 mb-8'>Discover Places</p>
                <p  className='text-gray-400'>Get personalized recommendations for scenic spots and great eateries</p>
            </div>
        </div>
    </div>
  )
}

export default CardsSection