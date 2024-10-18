import React from 'react'

const Hero = ({title ="Become a renowed Chef", 
              subtitle ="Find the cooking jobs that fits your culinary skills, in the world best kitchens"}) => {
  return (
    <div>
        <section class="bg-green-400 py-20 mb-4">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div class="text-center">
          <h1
            class="text-4xl font-extrabold text-green-900 sm:text-5xl md:text-6xl"
          >
            {title}
          </h1>
          <p class="my-4 text-xl text-green-800">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero