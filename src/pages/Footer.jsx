import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import React from 'react'

function Footer() {

    useGSAP(()=>{
        gsap.to(".react",{
            rotate:-360,
            repeat:-1,
            duration:8
        })
    })

  return (
    <div className="md:h-screen h-[104vh] parent-of-opacity-game1 md:w-full md:p-2 lg:p-3 p-2 w-[100vw] ">
      <div className="h-full relative w-full bg-[url(https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_1322,h_614,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Background%20Anzo_Studio.jpg)] md:flex items-center bg-cover bg-center  md:rounded-[4.55vw] md:px-[40px]  px-[19px] lg:px-[67px] lg:rounded-[2.5vw] rounded-[7.5vw] shadow-[0_0_6px_2px_#BBBBBB] ">
        <div className="left-side flex flex-col w-full h-full justify-between md:block pt-14 md:pt-[70px]">
          <div className="w-full flex sm:flex-row flex-col gap-6 sm:gap-14 sm:items-end">
            <div className="">
            <h1 className="font-[ANZO5] text-[45vw] leading-[36vw] md:text-[19.5vw] tracking-wide md:leading-[16vw] text-[#9B9B9B]">
            <span className='text-[#fafafa]'>GOT</span> <br className="sm:hidden block" /> AN
          </h1>
          <h1 className="font-[ANZO5] text-[45vw] leading-[36vw] md:text-[19.5vw] tracking-wide md:leading-[15.5vw] text-[#FAFAFA]">
            IDEA
          </h1>
            </div>

            <div className='sm:mb-7 flex items-center '>
                <img src="https://static.wixstatic.com/media/f1c650_7a84fb38cb2d4bebb8b34004f66d4c3d~mv2.png/v1/fill/w_91,h_91,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/World%20Contact.png" className='react md:block hidden' alt="" />

                <img src="https://static.wixstatic.com/media/f1c650_7a84fb38cb2d4bebb8b34004f66d4c3d~mv2.png/v1/fill/w_46,h_46,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/World%20Contact.png" className='react block md:hidden' alt="" />

                <div className="sm:h-28 h-20 flex flex-col pl-6 sm:pl-12 justify-center ml-6 sm:ml-10 border-l-2 border-white">
                <h4 className="lg:text-[1.34vw] md:text-[2vw] md:leading-[1.8vw] lg:leading-[1.4vw] text-[#fafafa88] font-[ANZO3] text-[15px]">
            WORLD SERVICE
            </h4>
            <h3 className="lg:text-[1.34vw] md:uppercase lowercase text-sm md:text-[2vw] md:leading-[2.2vw] lg:leading-[1.8vw] font-light font-[ANZO4] text-[#EEEEEE]">
            <span className="uppercase">i</span> CAN COME TO WHEREVER YOU ARE.
            </h3>
            <h4 className="lg:text-[1.34vw] md:text-[2vw] md:leading-[1.8vw] lg:leading-[1.4vw] text-[#fafafa88] font-[ANZO3] text-[15px]">
            +88 019 32300101
            </h4>
                </div>

            </div>
          </div>
          <div className="md:mt-8 w-full sm:items-end flex sm:flex-row flex-col sm:justify-between opacity-game1 mb-3">

            <div className="sm:block hidden">
            <h4 className="lg:text-[1.34vw] md:text-[2vw] md:leading-[1.8vw] lg:leading-[1.4vw] text-[#fafafa88] font-[ANZO3] text-[15px]">
            IT IS NOT JUST ABOUT SOLVING THE PROBLEM
            </h4>
            <h3 className="lg:text-[1.34vw] md:text-[2vw] md:leading-[2.2vw] lg:leading-[1.8vw] font-light font-[ANZO4] text-[#EEEEEE]">
              <span className="lg:text-[1.34vw] md:text-[2vw] md:leading-[1.8vw] lg:leading-[1.4vw] text-[#fafafa88] font-[ANZO3] text-[15px]">BUT</span> OFFERING THE TRANSFORMATION!
            </h3></div> 

                <h1 className='sm:hidden block text-[10vw] leading-none text-[#fafafa] font-[ANZO5]'>NAFIZ</h1>
                <h1 className='text-base font-[ANZO3] sm:font-[ANZO4] text-[#fafafa88] tracking-tighter sm:text-[#fafafa]'>© 2024 Nafiz.Studio™</h1>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer