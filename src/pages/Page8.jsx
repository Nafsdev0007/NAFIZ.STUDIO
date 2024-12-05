import { useGSAP } from "@gsap/react";
import gsap, { Power4, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function Page8() {
  const clockRef = useRef(null);
 
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });
    
    tl.to(clockRef.current, {
      rotation: 360,  // পুরো 360 ডিগ্রি ঘুরবে
      duration: 14,   // 60 সেকেন্ডে একবার পুরো ঘুরবে
      ease: "steps(10), Power4.inOut ", // স্টেপস এর সাথে স্মুথ ট্রানজিশন
      transformOrigin: "center center",
    });
  });

  useGSAP(function(){
      gsap.from(".sand-box1",{
        opacity:0,
        scrollTrigger:{
          trigger:".main-box",
          start:"top 80%",
          end:"top 50%",
          scrub:2
        }
      })
      gsap.from(".sand-box2",{
        opacity:0,
        scrollTrigger:{
          trigger:".main-box",
          start:"top 55%",
          end:"top 35%",
          scrub:2
        }
      })
      gsap.from(".sand-box3",{
        opacity:0,
        scrollTrigger:{
          trigger:".main-box",
          start:"top 40%",
          end:"top 25%",
          scrub:2
        }
      })
      gsap.from(".sand-box4",{
        opacity:0,
        scrollTrigger:{
          trigger:".main-box",
          start:"top 30%",
          end:"top 5%",
          scrub:2
        }
      })
      gsap.from(".sand-box5",{
        opacity:0,
        scrollTrigger:{
          trigger:".main-box",
          start:"top 13%",
          end:"top -10%",
          scrub:2
        }
      })
      gsap.from(".sand-box6",{
        opacity:0,
        scrollTrigger:{
          trigger:".main-box",
          start:"top -15%",
          end:"top -40%",
          scrub:2
        }
      })
      gsap.from(".sand-box7",{
        opacity:0,
        scrollTrigger:{
          trigger:".main-box",
          start:"top -45%",
          end:"top -60%",
          scrub:2
        }
      })
  })

  return (
    <div className="h-[157vh] mt-5 main-box md:w-full md:p-2 lg:p-3 px-2 w-[100vw]">
      <div className="h-full w-full bg-black relative md:rounded-[4.55vw] md:px-[40px]  px-[19px] lg:px-[67px] lg:rounded-[2.5vw] rounded-[7.5vw] flex-col  sm:flex-row flex sm:justify-between shadow-[0_0_6px_2px_#BBBBBB] ">
        <div className="left-side  flex flex-col md:h-full justify-between md:block pt-10 md:pt-[70px]">
          <div className="relative z-10">
            <h1 className="font-[ANZO5] text-[45vw] leading-[45vw] md:text-[19.5vw] tracking-wide md:leading-[16vw] text-[#FAFAFA]">
              RIGHT
            </h1>
            <h1 className="font-[ANZO5] text-[45vw] leading-[30vw] md:text-[19.5vw] tracking-wide md:leading-[15.5vw] text-[#9B9B9B]">
              FIT
            </h1>
          </div>
          <img
            ref={clockRef}
            src="https://static.wixstatic.com/media/11062b_b42f6deed88e48509affdc02c3eb5b45f000.png/v1/fill/w_334,h_334,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/11062b_b42f6deed88e48509affdc02c3eb5b45f000.png"
            loading="lazy"
            className="object-cover z-1 h-40 top-52 md:left-14 left-40 md:h-[62vh] md:top-96 absolute"
            alt="clock"
          />
          <div className="mb-8 absolute -bottom-2 md:static  lg:mt-[407px]">
            <h1 className="text-[#9B9B9B] text-[15px] leading-none md:text-lg font-[ANZO3]">
              SOUNDS GOOD?
            </h1>
            <h1>
              <span className="text-[#9B9B9B] text-[15px] md:text-lg font-[ANZO3]">
                THEN PLEASE
              </span>
              &nbsp;
              <span className="text-[#fafafa]  text-[15px] md:text-lg leading-none font-[ANZO4] opacity-90">
                EMAIL ME
              </span>
            </h1>
          </div>
        </div>

        <div className="right-side space-y-8 md:space-y-14 md:w-[58%] w-[95%]  md:-mb-32 mt-[60px] md:mt-[70px]">
          <div className="sand-box1 text-[15px] md:text-lg space-y-1">
            <h1 className="text-[#9B9B9B] leading-none  font-[ANZO3]">
              PERSONALITY
            </h1>
            <h1 className="text-[#fafafa] flex flex-col gap-1  leading-none font-[ANZO2] ">
              <span>
                Business relationships build on trust and compassion vs how can
                I get more
              </span>{" "}
              <span> for less +/-</span>
            </h1>
          </div>

          <div className="sand-box2 text-[15px] md:text-lg space-y-1">
            <h1 className="text-[#9B9B9B] leading-none  font-[ANZO3]">
              APPROACH
            </h1>
            <h1 className="text-[#fafafa] flex flex-col gap-1  leading-none font-[ANZO2] ">
              <span>
                Full dive into personality, goals and objectives with
                transparency of worq
              </span>{" "}
              <span>
                process vs template and unmanageable office routine +/-
              </span>
            </h1>
          </div>

          <div className="sand-box3 text-[15px] md:text-lg space-y-1">
            <h1 className="text-[#9B9B9B] leading-none  font-[ANZO3]">
              DESIGN
            </h1>
            <h1 className="text-[#fafafa] flex flex-col gap-1  leading-none font-[ANZO2] ">
              <span>
                Design that is actually functional and helps to achieve results
                is design that
              </span>{" "}
              <span>works +/-</span>
            </h1>
          </div>

          <div className="sand-box4 text-[15px] md:text-lg space-y-1">
            <h1 className="text-[#9B9B9B] leading-none font-[ANZO3]">
              FOCUS
            </h1>
            <h1 className="text-[#fafafa] flex flex-col gap-1  leading-none font-[ANZO2] ">
              <span>
                How can I help and what can I do solve your problem or objective
                vs how can I
              </span>{" "}
              <span>sell you more +/-</span>
            </h1>
          </div>

          <div className="sand-box5 text-[15px] md:text-lg space-y-1">
            <h1 className="text-[#9B9B9B] leading-none  font-[ANZO3]">
              FIT
            </h1>
            <h1 className="text-[#fafafa] flex flex-col gap-1  leading-none font-[ANZO2] ">
              <span>
                The perfect suit is the one fits you vs the one you can fit in.
                Choose wisely you
              </span>{" "}
              <span>are investing in yourself! +/-</span>
            </h1>
          </div>

          <div className="sand-box6 text-[15px] md:text-lg space-y-1">
            <h1 className="text-[#9B9B9B] leading-none  font-[ANZO3]">
              CORE VALUES
            </h1>
            <h1 className="text-[#fafafa] flex flex-col gap-1  leading-none font-[ANZO2] ">
              <span>
                Time, trust and experience are resources we can not buy, yet we
                are sharing
              </span>{" "}
              <span>them and exchange +/-</span>
            </h1>
          </div>

          <div className="sand-box7 text-[15px] md:text-lg space-y-1">
            <h1 className="text-[#9B9B9B] leading-none  font-[ANZO3]">
              TO CONSIDER
            </h1>
            <h1 className="text-[#fafafa] flex flex-col gap-1  leading-none font-[ANZO2] ">
              <span>
                Your brand, your personal identity is the reflection of your
                passion and goals on
              </span>{" "}
              <span>your future; your first online impression matters +/-</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page8;
