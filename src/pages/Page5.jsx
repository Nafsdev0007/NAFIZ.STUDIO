import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import React from "react";
gsap.registerPlugin(ScrollTrigger);

function Page5() {
  let mm = gsap.matchMedia();

  mm.add("(max-width:640px)", () => {
    useGSAP(function () {
      gsap.from(".rotate-text-mid", {
        transform: "rotateX(-90deg)",
        opacity: 0,
        duration: 0.7,
        stagger: 1,
        scrollTrigger: {
          trigger: ".rotate-text-mid",
          start: "top 100%",
          end: "top -2%",
          scrub: 2,
        },
      });
    });
  });

  mm.add("(min-width:641px)", () => {
    useGSAP(function () {
      gsap.from(".rotate-text-mid", {
        transform: "rotateX(-90deg)",
        opacity: 0,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: ".rotate-text-mid",
          start: "top 80%",
          end: "top -270%",
          scrub: 2,
        },
      });
    });
  });

  return (
    <div className="md:mt-20   w-[100vw] mt-14">
      <div>
        <h1 className="text-center  rotate-text-mid  font-[ANZO5] uppercase leading-[33.3vw] text-[41vw]">
          HELPING
        </h1>
      </div>
      <div>
        <h1 className="text-center text-[#9B9B9B] rotate-text-mid font-[ANZO5] uppercase leading-[33.3vw] text-[41vw]">
          MY
        </h1>
      </div>
      <div>
        <h1 className="text-center rotate-text-mid font-[ANZO5] uppercase leading-[33.3vw] text-[41vw]">
          CLIENTS
        </h1>
      </div>
      <div>
        <h1 className="text-center rotate-text-mid font-[ANZO5] uppercase leading-[33.3vw] text-[41vw]">
          TO ACHIEVE
        </h1>
      </div>
      <div>
        <h1 className="text-center text-[#9B9B9B] rotate-text-mid font-[ANZO5] uppercase leading-[33.3vw] text-[41vw]">
          THEIR
        </h1>
      </div>
      <div>
        <h1 className="text-center rotate-text-mid font-[ANZO5] uppercase leading-[33.3vw] text-[41vw]">
          DREAMS!
        </h1>
      </div>
    </div>
  );
}

export default Page5;
