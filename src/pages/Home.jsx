import React from 'react'
import Contact from './Contact';
import Hero from '../components/Hero';
import PopularItems from '../components/PopularItems';

function Home() {
  return (
    <div>
      <Hero />
      <PopularItems />
      <Contact />
    </div>
  )
}

export default Home
