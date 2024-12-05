import { useGSAP } from '@gsap/react';
import gsap, { ScrollTrigger } from 'gsap/all';
import React from 'react'
gsap.registerPlugin(ScrollTrigger)

function Triangle() {
  useGSAP(()=>{
    gsap.to('.earth-mobile',{
      rotateY:360,
      duration:13,
      repeat:-1
    });
  })
  
  let mm = gsap.matchMedia();

  mm.add("(max-width:640px)",()=>{
    useGSAP(function(){
      gsap.from('.opacity-game3',{
        opacity:0,
        duration:.1,
        delay:.1,
        scrollTrigger:{
          trigger:".parent-of-opacity-game3",
          start:"bottom 110%",
          end:"bottom 57%",
          scrub:2,
        }
      });
      gsap.from(".first-1",{
        opacity:0,
        duration:1,
        scrollTrigger:{
          trigger:".parent-of-opacity-game3",
          start:"top 10%",
          end:"top -45%",
          scrub:2,
        }
      })
      gsap.from(".first-2",{
        opacity:0,
        duration:.1,
        scrollTrigger:{
          trigger:".parent-of-opacity-game3",
          start:"top -50%",
          end:"top -70%",
          scrub:2,
        }
      })
      gsap.from(".first-3",{
        opacity:0,
        duration:.1,
        scrollTrigger:{
          trigger:".parent-of-opacity-game3",
          start:"bottom 150%",
          end:"bottom 127%",
          scrub:2,
        }
      })
    })
  })

  return (
    <div className='h-[236vh] md:hidden block px-2 mt-10 w-[100vw]'>
        <div className="h-full w-full bg-black   parent-of-opacity-game3 px-[19px] rounded-[7.5vw] shadow-[0_0_6px_2px_#BBBBBB] ">
            <div className="flex flex-col">
            <div className="pt-12">
          <h1 className="font-[ANZO5] text-[45vw] leading-[45vw] tracking-wide  text-[#9B9B9B]">
            HOW
          </h1>
          <h1 className="font-[ANZO5] text-[45vw] leading-[30vw] tracking-wide  text-[#FAFAFA]">
            CAN I
          </h1>
          <h1 className="font-[ANZO5] text-[45vw] leading-[45vw] tracking-wide  text-[#FAFAFA]">
            HELP
          </h1>
            </div>
            <div className="flex flex-col gap-7">
            <div className="w-full flex items-start gap-8 py-5 ">
                <div className="w-[21%] ">
                    <div className="design w-full gap-10  flex flex-col items-center justify-center">
                        <img src="https://static.wixstatic.com/media/f1c650_67833facdc7a47d5aae7870d4fb7fc3e~mv2.png/v1/fill/w_37,h_37,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/SUN.png" className='object-cover w-12 mr-2 sun-mobile' alt="" />
                        <div className="flex flex-col gap-3">
                        <div className="w-[57px] ml-[43px] bg-white h-[2px] mb-4"></div>
                        <h1 className='text-[#fafafa] flex tracking-widest -rotate-90 items-end gap-4 pt-2 font-[ANZO5]'><span className="wixui-rich-text__text text-[77px] ">DESIGN</span><span className="wixui-rich-text__text   font-[ANZO4] text-sm mb-9">01</span></h1>
                      </div>
                    </div>
                </div>
                <div className="w-[79%] mt-[137px]  ">
                <h1 className='text-[#9B9B9B] font-[ANZO4] first-1 text-sm leading-[23px]'>I am a self-taught web and brand designer with a passion for <span className='text-[#FAFAFA]'>creating unique and timeless masterpieces for ambitious professionals, entrepreneurs, artists, and boutique businesses. </span></h1>

                </div>
            </div>
            <div className="w-full flex items-start gap-8 py-5 ">
                <div className="w-[21%] ">
                    <div className="design w-full gap-10  flex flex-col items-center justify-center">
                        <img src="https://static.wixstatic.com/media/f1c650_027515148725478cbb3a91eca452cabf~mv2.png/v1/fill/w_35,h_35,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EARTH.png" className='object-cover w-12 mr-2 earth-mobile' alt="" />
                        <div className="flex flex-col gap-3">
                        <div className="w-[57px] ml-[100px] bg-white h-[2px] mb-[68px]"></div>
                        <h1 className='text-[#fafafa] flex tracking-widest -rotate-90 items-end gap-4 pt-2 font-[ANZO5]'><span className="wixui-rich-text__text text-[77px] ">DEVELOPMENT</span><span className="wixui-rich-text__text text-sm  font-[ANZO4] mb-9">02</span></h1>
                      </div>
                    </div>
                </div>
                <div className="w-[79%] mt-[137px]  ">
                <h1 className='text-[#9B9B9B] font-[ANZO4] first-2 text-sm leading-[23px]'>With a background in strategic marketing and acknowledged expertise in web development, <span className='text-[#FAFAFA]'>I aim to minimize my client's resources spent on macro and micro-management, marketing research, and hiring a whole team of a larger agency.</span></h1>

                </div>
            </div>
            <div className="w-full flex items-start gap-8 mt-24 py-5 ">
                <div className="w-[21%]">
                    <div className="design w-full gap-10  mr-2 flex flex-col items-center justify-center">
                        <img src="https://static.wixstatic.com/media/f1c650_b0000fd9a706421aa0ea84da62ae3354~mv2.png/v1/fill/w_48,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/START%20UP.png" className='object-cover w-12 mr-2 animate-bounce' alt="" />
                        <div className="flex flex-col gap-3">
                        <div className="w-[57px] ml-[68px] bg-white h-[2px] mb-10"></div>
                        <h1 className='text-[#fafafa] flex tracking-widest -rotate-90 items-end gap-4 pt-2 font-[ANZO5]'><span className="wixui-rich-text__text text-[77px] ">BRANDING</span><span className="wixui-rich-text__text text-sm  font-[ANZO4] mb-9">03</span></h1>
                      </div>
                    </div>
                </div>
                <div className="w-[79%] mt-[137px]  ">
                <h1 className=' text-[#FAFAFA] font-[ANZO4] first-3 text-sm leading-[23px]'>My mission is to drive exceptional growth for my clients by increasing their brand appearance, <span className='text-[#9B9B9B]'>defining their identity, and engaging customers through captivating block-and-<span className=' text-[#FAFAFA]'>white</span> aesthetics with a modern,luxurious, and minimalistic touch.</span></h1>

                </div>
            </div>
            </div>


            <div className="mt-[100px] opacity-game3">
                <h1 className='text-[#9B9B9B] leading-none text-base font-[ANZO3]'>GOT A PROJECT?</h1>
                <h1><span className='text-[#9B9B9B]  text-base font-[ANZO3]'>THEN PLEASE</span>&nbsp;<span className='text-[#fafafa]  text-base leading-none font-[ANZO4] opacity-90'>CONTACT ME</span></h1>
            </div>


            </div>
        </div>
    </div>
  )
}

export default Triangle