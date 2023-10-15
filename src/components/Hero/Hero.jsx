import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Hero.css"
const Hero = () => {
  return (
    <div className='bg-gradient-to-r from-blue-500 to-purple-500 to-purple-700'>
      <Navbar />
      <div className=' hero-section max-w-7xl mx-auto flex flex-col my-14 text-white '>

        <h1 className='	mx-auto lg:mt-10 text-3xl lg:text-5xl hero-heading font-bold	'>
          The Most Popular Theme of All Time

        </h1>
        <p className='hero-para mx-auto my-5 lg:text-xl'>Fast, Lightweight, and Highly Customizable WordPress Theme
        </p>
        <div>

          <div className='btn-wrapper my-5 lg:my-10 mx-auto flex justify-center'>
            <button className='bg-yellow-400 py-4 text-base px-10 rounded-full text-black'>DOWNLOAD NOW</button>
          </div>
        </div>

        <img className='hidden lg:flex' src='https://wpastra.com/wp-content/uploads/2021/12/astra-templates.png' />


      </div>
    </div>
  )
}

export default Hero