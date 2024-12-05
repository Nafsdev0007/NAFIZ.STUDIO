import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';


function Page11() {


  return (
    <div className='relative my-16 overflow-hidden'>
      <div className=' top-0 h-[100vh] md:h-[150vh]'>
        <img 
          src="https://static.wixstatic.com/media/f1c650_710941ddfbe8422c9739a586a079bbe6~mv2.png/v1/fill/w_1349,h_1038,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Subtract.png" 
          className="object-cover md:block hidden absolute w-full h-full  z-[30]" 
          alt="" 
        />

     <img 
          src="https://static.wixstatic.com/media/f1c650_5f90457b7e854b1ca907ece1a2f28582~mv2.png/v1/fill/w_652,h_1108,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/REACH%20ME%20HERE%20NOW.png" 
          className="object-cover block md:hidden absolute z-[30]" 
          alt="" 
        />

        <img 
          src="https://static.wixstatic.com/media/f1c650_739893a03c1f4a6991c28005e9fd8372~mv2.jpg/v1/fill/w_1349,h_1038,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f1c650_739893a03c1f4a6991c28005e9fd8372~mv2.jpg" 
          alt="" 
          className='object-cover absolute w-full  z-10'
        />
        <img 
          src="https://static.wixstatic.com/media/f1c650_739893a03c1f4a6991c28005e9fd8372~mv2.jpg/v1/fill/w_326,h_554,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f1c650_739893a03c1f4a6991c28005e9fd8372~mv2.jpg" 
          alt="" 
          className='object-cover md:hidden block absolute w-full  z-10'
        />
      </div>
    </div>
  );
}

export default Page11;