import React from 'react';

function About() {
  return (
    <div className='md:hidden relative block h-screen bg-[#fafafa] z-10 overflow-hidden  w-[100vw]'>
      {/* Video container */}
      <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
        <video
          className='object-cover bg-right h-full w-full'
          src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/480p/mp4/file.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
      {/* Image overlay */}
      <img
        src="https://static.wixstatic.com/media/f1c650_a68775e3a5554cd38e6409c9ab88eb2c~mv2.png/v1/fill/w_662,h_1254,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Subtract%20(2).png"
        className='absolute top-0 left-0 h-full w-full object-cover z-10'
        alt=""
      />
    </div>
  );
}

export default About;
