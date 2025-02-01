import { useState, useEffect, useRef } from 'react'
// import React, { useState, useEffect, useRef } from 'react'

const ExploreYourJourney = () => {
  const [isVisible, setIsVisible] = useState(false)
  const headingRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true) // Trigger the animation when in view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in the viewport
      }
    )

    const currentHeadingRef = headingRef.current;
    if (currentHeadingRef) {
      observer.observe(currentHeadingRef)
    }

    return () => {
      if (currentHeadingRef) {
        observer.unobserve(currentHeadingRef)
      }
    }
  }, [])

  return (
    <div className='w-full min-h-screen mx-auto py-16 bg-gradient-to-r from-cyan-100 to-orange-100'>
      <div className='w-11/12 max-w-6xl mx-auto'>
        {/* Heading */}
        <h2
          ref={headingRef}
          className={`text-center text-5xl md:text-7xl font-extrabold text-gray-800 mb-12 tracking-wide 
            ${isVisible ? 'animate-jump' : ''} 
            hover:text-orange-500`} // Added hover color change
        >
          Explore Your Journey
        </h2>

        {/* Map Container */}
        <div className='overflow-hidden rounded-3xl shadow-xl border border-gray-200 transform transition-all duration-500 hover:scale-105'>
          <iframe
            className='w-full h-[450px] md:h-[600px] rounded-xl'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.3405697499247!2d21.42766867648227!3d41.992965958213986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415b574833cff%3A0x7ba775c4e2602c03!2sMacedonia%20St%2010%2C%20Skopje%201000!5e0!3m2!1sen!2smk!4v1737584609324!5m2!1sen!2smk'
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>

        {/* Decorative Elements */}
        <div className='relative'>
          {/* Optional Text Overlay */}
          <p className='mt-[20px] text-center text-gray-800 text-4xl md:text-5xl font-extrabold opacity-90'>
            Discover Your Next Adventure
          </p>
        </div>
      </div>
    </div>
  )
}

export default ExploreYourJourney
