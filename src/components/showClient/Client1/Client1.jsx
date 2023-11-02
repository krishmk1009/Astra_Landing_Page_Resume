import React from 'react'
import './Client1.css'
const Client1 = () => {
    return (
        <div className='lg:mb-20 mt-10'>


            <div className='flex justify-center text-center'>

                <p className='client1-para mb-12 px-10  block'>
                    <span className='font-bold tracking-wide'>
                        Frontend Developer  &nbsp;
                    </span>
                    Ready to Elevate Your Team

                </p>

            </div>
            <div className='lg:flex hidden lg:justify-center text-center mx-auto '>
                <div className='client-img-div my-2'>
                    <img className='client-img mx-auto' src='https://e7.pngegg.com/pngimages/362/862/png-clipart-react-logo-text-icons-logos-emojis-tech-companies.png' />
                </div>
                <div className='client-img-div my-2'>

                    <img className='client-img mx-auto' src='https://s.w.org/style/images/about/WordPress-logotype-wordmark.png' />
                </div>
                <div className='client-img-div my-2  '>
                    <img className='client-img mx-auto'   src='https://cdn.icon-icons.com/icons2/2248/PNG/512/material_ui_icon_137419.png' />
                </div>
                <div className='client-img-div my-2'>
                    <img className='client-img mx-auto' src='https://cdn.iconscout.com/icon/free/png-256/free-tailwind-css-5285308-4406745.png?f=webp' />

                </div>

                <div className='client-img-div my-2'>

                    <img className='client-img  mx-auto'  src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/TypeScript_Logo.svg/1200px-TypeScript_Logo.svg.png' />


                </div>

            </div >
        </div >
    )
}

export default Client1