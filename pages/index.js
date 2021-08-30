import React from 'react'
import { Nav } from '../components/Nav'
import { HeroSection } from '../components/HeroSection'
import {ContentSection} from '../components/ContentSection'
import {Footer}  from '../components/Footer'
import { TechSection } from '../components/TechSection'

export const Homepage = () => {
  return (<>
      <main className="dark:bg-gray-800 font-mitr bg-white relative overflow-hidden">
        <Nav />
        <HeroSection />
        <ContentSection />
        <TechSection />
        <Footer />
      </main>
    </>
  )
}

export default Homepage;