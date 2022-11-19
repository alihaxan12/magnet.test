import Carousel, { consts } from 'react-elastic-carousel';
import Image from 'next/image';
const SlideImage = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 900, itemsToShow: 3 },
      ];
      function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? '<' : '>';
        return (
          <button onClick={onClick} disabled={isEdge}>
            {pointer}
          </button>
        )
      }
    return ( 
        <div>
           <Carousel enableAutoPlay renderArrow={myArrow} autoPlaySpeed={2000} loop pagination={false} breakPoints={breakPoints} 
             className='flex relative p-4 bg-white'>
                
                    <Image src='/image/slide-1.png'alt="/"  width={600} height={300} />
                    <Image src='/image/slide-2.png'alt="/"  width={600} height={300}/>
                    <Image src='/image/slide-3.png'alt="/"  width={600} height={300}/>
                    <Image src='/image/slide-4.png'alt="/"  width={600} height={300}/>
                    <Image src='/image/slide-5.png'alt="/"  width={600} height={300}/>
                    <Image src='/image/slide-6.png'alt="/"  width={600} height={300}/>
                    <Image src='/image/slide-7.png'alt="/"  width={600} height={300}/>
                    <Image src='/image/slide-8.png' alt="/" width={600} height={300} />
                    <Image src='/image/slide-9.png'alt="/"  width={600} height={300}/>
                    <Image src='/image/slide-10.png' alt="/" width={600} height={300} />
              
           </Carousel>
        </div>
     );
}
 
export default SlideImage;