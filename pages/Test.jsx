import SlideImage from './Component/SlideImage';
import {ImageData} from './Component/ImageData';
const Test = () => {
    return ( 
        <div>
            <h1 className='text-2xl text-center'>Slider</h1>
            <div className=''>
                <SlideImage images={ImageData} />
            </div>
        </div>
     );
}
 
export default Test;