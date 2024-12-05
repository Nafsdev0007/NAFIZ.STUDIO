import React from 'react'

function Page3() {
  return (
    <div className='md:h-[100vh] h-[75vh] pb-10  relative md:w-full flex justify-center items-center w-[96vw]'>
        <img src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_890,h_512,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/try.png" className='absolute z-30 md:block hidden' alt="" />

        <img src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_389,h_229,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/try.png" className='absolute ml-4 block md:hidden' alt="" />

        <img src="https://static.wixstatic.com/media/f1c650_5b4097ad85344cdea0198b82781599db~mv2.png/v1/fill/w_411,h_555,fp_0.50_0.00,q_85,usm_0.66_1.00_0.01,enc_auto/f1c650_5b4097ad85344cdea0198b82781599db~mv2.png"
        className='md:hidden block absolute'
        alt="" />

        <video className="md:w-[48vw] md:z-10 md:relative w-[77vw] h-[75vh] ml-4 md:ml-0 object-contain md:h-[100vh]" src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4" autoPlay muted loop ></video>

        <div className="h-[1.5px] w-[70%] bg-[#6A6A6A] right-36 mb-32 absolute z-0 hidden md:block "></div>
        <div className="h-[1.5px] w-[90%] bg-[#6A6A6A] right-3 mt-32 absolute z-0 hidden md:block "></div>
        <div className="h-[1.5px] w-[100%] bg-[#6A6A6A]  bottom-52 absolute z-0 hidden md:block "></div>


    </div>
  )
}

export default Page3