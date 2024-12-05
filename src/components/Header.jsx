import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function Header() {

  useGSAP(() => {
    gsap.to('#partner-banner img',{
      rotate: 360,
      duration: 5.55,
      repeat: -1,
      ease: 'linear'
    })
  }, []);


  return (
    <div className="md:fixed absolute z-[100] w-[100vw] gap-3 md:-top-10 lg:-top-3 lg:p-20 lg:-right-14 flex md:justify-end md:items-center  rounded-full">
      <button id="hire-me-btn" className="bg-[#060606] shadow-[0_0_6px_1.5px_#6B6B6B] cursor-pointer px-12 md:px-11 lg:px-11 md:border-[.66vw] fixed right-6 md:static border-[1.5vw] lg:border-[.36vw] border-[#fafafa] py-3 md:py-[10px] font-bold md:font-extralight font-[MADEFOR] bottom-5 hover:bg-[#9B9B9B] ease-in-out duration-300 md:text-[2vw] lg:text-[1.1vw] rounded-full text-[#ffffffee]">
        Hire Me
      </button>
      <svg 
        preserveAspectRatio="xMidYMid meet"
        data-bbox="20 20 160 160"
        viewBox="20 20 160 160"
        height="24"
        width="24"
        className="cursor-pointer hover:-rotate-90 md:block hidden  duration-700 fill-[#6A6A6A] "
        xmlns="http://www.w3.org/2000/svg"
        data-type="shape"
        role="img"
        aria-label="Minimal monochrome UX/UI design for a startup website by Anzo Studio."
      >
        <g>
          <path d="M57.587 38.794c0 10.379-8.414 18.794-18.794 18.794S20 49.173 20 38.794 28.414 20 38.794 20s18.793 8.414 18.793 18.794z"></path>
          <path d="M118.794 38.794c0 10.379-8.414 18.794-18.794 18.794s-18.794-8.414-18.794-18.794S89.621 20 100 20s18.794 8.414 18.794 18.794z"></path>
          <path d="M180 38.794c0 10.379-8.414 18.794-18.794 18.794-10.379 0-18.794-8.414-18.794-18.794S150.827 20 161.206 20C171.586 20 180 28.414 180 38.794z"></path>
          <path d="M118.794 100c0 10.379-8.414 18.794-18.794 18.794S81.206 110.379 81.206 100 89.621 81.206 100 81.206s18.794 8.415 18.794 18.794z"></path>
          <path d="M180 100c0 10.379-8.414 18.794-18.794 18.794-10.379 0-18.794-8.414-18.794-18.794s8.414-18.794 18.794-18.794S180 89.621 180 100z"></path>
          <path d="M57.587 161.206c0 10.379-8.414 18.794-18.794 18.794S20 171.586 20 161.206c0-10.379 8.414-18.794 18.794-18.794s18.793 8.415 18.793 18.794z"></path>
          <path d="M118.794 161.206C118.794 171.585 110.38 180 100 180s-18.794-8.414-18.794-18.794c0-10.379 8.414-18.794 18.794-18.794s18.794 8.415 18.794 18.794z"></path>
          <path d="M180 161.206c0 10.379-8.414 18.794-18.794 18.794-10.379 0-18.794-8.414-18.794-18.794 0-10.379 8.414-18.794 18.794-18.794 10.38.001 18.794 8.415 18.794 18.794z"></path>
          <path d="M57.587 100c0 10.379-8.414 18.794-18.794 18.794S20 110.379 20 100s8.414-18.794 18.794-18.794S57.587 89.621 57.587 100z"></path>
        </g>
      </svg>

    <div id="partner-banner" className="md:space-y-6 space-y-3 -bottom-[237px] -right-5  md:right-14 relative md:bottom-14 lg:bottom-10 md:fixed">
      <img src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EN_legend_large.png" alt="wix-nav-pix" className="md:hidden block"/>
      <img src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" alt="cssda-wotd-white" className="md:block hidden" />


      <img src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png" alt="EN_legend_large" className="hidden md:block" />
      <img src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" alt="cssda-wotd-white.png" className="md:hidden block" />
      
    </div>
    </div>
  );
}

export default Header;
