import React from 'react'

function Page10() {
  return (
    <div className='h-[100vh] md:w-full md:p-2 lg:p-3 px-2 w-[100vw]'>
        <div className="h-full w-full bg-black justify-center gap-6 md:justify-normal  md:rounded-[4.55vw] lg:rounded-[2.5vw] rounded-[7.5vw] shadow-[0_0_6px_2px_#BBBBBB] flex flex-col overflow-hidden md:gap-3 relative">
            <video src="https://video.wixstatic.com/video/11062b_cb0c4d13153f4008920bb26beda8de0f/480p/mp4/file.mp4" autoPlay muted loop lazy-loading="true" className='object-cover w-full h-full absolute top-0 left-0 z-0'></video>

            <div className="personal w-full  flex flex-col justify-center -space-y-16 items-center ">
                <h1 className='sm:text-[12vw] text-[31vw] md:leading-[16vw] font-[ANZO5]  uppercase tracking-wide relative text-[#fafafa] z-10'>Personal</h1>
                <h4 className='relative -bottom-3 text-[#9B9B9B] text-[] sm:text-[1.33vw] font-[ANZO2] z-10'>Intuition, Imagination, Discipline</h4>
            </div>

            <div className="professional w-full  flex flex-col -space-y-16 items-center ">
                <h1 className='sm:text-[12vw] md:leading-[16vw] text-[28vw] font-[ANZO5]  uppercase tracking-wide relative text-[#fafafa] z-10'>professional</h1>
                <h4 className='relative -bottom-3 text-[#9B9B9B] sm:text-[1.33vw] font-[ANZO2] z-10'>Time Management, Multitasking, Creativity </h4>
            </div>

            <div className="addtional w-full  flex flex-col -space-y-16 items-center ">
                <h1 className='sm:text-[12vw] md:leading-[16vw] text-[31vw] font-[ANZO5]  uppercase tracking-wide relative text-[#fafafa] z-10'>additional</h1>
                <h4 className='relative -bottom-3 text-[#9B9B9B] sm:text-[1.33vw] font-[ANZO2] z-10'>3D, Animation, AI Tools</h4>
            </div>

        </div>
    </div>
  )
}

export default Page10