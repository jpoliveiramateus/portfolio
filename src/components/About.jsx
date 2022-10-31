import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#1C92C3]'>About</p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm João Pedro, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
            I'm a Full Stack developer, passionate about programming since the first "Hello, World!",
            I'm specializing in Back-end development, looking for new challenges and learning.
            Some of my projects are below. Feel free to contact me, my networks are available here!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About