import React from 'react'
import {Hero} from './Hero'
import {CompanyIntro} from './CompanyIntro'
import {ClientCandidate} from './ClientCandidate'

import {Footer} from './Footer'
export const HomePage = () => {
  return (
    <div>
        <Hero/>
        <CompanyIntro/>
        <ClientCandidate/>

        <Footer/>
    </div>
  )
}
