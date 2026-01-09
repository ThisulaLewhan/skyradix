import React from 'react';
import { poppins500, poppins700 } from '@/app/fonts';
import Link from 'next/link';

const handleExploreClick = () => {
  window.location.href = '/services/software';
};


const handleLetsTalkClick = () => {
  window.location.hash = '#contact';
};

const SoftwareServiceMobile = () => {

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className={`mt-32 text-[35px]  text-center font-bold mb-2 ${poppins700.className} bg-gradient-to-r from-[#111] to-[#313131] bg-clip-text text-transparent`}>
        Software Solutions
      </h1>
      <img src="/images/software-service.png" alt="Software Solutions" className="mt-10 w-7/12 h-auto rounded mb-4" />
      <p className={`mb-0 text-[18px] mt-4 p-4 text-center ${poppins500.className} text-[#000] font-medium`}>
        Developing custom software that streamlines operations and empowers businesses to achieve their goals.
      </p>
      <p className={`mb-0 text-[18px] mt-4 p-4 text-center ${poppins500.className} text-[#000] font-medium`}>
        From idea to execution, our solutions are built to deliver efficiency, scalability, and innovation.
      </p>
      <div className={`flex gap-4 mt-6 flex-wrap justify-center ${poppins500.className}`}>
        <button onClick={handleExploreClick} className="btn explore w-[clamp(150px,0vw,46px)] h-[clamp(50px,8vh,42px)] rounded-[50px] font-poppins font-medium text-[18px] text-white bg-[rgba(0,0,0,0.5)] shadow-[0px_6px_6.8px_1px_rgba(0,0,0,0.30)] transition-transform duration-300 ease-in-out hover:translate-y-[-3px]">
          Explore
        </button>
        <button onClick={handleLetsTalkClick} className="btn lets-talk w-[clamp(150px,0vw,246px)] h-[clamp(50px,8vh,42px)] rounded-[50px] font-poppins font-medium text-[18px] text-white bg-[#316ff6] shadow-[0px_6px_6.8px_1px_rgba(0,0,0,0.30)] transition-transform duration-300 ease-in-out hover:translate-y-[-3px]">
          Let's Talk
        </button>
      </div>
    </div>
  );
};

const SoftwareServiceDesktop = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4">
      <div className="md:w-1/2 md:pr-4 lg:ml-16 mt-32">
        <h1 className={`lg:text-[45px] font-bold mb-2 ${poppins700.className} bg-gradient-to-r from-[#111] to-[#313131] bg-clip-text text-transparent`}>
          Software Solutions
        </h1>
        <p className={`mb-4 text-[24px] md:text-lg mt-4 ${poppins500.className} text-[#000] font-medium`}>
          Developing custom software that streamlines operations <br /> and empowers businesses to achieve their goals.
        </p>
        <p className={`mb-4 text-[24px] md:text-lg ${poppins500.className} text-[#000] font-medium`}>
          From idea to execution, our solutions are built to deliver <br /> efficiency, scalability, and innovation.
        </p>
        <div className={`flex gap-8 mt-12 flex-wrap justify-start ${poppins500.className}`}>
          <button onClick={handleExploreClick} className={` ${poppins500.className} btn explore w-[clamp(180px,0vw,246px)] h-[clamp(50px,8vh,72px)] rounded-[50px] font-poppins font-medium text-[24px] text-white bg-[rgba(0,0,0,0.5)] shadow-[0px_6px_6.8px_1px_rgba(0,0,0,0.30)] transition-transform duration-300 ease-in-out hover:translate-y-[-3px]`}>
            Explore
          </button>
          <button onClick={handleLetsTalkClick} className={` ${poppins500.className} btn lets-talk w-[clamp(180px,0vw,246px)] h-[clamp(50px,8vh,72px)] rounded-[50px] font-poppins font-medium text-[24px] text-white bg-[#316ff6] shadow-[0px_6px_6.8px_1px_rgba(0,0,0,0.30)] transition-transform duration-300 ease-in-out hover:translate-y-[-3px]`}>
            Let's Talk
          </button>
        </div>
      </div>

      <div className="md:w-4/12 mt-32 lg:mr-36">
        <img src="/images/software-service.png" alt="Software Solutions" className="w-full h-auto rounded" />
      </div>
    </div>
  );
};

const SoftwareService = () => {
  return (
    <div id="services">
      <div className="block lg:hidden">
        <SoftwareServiceMobile />
      </div>
      <div className="hidden lg:block">
        <SoftwareServiceDesktop />
      </div>
    </div>
  );
};

export default SoftwareService;