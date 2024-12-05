import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import React from "react";
gsap.registerPlugin(ScrollTrigger)

function TitleTxt() {

  return (
    <div className="flex w-full justify-between items-center">
      <div className="lg:mt-14 md:block hidden md:mt-80">
        <h3 className="lg:text-[1.34vw] md:text-[2vw] md:leading-[2.2vw] lg:leading-[1.8vw] font-light font-[ANZO4] text-[#FAFAFA]">
          CREATIVE FRONTEND | SaaS DEVELOPMENT
        </h3>
        <h4 className="lg:text-[1.34vw] md:text-[2vw] md:leading-[1.8vw] lg:leading-[1.4vw] text-[#fafafa88] font-[ANZO3]">
          CREATIVE FRONTEND DEVELOPER
        </h4>
      </div>

      <div className="flex gap-4 absolute bottom-8 right-[19px] md:hidden">
        <div className="">
          <h3 className="text-[#fafafa] text-end font-[ANZO4]">WEB AND BRAND</h3>
          <h4 className="text-[#fafafa88] font-[ANZO3]">
            BESPOKE FREELANCE
          </h4>
        </div>
        <svg
          preserveAspectRatio="xMidYMid meet"
          data-bbox="0 0 1608 1279"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1608 1279"
          height="48"
          width="48"
          data-type="color"
          role="img"
          aria-label="Contemporary monochrome brand design for a consultancy firm by Anzo Studio."
        >
          <g>
            <path
              fill="#FAFAFA"
              d="M661.18 1279C274.682 1279 0 992.076 0 639.5S274.682 0 661.18 0c384.07 0 656.32 286.924 656.32 639.5S1045.25 1279 661.18 1279Zm0-282.061c209.05 0 357.33-162.914 357.33-357.439 0-194.525-148.28-357.439-357.33-357.439-211.48 0-362.19 162.914-362.19 357.439 0 194.525 150.71 357.439 362.19 357.439Z"
              data-color="1"
            ></path>
            <path
              fill="#FAFAFA"
              d="M1454.86 1279c-85.08 0-153.14-68.08-153.14-153.19 0-85.1 68.06-153.186 153.14-153.186 85.08 0 153.14 68.086 153.14 153.186 0 85.11-68.06 153.19-153.14 153.19Z"
              data-color="1"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default TitleTxt;
