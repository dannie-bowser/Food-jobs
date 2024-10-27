import React from 'react'
import dish from '../assets/images/soup.jpg'

const Hero = ({title ="BECOME A RENOWED CHEF", 
              subtitle ="Find the cooking jobs that fits your culinary skills, in the world best kitchens"}) => {
  return (
    <div
    className="items-center justify-center"
    style={{ backgroundImage: `url(${dish})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
    >
      <div  className='bg-black bg-opacity-50'>
        <section className=" py-20 mb-1">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-yellow-300 sm:text-8xl md:text-6xl"
          >
            {title}
          </h1>
          <p className="my-4 text-xl text-white">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
    </div>
    </div>
  )
}

export default Hero