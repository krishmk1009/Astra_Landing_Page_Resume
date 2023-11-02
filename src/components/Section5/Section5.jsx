import React from 'react'

const Section5 = () => {
    return (
        <section className='section-5-main py-10 bg-slate-50'>

            <div className='section-5-main-heading'>
                <p className='text-center text-xl font-light	'>
                    My Proficient Full Stack Development Technical Skills

                </p>
            </div>

            <div className='section-5-images-line lg:flex justify-center pr-5 lg:py-5'>
                <img className='mx-4' src='/src/assets/skills1.png' alt='img-line' />
                <img className='mx-4' src='/src/assets/skills2.png' alt='img-line' />
                <img className='mx-4' src='/src/assets/skills3.png' alt='img-line' />
            </div>

            <div className='section-5-content lg:flex justify-center lg:mx-20 lg:my-20'>

                <div className='lg:mx-20 lg:block hidden'>
                    <img src='/src/assets/news.png' />
                </div>
                <div className='lg:w-1/2 mt-4' >
                    <div className='bg-white inline-block '>
                        <img className='p-4 px-5' src='https://cdn.shortpixel.ai/spai/w_77+q_lossless+ret_img/wpastra.com/wp-content/uploads/2020/11/icon-128x128-1-1.jpg' />
                    </div>
                    <h2 className='text-32 px-5 font-my-proxi-nova text-fontColor lg:w-2/3 leading-10'>
                        Tech Enthusiast &
                        WordPress Developer





                    </h2>
                    <p className='lg:w-4/5 leading-7 px-5 lg:mt-3 text-17 text-section5Para'>

                        I am an experienced web developer with expertise in the MERN stack, WordPress development, Linux command line, and GitHub. I have a strong track record of leading ground-level projects and delivering high-quality results. My portfolio website will reflect my technical skills and leadership experience, demonstrating my commitment to creating innovative, user-friendly web solutions.
                    </p>
                </div>
            </div>


        </section>
    )
}

export default Section5