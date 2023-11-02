import React from 'react'
import './Cards.css'
import cardData from './CardData';
import { FaFile, FaRocket, FaCode, FaDownload } from 'react-icons/fa';
const Cards = () => {

  const styleObj = {
    fontSize: '2em',color:"#bdbdbd"
  }

  return (
    <div className='lg:px-16 lg:py-5 px-10 lg:flex justify-center border-y-0 border-black'>
    {cardData.map((card, index) => (
      <div key={index} className='lg:py-5 py-4 lg:px-4 lg:w-1/4 '>
        {card.icon === 'FaDownload' && <FaDownload style={styleObj} />}
        {card.icon === 'FaFile' && <FaFile style={styleObj} />}
        {card.icon === 'FaRocket' && <FaRocket style={styleObj} />}
        {card.icon === 'FaCode' && <FaCode style={styleObj} />}
        <h4 className='lg:mt-5 mt-5 card-heading font-my-proxi-nova-regular text-20 font-semibold'>{card.title}</h4>
        <p className='lg:my-2 card-desc text-17 font-thin'>{card.description}</p>
      </div>
    ))}
  </div>
  )
}

export default Cards
