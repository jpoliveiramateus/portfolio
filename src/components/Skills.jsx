import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Redux from '../assets/redux.svg';
import TestingLibray from '../assets/testinglibrary.png';
import Node from "../assets/node.png";
import ExpressJS from "../assets/expressjs.png";

const Skills = () => {
  return (
    <div name='skills' className='w-full h-auto sm:h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#1C92C3] '>
            Skills
          </p>
          <p className='py-4'>// These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='pt-4 pb-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
            <p className='my-4'>HTML</p>
          </div>
          <div className='pt-4 pb-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
            <p className='my-4'>CSS</p>
          </div>
          <div className='pt-4 pb-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt='JavaScript icon' />
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='pt-4 pb-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt='React icon' />
            <p className='my-4'>REACT</p>
          </div>
          <div className='pt-4 pb-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Redux} alt='Redux icon' />
            <p className='my-4'>REDUX</p>
          </div>
          <div className='pt-4 pb-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={TestingLibray} alt='TestingLibray icon' />
            <p className='my-4'>TESTING LIBRARY</p>
          </div>
          <div className='pt-4 pb-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt='Node icon' />
            <p className='my-4'>NODE JS</p>
          </div>
          <div className='pt-4 pb-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ExpressJS} alt='ExpressJS icon' />
            <p className='my-4'>EXPRESS JS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
