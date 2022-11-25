
// import Image from 'next/image';
// import { useState } from 'react';
// const SlideImage = ({ images, index }) => {
//   const [current, setCurrent] = useState(0);

//   const slideRight = () => {
//     setCurrent(current=== images.length -1 ? 0 : current + 1);
//     console.log('helojfal')
//   }
//   const slideLeft = () => {
//     setCurrent(current=== images.length -1 ? 0 : current - 1);
//   }
//   return (
//     <div className='w-full flex'>
//       <div onClick={slideRight}
//         className='absolute cursor-pointer flex text-6xl left-[10%] mx-auto rounded-xl  '>&lsaquo;</div>
//       <div className='w-[1240px] scroll-smooth scroll mx-auto'>  
//         <div key={index} className={index == current ?'flex  w-full h-full overflow-hidden' : 'left-[-100%]'}>
//           {images.map((image, index) => (
//             <Image  src={`/${image.image}`} alt='/' width={1080} height={700} />
//           ))}
//         </div>
//       </div>
//       <div onClick={slideLeft}
//         className='absolute cursor-pointer flex text-6xl right-[10%] mx-auto  rounded-xl  '>&rsaquo;</div>
//     </div>
//   );
// }

// export default SlideImage;