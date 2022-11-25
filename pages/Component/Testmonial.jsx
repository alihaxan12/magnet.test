
import React from 'react'
// import SlidText from './SlidText'
// import SlideImage from './SlideImage'
import Image from 'next/image'

const Testmonial = () => {
    return ( 
        <div className='w-full'>
            <div className='bg-[#E5E5E5]'>
                <Image src='/image/upwave.svg'
                   width={1080}
                   height={200}
                   layout="responsive"
                   objectFit='cover'
                   quality={100} 
                   alt='image'/>
            </div>
            <div className='justify-center bg-[#14213d]'>
                <h1 className='text-5xl text-center font-bold text-white'>Testimonials</h1>
            </div>
            <div className='md:w-full py-4 m-auto bg-[#14213d]'>
                {/* <SlidText/> */}
            </div>
            <div className='md:w-full '>
                <div className='md:w-[1080px] mx-auto'>
                {/* <SlideImage/> */}
                </div>
       
            </div>
        </div>
     );
}
 
export default Testmonial;