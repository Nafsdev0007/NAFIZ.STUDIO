import React from 'react'

function Page6() {
  return (
    <div className='h-screen md:block about hidden md:w-full md:p-2 lg:p-3 px-2'>
        <div className="h-full  w-full md:rounded-[4.55vw] overflow-hidden lg:rounded-[2.5vw] rounded-[7.5vw] shadow-[0_0_6px_2px_#BBBBBB] relative">
            <video src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/480p/mp4/file.mp4" autoPlay muted loop lazy-loading="true" className='object-cover w-full h-full' ></video>
            <h1 className='font-[ANZO5] text-[40vw] tracking-wide  absolute z-10 -top-8 left-16 uppercase text-white'>About</h1>
        </div>
    </div>
  )
}

export default Page6;
