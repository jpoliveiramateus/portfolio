import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#1C92C3]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>João Pedro Oliveira</h1>
        <div className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Welcome!").pauseFor(1000).deleteAll()
              .typeString("Full Stack Developer.").start();
            }}
          />
        </div>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Technology enthusiast, Full Stack development student at Trybe.
        </p>
        <div className='flex flex-col sm:flex-row sm:gap-4'>
          <Link
            to="work"
            smooth={true}
            duration={1000}
            className='w-max text-white group border-2 px-6 py-3 my-2 flex items-center hover:cursor-pointer hover:bg-[#1C92C3] hover:border-[#1C92C3]'
          >
            View Projects
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </Link>
          <a
            href='https://drive.google.com/file/d/1sx-zAzUQwiBdP8pkQ1KdZPX2yvPAKfSr/view?usp=sharing'
            target="_blank"
            className='w-max text-[#1C92C3] border-2 border-[#1C92C3] px-6 py-3 my-2 flex items-center hover:cursor-pointer hover:bg-white hover:border-white'
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>

    </div>
  )
}

export default Home