import React from 'react'
import AppButton from '../base/AppButton'

const HeroSection = () => {
  return (
    <div className='relative'>
      {/* Background with Gradient Overlay */}
      <div
        className='h-screen bg-cover bg-center bg-fixed'
        style={{
          backgroundImage: "url('../../../public/images/ImageImage.jpg')",
        }}
      >
        <div className='h-full w-full bg-gradient-to-b from-black/40 via-black/30 to-black/60'></div>
      </div>

      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 max-w-4xl p-8 text-center bg-white/10 backdrop-blur-[50px] rounded-3xl shadow-lg border border-white/20'>
        <h1
          className='text-6xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r  animate-fade-in'
          style={{
            backgroundImage:
              'linear-gradient(to right top, #d38e23, #ea744c, #00c8d4, #19d6ca)',
          }}
        >
          Bring entertainment, personalized opportunities, and meaningful
          connections on the road.
        </h1>
        <div className='pt-10'>
          <p className='mb-8 text-xl md:text-2xl font-bold text-white'>
            All with{' '}
            <span
              className='text-transparent bg-clip-text animate-fade-in'
              style={{
                backgroundImage:
                  'linear-gradient(to right top, #00c8d4, #19d6ca, #d38e23, #ea744c)',
              }}
            >
              Driver Buddy
            </span>
          </p>
        </div>
        <div className='text-center font-bold '>
          <AppButton
            showIcon={true}
            width='20%'
            height='3rem'
            borderRadius='50px'
          >
            Register and get rewards
          </AppButton>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
