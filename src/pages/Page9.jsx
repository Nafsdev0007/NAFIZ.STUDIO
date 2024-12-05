import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';


function Page9() {


  return (
    <div className='relative my-16 overflow-hidden'>
      <div className='sticky top-0 h-[90vh] md:h-screen'>
        <img 
          src="https://static.wixstatic.com/media/f1c650_a15cf84ef5d546bd980d228833ef2f8e~mv2.png/v1/fill/w_1349,h_762,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Subtract%20(1).png" 
          className="object-cover md:block hidden absolute w-full h-full z-30" 
          alt="" 
        />

     <img 
          src="https://static.wixstatic.com/media/f1c650_d44197c2c8b14c32b21eeae64ec88f4f~mv2.png/v1/fill/w_648,h_1108,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Subtract%20(6).png" 
          className="object-cover block md:hidden absolute w-full h-full z-30" 
          alt="" 
        />

        <img 
          src="https://static.wixstatic.com/media/f1c650_f865c88a32be4d4985a0119fb5268017~mv2.jpg/v1/fill/w_1349,h_762,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f1c650_f865c88a32be4d4985a0119fb5268017~mv2.jpg" 
          alt="" 
          className='object-cover absolute w-full h-full z-10'
        />
        <h1 className='relative md:block hidden z-40 top-[30%] lg:ml-[67px] md:text-[12vw] font-[ANZO5] text-[#000] uppercase'>Soft</h1>
      </div>
    </div>
  );
}

export default Page9;