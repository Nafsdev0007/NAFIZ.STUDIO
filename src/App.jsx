import React from "react";
import Page1 from "./pages/Page1";
import Header from "./components/Header";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import About from "./components/Page6-comps/About";
import Triangle from "./components/page7-comps/Triangle";
import Page8 from "./pages/Page8";
import Page9 from "./pages/Page9";
import Page10 from "./pages/Page10";
import Astro from "./components/last-comps/Astro";
import Page11 from "./pages/Page11";
import Footer from "./pages/Footer";
import Lenis from "lenis";
import 'lenis/dist/lenis.css'


function App() {

  // Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

  return (
    <>
      <div className="bg-[#fafafa] z-[1000000000000000] overflow-x md:w-full">
        <Header />
        <Page1 />
        <Page2 />
        <Page3 />
        <About />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Triangle />
        <Page8 />
        <Page9/>
        <Page10/>
        <Astro/>
        <Page11/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
