import React from 'react'
import Hero from '../components/Hero/Hero'
import ShowClient from '../components/showClient/ShowClient'
import Cards from '../components/Cards/Cards'
import Features from '../components/Feature/Features'
import Metrics from '../components/Metrics/Metrics'
import Section5 from '../components/Section5/Section5'
import Last from '../components/LastSection/Last'

const Home = () => {
  return (
    <>
        <Hero/>
        <ShowClient/>
        <Cards />
        <Features/>
        <Section5 />
        <Metrics/>
       <Last/>
    </>
  )
}

export default Home