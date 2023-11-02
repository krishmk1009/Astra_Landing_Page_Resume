import React from 'react'
import { FaFile, FaRocket, FaCode, FaDownload } from 'react-icons/fa';

import './Metrics.css'
const Metrics = () => {
    return (
        <div className='bg-customColor  relative py-5 lg:py-20 '>

            <div className='lg:py-10 px-1'>
                <h2 className='text-white text-center   metric-heading font-my-proxi-nova'>
                    Exploring My Projects
                </h2>
                <p className='text-white text-center metric-subheading py-4'  >
                    An Extensive Collection of Diverse Projects Spanning Both My Academic Journey and Professional Ventures

                </p>
            </div>
            <div className='lg:flex justify-center'>
                <div className='lg:w-340 mx-8 my-5 lg:mb-12 '>
                <a href='https://whatsgpt.tech/' target='blank'>

                
                    <div className='inline-flex' >
                    <svg
      fill="white"
      viewBox="0 0 16 16"
      height="3em"
      width="3em"
      
    >
      <path d="M14 1a1 1 0 011 1v8a1 1 0 01-1 1H4.414A2 2 0 003 11.586l-2 2V2a1 1 0 011-1h12zM2 0a2 2 0 00-2 2v12.793a.5.5 0 00.854.353l2.853-2.853A1 1 0 014.414 12H14a2 2 0 002-2V2a2 2 0 00-2-2H2z" />
      <path d="M3 3.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM3 6a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 6zm0 2.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" />
    </svg>
                        <h4 className='mx-5 my-2 text-20 font-semibold text-white'>WhatsGPT</h4>
                    </div>
                    <p className='lg:py-2 text-white text-17'>
                        Developed an AI chatbot with WhatsApp integration, garnering 3000+ users.
                        Recognized for innovative chatbot development in a news article.


                    </p>
                    </a>

                </div>
                <div className='lg:w-340	 mx-8 my-5 lg:mb-12'>
                <a href='https://www.tradingcompass.in/' target='blank'>

               
                    <div className='inline-flex' >
                    <svg
      viewBox="0 0 1024 1024"
      fill="white"
      height="3em"
      width="3em"

    >
      <path d="M904 747H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM165.7 621.8l39.7 39.5c3.1 3.1 8.2 3.1 11.3 0l234.7-233.9 97.6 97.3a32.11 32.11 0 0045.2 0l264.2-263.2c3.1-3.1 3.1-8.2 0-11.3l-39.7-39.6a8.03 8.03 0 00-11.3 0l-235.7 235-97.7-97.3a32.11 32.11 0 00-45.2 0L165.7 610.5a7.94 7.94 0 000 11.3z" />
    </svg>
                        <h4 className='mx-5 my-2 text-20 font-semibold text-white'>Trading Compass
                        </h4>
                    </div>
                    <p className='py-2 text-white text-17'>
                        Contributed as a front-end developer to create a user-friendly financial data visualization platform.
                        Utilized graphical tools to analyze market data for easy analysis.

                    </p>
                    </a>
                </div>
                <div className='lg:w-340	 mx-8 my-5 lg:mb-12'>
                
                    <div className='inline-flex' >
                    <svg
      viewBox="0 0 24 24"
      fill="white"
      height="3em"
      width="3em"
      
    >
      <path d="M19 2H9c-1.103 0-2 .897-2 2v5.586l-4.707 4.707A1 1 0 003 16v5a1 1 0 001 1h16a1 1 0 001-1V4c0-1.103-.897-2-2-2zm-8 18H5v-5.586l3-3 3 3V20zm8 0h-6v-4a.999.999 0 00.707-1.707L9 9.586V4h10v16z" />
      <path d="M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 1h2v2H7z" />
    </svg>
                        <h4 className='mx-5 my-2 text-20 font-semibold text-white'>Freelon.in
                        </h4>
                    </div>
                    <p className='py-2 text-white text-17'>
                        Led the successful implementation of a salon booking platform in Ahmednagar.
                        Expanded the user base by partnering with 20+ professional salons.

                    </p>

                </div>
            </div>
            <div className='lg:absolute  lg:flex hidden  justify-center lg:w-full'>


                <div className='bg-white w-64 h-52 relative mx-5 rounded-lg shadow-2xl  '>
                    <div className='border-b-2 border-slate-200'>

                        <img width={'200px'} className='mx-auto p-5' src='https://s.w.org/style/images/about/WordPress-logotype-wordmark.png' />
                    </div>
                    <div className='p-10'>
                        <h3 className='text-center text-2xl font-bold'  >
                            80%
                        </h3>
                        <p className='text-center my-1 '>
                            out of 100
                        </p>
                    </div>
                </div>
                <div className='bg-white w-64 h-52 relative mx-5 rounded-lg shadow-2xl '>
                    <div className='border-b-2 border-slate-200'>

                        <img width={'200px'} className='mx-auto p-5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/1024px-Node.js_logo_2015.svg.png' />
                    </div>
                    <div className='p-10'>
                        <h3 className='text-center text-2xl font-bold'  >
                            75%
                        </h3>
                        <p className='text-center my-1'>
                            out of 100
                        </p>
                    </div>
                </div>
                <div className='bg-white w-64 h-52 relative mx-5 rounded-lg shadow-2xl  '>
                    <div className='border-b-2 border-slate-200'>

                        <img width={'170px'} className='mx-auto p-5' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxk4d6NYgjQDjwikqC47XbWKl-7-kNl6ZAw&usqp=CAU' />
                    </div>
                    <div className='p-10'>
                        <h3 className='text-center text-2xl font-bold'  >
                            85%
                        </h3>
                        <p className='text-center my-1'>
                            out of 100
                        </p>
                    </div>
                </div>
                <div className='bg-white w-64 h-52 relative mx-5 rounded-lg shadow-2xl  '>
                    <div className='border-b-2 border-slate-200 '>

                        <img width={'200px'} className='mx-auto p-5' src='https://upload.wikimedia.org/wikipedia/commons/f/f5/ETH_logo_landscape_%28gray%29.png' />
                    </div>
                    <div className='p-10'>
                        <h3 className='text-center text-2xl font-bold '  >
                            80%
                        </h3>
                        <p className='text-center my-1'>
                            out of 100
                        </p>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Metrics