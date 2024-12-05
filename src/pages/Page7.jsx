import { useGSAP } from '@gsap/react'
import gsap, { ScrollTrigger } from 'gsap/all'
import React, { useEffect } from 'react'
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger)

function Page7() {

  useGSAP(()=>{
    const splitTypes = document.querySelectorAll('.triangle-text');

    splitTypes.forEach((char,i)=>{
      let text = new SplitType(char,{types:'chars'});
  
      gsap.from(text.chars,{
          scrollTrigger:{
            trigger:char,
            start : 'top 80%',
            end : 'top 20%',
            scrub:true,
          },
          opacity:.2,
          stagger:.1,
      })
  
    })
  
  })
  
  useEffect(()=>{
      gsap.from('.opacity-game4',{
        opacity:0,
        duration:.1,
        delay:.1,
        scrollTrigger:{
          trigger:".parent-of-opacity-game5",
          start:"top -45%",
          end:"bottom bottom",
          scrub:2,
        }
      })
  },[])
  
  useGSAP(()=>{
    gsap.to('.earth',{
      rotateY:360,
      duration:8,
      repeat:-1
    });
  })

  return (
    <div className='h-[159vh] help-div parent-of-opacity-game5 mt-5 md:w-full md:block hidden md:p-2 lg:p-3 px-2 w-[96vw]'>
        <div className="h-full relative w-full bg-black  md:rounded-[4.55vw] md:px-[40px]  px-[19px] lg:px-[67px] lg:rounded-[2.5vw] rounded-[7.5vw] shadow-[0_0_6px_2px_#BBBBBB] ">
            <div className="w-full pt-16 flex justify-between">
            <div className="">
          <h1 className="font-[ANZO5] text-[45vw] leading-[45vw] md:text-[19.5vw] tracking-wide md:leading-[16vw] text-[#9B9B9B]">
            HOW
          </h1>
          <h1 className="font-[ANZO5] text-[45vw] leading-[30vw] md:text-[19.5vw] tracking-wide md:leading-[15.5vw] text-[#FAFAFA]">
            CAN
          </h1>
           </div>
           <div className="text-right">
          <h1 className="font-[ANZO5] text-[45vw] leading-[45vw] md:text-[19.5vw] tracking-wide md:leading-[16vw] text-[#fafafa]">
            I HELP
          </h1>
          <h1 className="font-[ANZO5] text-[45vw] leading-[30vw] md:text-[19.5vw] tracking-wide md:leading-[15.5vw] text-[#FAFAFA]">
            YOU
          </h1>
           </div>
            </div>
            <img src="https://static.wixstatic.com/media/f1c650_e5c1c4b281ea418a8663a17e66f283f1~mv2.png/v1/fill/w_777,h_668,al_c,q_90,enc_avif,quality_auto/triangle%203.png" alt="triangle-img" className='absolute left-1/2 top-1/2 -translate-x-1/2 w-[65%] h-[75%] triangle-img opacity-90 block -translate-y-1/2 z-0' />
            <div className="flex  gap-10 z-10 h-64 mt-24 w-full">
                <div className="h-full w-[30.3%] ">
                        <div className="triangle-text">
                            <h1 className='text-[#9B9B9B] font-[ANZO1] text-lg leading-[23px]'>I am a self-taught web and brand designer with a passion for creating unique and timeless <span className='text-[#FAFAFA]'>masterpieces for ambitious professionals, entrepreneurs, artists, and boutique businesses.</span></h1>
                            <h1 className='text-[#fafafa] mt-6 font-[ANZO1] text-lg leading-[23px]'>Bespoke Freelance <span className='text-[#9B9B9B]'>for agencies.</span></h1>
                        </div>
                        <div className="flex gap-6 h-28 items-end">
                            <img src="https://static.wixstatic.com/media/f1c650_67833facdc7a47d5aae7870d4fb7fc3e~mv2.png/v1/fill/w_62,h_62,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/SUN.png" alt="" className='object-cover sun mb-4' />
                            <h1 className='text-[#fafafa] flex items-end gap-1 pt-5 font-[ANZO5]'><span className="wixui-rich-text__text text-6xl ">DESIGN</span><span className="wixui-rich-text__text text-lg mb-2 font-[ANZO1]">01</span></h1>
                        </div>
                </div>
                <div className="h-full w-[30.3%] ">
                        <div className="triangle-text">
                            <h1 className='text-[#9B9B9B] font-[ANZO1] text-lg leading-[23px]'>With a background in strategic marketing and acknowledged expertise in web development,<span className='text-[#FAFAFA]'> I aim to minimize my client's resources spent on macro and micro-management, marketing research, and hiring a whole team of a larger agency.</span></h1>
                        </div>
                        <div className="flex gap-6 h-28 mt-6 items-end">
                            <img src="https://static.wixstatic.com/media/f1c650_027515148725478cbb3a91eca452cabf~mv2.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EARTH.png" alt="" className='object-cover earth mb-4' />
                            <h1 className='text-[#fafafa] flex items-end gap-1 pt-5 font-[ANZO5]'><span className="wixui-rich-text__text text-6xl ">

DEVELOPMENT</span><span className="wixui-rich-text__text text-lg mb-2 font-[ANZO1]">02</span></h1>
                        </div>
                </div>
                <div className="h-full w-[30.3%] ">
                        <div className="triangle-text">
                            <h1 className='text-[#9B9B9B] font-[ANZO1] text-lg leading-[23px]'>My mission is to drive exceptional growth for my clients by increasing their brand appearance<span className='text-[#FAFAFA]'>, defining their identity, and engaging customers through captivating black-and-white aesthetics with a modern, luxurious, and minimalistic touch.</span></h1>
                        </div>
                        <div className="flex gap-6 h-28 items-end">
                            <img src="https://static.wixstatic.com/media/f1c650_b0000fd9a706421aa0ea84da62ae3354~mv2.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/START%20UP.png" alt="" className='object-cover animate-bounce mb-4' />
                            <h1 className='text-[#fafafa] flex items-end gap-1 pt-5 font-[ANZO5]'><span className="wixui-rich-text__text text-6xl ">DESIGN</span><span className="wixui-rich-text__text text-lg mb-2 font-[ANZO1]">03</span></h1>
                        </div>
                </div>
            </div>
            <div className="mt-[67px] opacity-game4">
                <h1 className='text-[#9B9B9B] leading-none text-lg font-[ANZO3]'>GOT A PROJECT?</h1>
                <h1><span className='text-[#9B9B9B]  text-lg font-[ANZO3]'>THEN PLEASE</span>&nbsp;<span className='text-[#fafafa]  text-lg leading-none font-[ANZO2] opacity-90'>CONTACT ME</span></h1>
            </div>
        </div>
    </div>
  ) 
}

export default Page7