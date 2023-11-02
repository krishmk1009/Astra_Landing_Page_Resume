import React from 'react'
import "./Client2.css"
import { Rating } from 'react-simple-star-rating'

const Client2 = () => {
  return (
    <div className='lg:my-10 '>

      <div className='client2-div flex justify-center  '>
        <h3 className='font-bold client2-heading text-center' >
          Frontend Developer with Experience in 4+ Startups

        </h3>


      </div>
      <div className='lg:flex justify-center'>

        <div className='lg:inline-flex lg:mx-5  lg:my-10 my-5  mx-5 border rounded py-5 bg-white '>
          <div>
            <img height={"40px"} width={"250px"} className=' px-10   h-12 mx-auto' src='https://cdn.shortpixel.ai/spai/w_209+q_lossless+ret_img/wpastra.com/wp-content/uploads/2021/12/wp-logo.png'


            />

            <p className='text-center pt-2 font-semibold' >
              Multiple Projects

            </p>
            <img height={"30px"} width={"230px"} className=' px-10  my-2 mx-auto' src='https://t3.ftcdn.net/jpg/05/40/06/92/360_F_540069216_AiqmGY0nEt8IhFgjIoCG11IVQG3IoobK.jpg' />

          </div>
        </div>
        <div className='lg:inline-flex lg:mx-5 mx-5  lg:my-10  border rounded py-5 bg-white '>
          <div>
            <img height={"100px"} className=' px-10  h-12 mx-auto' src='https://ww2.freelogovectors.net/wp-content/uploads/2023/02/react-logo-freelogovectors.net_.png?lossy=1&w=2560&ssl=1'


            />

            <p className='text-center pt-2 font-semibold'>
              Good hands on Design


            </p>
            <img height={"30px"} width={"230px"} className=' px-10  my-2 mx-auto ' src='https://t3.ftcdn.net/jpg/05/40/06/92/360_F_540069216_AiqmGY0nEt8IhFgjIoCG11IVQG3IoobK.jpg' />
          </div>

        </div>
        <div className='inline-flex mx-5   my-10  border rounded py-5 bg-white'>
          <div className='lg:grid grid-cols-2 gap-2 px-4'>

            <div className='col-start-1 col-end-3 py-3'>
              <img className=' px-4  rounded-full h-20 ' src='https://i.ibb.co/ZgXg3ZV/1687869097743-modified.png' />
              <p className='lg:text-center mt-2 font-semibold text-18'>Krushna Modhave
              </p>

            </div>
            <div className='col-start-4 col-end-12'>
              <p className='lg:w-96	 text-18	'>

                <span className='font-bold'>A MERN stack developer with a passion for Coding ,Startup   </span> and a proven track record in leading startups. I make user-friendly websites and apps and have experience with startups.


              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Client2