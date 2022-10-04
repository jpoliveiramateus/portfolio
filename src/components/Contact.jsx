import React, { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div name='contact' className='w-full h-auto sm:h-screen pt-24 bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/a2e552fe-f66b-45dc-96bc-6d7c90c20fa7" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-6'>
          <p className='text-4xl font-bold inline border-b-4 border-[#1C92C3] text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - joaopedromateus6@gmail.com</p>
        </div>
      
        <input
          className="bg-gray-300 rounded w-full p-2 text-gray-700 focus:outline-none focus:shadow-outline" type="text"
          placeholder='Name'
          name='name'
          value={name}
          required
          onChange={({ target }) => setName(target.value)}
        />

        <input
          className="bg-gray-300 my-4 rounded w-full p-2 text-gray-700 focus:outline-none focus:shadow-outline" type="text"
          placeholder='Email'
          name='email'
          value={email}
          required
          onChange={({ target }) => setEmail(target.value)}
        />

        <textarea
          className='bg-gray-300 rounded w-full p-2 text-gray-700 focus:outline-none focus:shadow-outline resize-none'
          name="message"
          rows="10"
          placeholder='Message'
          value={message}
          required
          onChange={({ target }) => setMessage(target.value)}
        />

        <button
          className='text-white border-2 hover:bg-[#1C92C3] hover:border-[#1C92C3] px-4 py-3 my-8 mx-auto disabled:cursor-not-allowed'
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact