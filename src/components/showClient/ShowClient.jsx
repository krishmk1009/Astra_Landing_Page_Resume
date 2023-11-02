import React from 'react'
import Client1 from './Client1/Client1'
import Client2 from './Client2/Client2'

const ShowClient = () => {
    return (
        <section className='bg-slate-50 pb-5'>

        <div className='max-w-7xl mx-auto '>
            <Client1 />
            <Client2 />

        </div>
        </section>




    )
}

export default ShowClient