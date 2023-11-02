import React from 'react';
import './Feature.css';

const Features = () => {
    return (
        <div className='lg:flex lg:justify-center lg:items-center lg:h-screen '>
            <div className='lg:mx-auto'>
                <div className='py-10 text-center'>
                    <h2 className='text-38 font-my-proxi-nova px-4 leading-10'>
                    Professional Journey Highlights
                    </h2>
                    <p className='feaure-subheading px-4 my-3 lg:w-1/2 mx-auto'>
                    My Professional Odyssey: Exploring Roles, Gaining Knowledge, and Thriving in Various Work Environments.
                    </p>
                </div>

                <div className='lg:Feature lg:grid justify-content: center; align-items: center; px-20'>
                    <div className='col-start-1 col-end-3  '>
                        <div className='lg:my-10 lg:px-10 mb-4'>
                            <h4 className='text-20 font-semibold lg:py-3'>
                            Graduate Engineer Trainee

                            </h4>
                            <p className='text-17'>
                            Currently undergoing a comprehensive training program to develop a strong foundation in Vodafone Intelligent Solutions.


                            </p>
                            <p className='text-13 py-3'>August 2023 - Currently Present</p>
                        </div>
                        <div className='lg:my-10 lg:px-10 my-4'>
                            <h4 className='text-20 font-semibold lg:py-3'>
                            Web Developer at Wealo.in

                            </h4>
                            <p className='text-17'>
                            Created the website architecture, Designed and managed the website backend, including database and server integration.


                            </p>
                            <p className='text-13 py-3'>December 2022 - February 2023</p>
                        </div>
                    </div>
                    <div className='col-start-4 col-end-9'>
                        <img className='w-full' src='/src/assets/feature-res.png' />
                    </div>
                    <div className='col-start-10 col-end-12'>
                        <div className='col-start-1 col-end-3'>
                            <div className='lg:my-10 lg:px-10 my-4'>
                                <h4 className='text-20 font-semibold lg:py-3'>
                                Wordpress Developer

                                </h4>
                                <p className='text-17'>


                                Identified and reported bugs, collaborating with the development team for timely resolution and a good user experience.
                                </p>
                                <p className='text-13 py-3'>September 2022 - February 2023</p>
                            </div>
                            <div className='lg:my-10 lg:px-10 my-4'>
                                <h4 className='text-20 font-semibold lg:py-3'>
                                Co-founder, Freelon
                              </h4>
                                <p className='text-17'>

                                Developed and operated a platform for pre-booking seats in parlors and salons, with 20+ registered professional salons.




                                </p>
                                <p className='text-13 py-3'>August 2021 - September 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
