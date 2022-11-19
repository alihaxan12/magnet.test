import React from 'react'
// import Typed from "react-typed"
import { FadeIn } from 'react-slide-fade-in'
import Typewriter from 'typewriter-effect';
export const Hero = () => {
    return (
        <div className=" w-full h-screen  "  >
            <div className=" bg-slate-900/80   h-screen w-full  mx-auto text-center items-center flex flex-col justify-center ">
                <video className=" "
                    autoPlay
                    loop
                    muted
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',

                        objectFit: 'cover',
                        transferm: 'translate(-50%, -50%)',
                        zIndex: '-1'
                    }}>
                    <source src="/image/bgvid.mp4" type="video/mp4" />
                </video>
                <div className=" text-4xl flex   font-bold text-white">
                    <Typewriter
                        options={{
                            strings: ['We are <spane style=" color: #fca311">Food</span>', 
                                      'We are <spane style=" color: #fca311">Capital Project</span>',
                                      'We are <spane style=" color: #fca311">SMCG</span>',
                                      'We are <spane style=" color: #fca311">Opration</span>',
                                      ],
                            autoStart: true,
                            loop: true,
                          }} 
                    /><span>Magnet Recurit Spacialists</span>
                    </div>
                    <div>
                    <FadeIn
                        from="left"
                        positionOffset={400}
                        triggerOffset={200}
                        delayInMilliseconds={400}
                    >
                        <button className=" text-xl  text-white bg-transparent font-medium border-[4px]   py-1  border-white-500 mx-auto  mt-6 w-[300px] h-[60px] hover:border-[#fca311] ease-in-out duration-150
                                transition    hover:-translate-y-1 hover:scale-110 hover:bg-gray-500/70 
                                ">I AM LOOKING FOR A JOB </button>
                    </FadeIn>
                    <FadeIn
                        from="right"
                        positionOffset={400}
                        triggerOffset={200}
                        delayInMilliseconds={400}
                    >
                        <button className=" text-xl  text-white bg-transparent font-semibold border-[4px]   py-1  border-white-500 mx-auto mt-6 w-[300px] h-[60px] hover:border-[#fca311] ease-in duration-150
                            transition  delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-500/70 
                        ">I'M HIRING</button>
                    </FadeIn>
                </div>
                <div >

                </div>
            </div>
        </div>
    )
}
