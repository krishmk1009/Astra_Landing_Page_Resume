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
                        <FaCode style={{ fontSize: "2em" }} className='my-2 text-white' />
                        <h4 className='lg:mx-5 my-2 text-20 font-semibold text-white'>WhatsGPT</h4>
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
                        <FaCode style={{ fontSize: "2em" }} className='my-2 text-white' />
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
                        <FaRocket style={{ fontSize: "2em" }} className='my-2 text-white' />
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