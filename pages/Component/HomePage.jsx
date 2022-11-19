import React from 'react'
import {Hero} from './Hero'
import {CompanyIntro} from './CompanyIntro'
import {ClientCandidate} from './ClientCandidate'
import Testmonial from './Testmonial'
import {Footer} from './Footer'
export const HomePage = () => {
  return (
    <div>
        <Hero/>
        <CompanyIntro/>
        <Testmonial/>
        <ClientCandidate/>
        
        <Footer/>
    </div>
  )
}
