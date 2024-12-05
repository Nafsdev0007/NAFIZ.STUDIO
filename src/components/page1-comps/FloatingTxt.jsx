import React from 'react'

function FloatingTxt({floatingRef,className}) {
    return (
        <div 
            id="floating-txt" 
            ref={floatingRef} 
            className={`lg:mt-40 sticky top-0 md:static pt-8 md:pt-0 mt-52 md:ml-0 ml-1 md:mt-9 z-[100000000000000] ${className || ''}`}
        >
            <h1 className="page1-floatingtext-h1">
            I AM <span className="text-black inline-block mr-5">DARK MODE</span><span className='text-[#000] hidden md:inline-block md:text-[#fafafa]'>™</span>
            </h1>
            <h1 className="w-full md:text-[7.77vw] text-[36.5vw] font-[ANZO5] tracking-wide md:tracking-normal leading-[30vw]  md:leading-[7vw] md:font-[ANZO1] font-black">
                DEVELOPER
            </h1>
            <h1 className="page1-floatingtext-h1">TO HIRE</h1>
        </div>
    )
}

export default FloatingTxt