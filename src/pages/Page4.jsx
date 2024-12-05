import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import moon from "../images/Moon_Edited.png"
import React from "react";

function Page4() {

  let mm = gsap.matchMedia();

  mm.add("(min-width:0px)",()=>{
    useGSAP(function(){
      gsap.from('.opacity-game1',{
        opacity:0,
        duration:.1,
        delay:.1,
        scrollTrigger:{
          trigger:".parent-of-opacity-game1",
          start:"top top",
          end:"top -30%",
          scrub:2,
        }
      })
    })
  })



  return (
    <div className="md:h-screen h-[118vh] parent-of-opacity-game1 md:w-full md:p-2 lg:p-3 px-2 w-[100vw] ">
      <div className="h-full relative w-full bg-[url(https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_1322,h_614,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Background%20Anzo_Studio.jpg)] md:flex items-center bg-cover bg-center  md:rounded-[4.55vw] md:px-[40px]  px-[19px] lg:px-[67px] lg:rounded-[2.5vw] rounded-[7.5vw] shadow-[0_0_6px_2px_#BBBBBB] ">
        <div className="left-side flex flex-col h-full justify-between md:block pt-10 md:pt-[70px]">
          <div className="">
          <h1 className="font-[ANZO5] text-[45vw] leading-[45vw] md:text-[19.5vw] tracking-wide md:leading-[16vw] text-[#9B9B9B]">
            WHAT
          </h1>
          <h1 className="font-[ANZO5] text-[45vw] leading-[30vw] md:text-[19.5vw] tracking-wide md:leading-[15.5vw] text-[#FAFAFA]">
            I DO
          </h1>
          </div>
          <div className="md:mt-2  opacity-game1 mb-8">
            <h3 className="lg:text-[1.34vw] md:text-[2vw] md:leading-[2.2vw] lg:leading-[1.8vw] font-light font-[ANZO4] text-[#EEEEEE]">
              I DESIGN AND DEVELOP
            </h3>
            <h4 className="lg:text-[1.34vw] md:text-[2vw] md:leading-[1.8vw] lg:leading-[1.4vw] text-[#fafafa88] font-[ANZO3] text-[15px]">
            MODERN, IMPACTFUL AND LUXURIOUS <span className="inline-block md:hidden">WEBSITES</span>
            </h4>
            <h3 className="lg:text-[1.34vw] flex gap-1 md:text-[2vw] md:leading-[2.2vw] lg:leading-[1.8vw] font-light font-[ANZO4] text-[#FAFAFA]">
            <span className="hidden md:block">websites</span>  that seamlessly bridge your goals with <br className="md:hidden block"/> needs of your clients.
            </h3>
          </div>
        </div>
        <div className="right">
          <img src={moon} className="md:h-1/2 w-[80%] animate-bounce md:animate-none top-[47%] md:w-[100%] absolute md:relative rotate-180 duration-1000 moon-rotate object-cover " alt="" />
        </div>
      </div>
    </div>
  );
}

export default Page4;
