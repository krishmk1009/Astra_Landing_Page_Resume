import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Hero.css"
import { FaDownload } from 'react-icons/fa';
const styleObj = {
  fontSize: '1em', color: "black" ,marginRight:"10px"
}
const Hero = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-600   to-purple-600 to-purple-700'>
      <Navbar />
      <div className=' hero-section max-w-7xl mx-auto flex flex-col my-12 text-white '>

        <h1 className='	mx-auto lg:mt-10 text-3xl lg:text-54 font-my-proxi-nova hero-heading font-bold	py-2 '>
        My Web Developer Application



        </h1>
        <p className='hero-para mx-auto my-5 lg:text-23 font-my-proxi-nova-regular'>Presented by Krushna, a 2023 Computer Science Graduate
        </p>
        <div>

          <div className='btn-wrapper my-5 lg:my-8 mx-auto flex justify-center'>
            <button className='bg-yelloColor  py-4 px-10 rounded-full text-black flex items-center'>
              <FaDownload style={styleObj} />
              <span className='ml-2 text-15 font-semibold'>DOWNLOAD RESUME</span>
            </button>
          </div>

        </div>

        <img className='hidden  px-10 lg:flex' src='/src/assets/main-hero.png ' />
        {/* src/assets/main-hero.png */}

      </div>
    </div>
  )
}

export default Hero