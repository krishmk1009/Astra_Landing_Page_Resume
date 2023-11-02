import React from 'react'
import './Cards.css'
import cardData from './CardData';
import { FaFile, FaRocket, FaCode, FaDownload } from 'react-icons/fa';
const Cards = () => {

  const styleObj = {
    fontSize: '2em', color: "#bdbdbd"
  }

  return (
    <div className='lg:px-16 lg:py-5 px-10 lg:flex justify-center border-y-0 border-black'>

      {cardData.map((card, index) => (
        <div key={index} className='lg:py-5 py-4 lg:px-4 lg:w-1/4 '>
          {card.icon === 'FaDownload' && <svg
            fill="gray"
            viewBox="0 0 16 16"
            height="2em"
            width="2em"

          >
            <path d="M1 8a7 7 0 1014 0A7 7 0 001 8zm15 0A8 8 0 110 8a8 8 0 0116 0zM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312z" />
          </svg>



          }
          {card.icon === 'FaFile' && <svg fill="none" viewBox="0 0 15 15" height="2em" width="2em" >
            <path
              fill="gray"
              fillRule="evenodd"
              d="M0 1.5A.5.5 0 01.5 1h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm4 0a.5.5 0 01.5-.5h10a.5.5 0 010 1h-10a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-4 3A.5.5 0 01.5 7h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm4 0a.5.5 0 01.5-.5h10a.5.5 0 010 1h-10a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-4 3a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm4 0a.5.5 0 01.5-.5h10a.5.5 0 010 1h-10a.5.5 0 01-.5-.5z"
              clipRule="evenodd"
            />
          </svg>}
          {card.icon === 'FaRocket' &&

            <svg
              fill="gray"
              viewBox="0 0 16 16"
              height="2em"
              width="2em"

            >
              <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318z" />
              <path d="M16 8A8 8 0 110 8a8 8 0 0116 0zM1 8a7 7 0 1014 0A7 7 0 001 8z" />
            </svg>

          }
          {card.icon === 'FaCode' &&

            <svg
              fill="gray"
              viewBox="0 0 16 16"
              height="2em"
              width="2em"

            >
              <path d="M1 8a7 7 0 1014 0A7 7 0 001 8zm15 0A8 8 0 110 8a8 8 0 0116 0zM6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306z" />
            </svg>

          }
          <h4 className='lg:mt-5 mt-5 card-heading font-my-proxi-nova-regular text-20 font-semibold'>{card.title}</h4>
          <p className='lg:my-2 card-desc text-17 font-thin'>{card.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Cards
