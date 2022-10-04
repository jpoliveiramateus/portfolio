import React from 'react'

function Project({ img, title, desc, demo, code }) {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
    >
      <div className='opacity-0 group-hover:opacity-100 duration-300'>
        <span className='text-2xl font-bold text-white tracking-wider'>
          {title}
        </span>
        <p>
          {desc}
        </p>
        <div className='pt-4 text-center flex justify-center items-center gap-2'>
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer">
              <button className='font-bold text-white group border-2 px-6 py-3 hover:cursor-pointer hover:bg-white hover:border-white hover:text-[#1C92C3]'>
                Demo
              </button>
            </a>
          )}
          <a href={code} target="_blank" rel="noreferrer">
            <button className='font-bold text-white group border-2 px-6 py-3 hover:cursor-pointer hover:bg-white hover:border-white hover:text-[#1C92C3]'>
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
