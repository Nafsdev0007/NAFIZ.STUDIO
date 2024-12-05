import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import TitleTxt from "../components/page1-comps/TitleTxt";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FloatingTxt from "../components/page1-comps/FloatingTxt";

function Page1() {
  const ref = useRef(null); // Create a ref for the div element
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);


  const boundingClientRect = useMemo(() => {
    if (ref.current) {
      return ref.current.getBoundingClientRect();
    }
    return { width: 0, height: 0, x: 0, y: 0 };
  }, [ref.current]); // Recalculate only if ref.current changes

  // Memoize the handleMouseMove function
  const handleMouseMove = useCallback(
    (e) => {
      const { width, height, x, y } = boundingClientRect;

      setXValue((e.clientX - width / 2 - x) / 20);
      setYValue(-(e.clientY - height / 2 - y) / 8);
    },
    [boundingClientRect]
  ); // Update when boundingClientRect changes

  // Use GSAP to animate the element based on mouse move
  useEffect(() => {
    gsap.to(ref.current, {
      rotationX: yValue,
      rotationY: xValue,
      duration: 3, // You can adjust the duration
    });
  }, [xValue, yValue]);

  return (
    <div
      onMouseMove={(e) => {
        handleMouseMove(e);
      }}
      className="nav-header md:p-2 px-2 py-1  lg:p-3"
    >
      <div
        id="page1-inner"
        className="md:h-full w-[96vw] md:w-full overflow-visible md:rounded-[4.55vw] lg:rounded-[2.5vw] shadow-[0_0_6px_4px_#BBBBBB] md:bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_736,h_626,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)] 
        
        bg-[url(https://static.wixstatic.com/media/f1c650_552089a680944555a3150f5c2ca2c98b~mv2.png/v1/fill/w_614,h_2049,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Anzo%20Dark%20Mode.png)] h-[250vh] bg-repeat px-[19px] rounded-[7.5vw] bg-cover bg-[55%] py-3

        lg:bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_2644,h_1228,fp_0.69_0.64,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)] md:px-[40px] md:py-6 lg:px-[67px] lg:py-10 md:bg-cover text-white md:bg-center"
      >
        <img
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png"
          loading="lazy"
          className="md:block hidden "
          alt="navbar-img"
        />
        <div className="md:hidden mobile-nav z-[9999999] items-center  mb-2 w-full flex justify-between">
          <div className="">
            <svg
              preserveAspectRatio="xMidYMid meet"
              data-bbox="0 0 1608 1279"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1608 1279"
              height="42"
              className=""
              width="42"
              data-type="color"
              role="img"
              aria-label="Anzo.Studio Brand Identity and Logo Design"
            >
              <defs></defs>
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

          <div className="flex duration-300 ease-in-out items-center gap-6">
            <svg
              preserveAspectRatio="xMidYMid meet"
              data-bbox="20 44.5 160 110.999"
              viewBox="20 44.5 160 110.999"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              data-type="shape"
              className=" fill-white"
              role="img"
              aria-label="Monochrome website and cohesive brand identity."
            >
              <g>
                <path d="M109.336 104.331a17.481 17.481 0 0 1-18.671 0L20.222 59.784H20v78.442c0 9.54 7.784 17.273 17.386 17.273h125.228c9.602 0 17.386-7.733 17.386-17.273V59.784h-.222l-70.442 44.547z"></path>
                <path d="M22.578 44.5l.215.125 68.173 43.111a16.917 16.917 0 0 0 18.069 0l68.173-43.111.215-.125H22.578z"></path>
              </g>
            </svg>
            <div className="font-[ANZO2] flex gap-3">
              <span className="" id="t1">
                15:20
              </span>
              <span className="" class="wixui-rich-text__text">
                AMS&nbsp;| NL
              </span>
            </div>
            <svg
              preserveAspectRatio="xMidYMid meet"
              data-bbox="55.7 73.8 88.6 52.6"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="fill-white -rotate-180"
              viewBox="55.7 73.8 88.6 52.6"
              data-type="shape"
              role="img"
              aria-label="Minimalist website design and brand identity."
            >
              <g>
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M140.5 73.8h-81c-2.1 0-3.8 1.7-3.8 3.8s1.7 3.8 3.8 3.8h81c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.8-3.8-3.8z"
                ></path>
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M112 96.2H59.5c-2.1 0-3.8 1.7-3.8 3.8s1.7 3.8 3.8 3.8H112c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.8-3.8-3.8z"
                ></path>
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M140.5 118.8h-81c-2.1 0-3.8 1.7-3.8 3.8s1.7 3.8 3.8 3.8h81c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.8-3.8-3.8z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <h1 className="md:hidden block font-[ANZO5] text-8xl tracking-wide  uppercase text-end">Hello</h1>

        <div className="md:hidden h-[123vh]  block">
        <FloatingTxt floatingRef={ref} />
        </div>

      <FloatingTxt className='md:block hidden' floatingRef={ref} />
      <TitleTxt/>
      </div>
    </div>
  );
}

export default Page1;
