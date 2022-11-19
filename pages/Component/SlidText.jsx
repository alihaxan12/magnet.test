
import Carousel, { consts } from 'react-elastic-carousel';
const SlidText = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1 },
        { width: 768, itemsToShow: 1 },
        { width: 900, itemsToShow: 1 },
      ];
      function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? '' : '';
        return (
          <button onClick={onClick} disabled={isEdge}>
            {pointer}
          </button>
        )
      }
    return (
        <div  className='flex overflow-x-hidden'>
        <Carousel loop breakPoints={breakPoints} enableAutoPlay={true} autoPlaySpeed={3000} renderArrow={myArrow}>
            <div className='w-[900px] relative overflow-hidden'>
            <div id={3} className='text-xl text-white text-justify bg-[#14213d]  w-full h-auto'>
                <h1 className='italic p-4 bg-[#101b31] border-solid rounded-3xl m-6'> 
                    Sam has previously engaged with me, presenting suitable interim opportunities at my level.He has a good network and has supported me with project resource requirements with no issues.I would be happy to recruit through Sam again and recommend him to other organisations tha require project resource support.',
                </h1>
                <h2 className='text-center text-[#fca311] text-xl, font-bold'>Robin Meachin</h2>
                <h1 className='text-white text-center text-xl font-bold'>  Capital Lead at McCormick</h1>
            </div>
            </div> 
            <div className='w-[900px] relative overflow-hidden'>
            <div id={3} className='text-xl text-white text-justify bg-[#14213d]  w-full h-auto'>
                <h1 className='italic p-4 bg-[#101b31] border-solid rounded-3xl m-6'>For a number of years, I have been in contact with Sam, 
                discussing job opportunities in the Interim Engineering market.
                His knowledge of the market and links within the business are 
                excellent. He took the time and made the effort to understand my
                    ideal job position and matched me with my present employer. 
                    I highly recommend his attention to the needs of both his
                    Candidates and business Clients. Added to this attention to
                    detail, and his full understanding of his Candidates skill set,
                    and what they are able to offer to potential employers, his 
                        friendly and cheerful personality have made the process of moving
                        to new employment a stress-free experience.</h1>
                <h2 className='text-center text-[#fca311] text-xl, font-bold'>John. F. Flaye</h2>
                <h1 className='text-white text-center text-xl font-bold'>  Programme Lead at Gousto</h1>
            </div>
            </div> 
                <div className='w-[900px] relative overflow-hidden'>
                <div id={3} className='text-xl text-white text-justify bg-[#14213d]  w-full h-auto'>
                    <h1 className='italic p-4 bg-[#101b31] border-solid rounded-3xl m-6'> I am very pleased with the service you have offered over the last 5 months or so.
                    Your communication is excellent which made the recruitment process simple and
                        straightforward. Since the start of my contract, you have always taken the 
                        time to check in on me by phone to make sure all is well. There has never 
                        been any issue with the payment of my invoice, which is always dealt with 
                        promptly. Once again, many thanks.</h1>
                    <h2 className='text-center text-[#fca311] text-xl, font-bold'>Derek Selby</h2>
                    <h1 className='text-white text-center text-xl font-bold'>  Project Manager at Gousto</h1>
                </div>
            </div> 
        </Carousel>
      </div>
      );
}
 
export default SlidText;