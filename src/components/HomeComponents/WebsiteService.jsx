import React from 'react';
import { poppins500, poppins700 } from '@/app/fonts';


const handleExploreClick = () => {
  window.location.href = '/services/website';
};


const handleLetsTalkClick = () => {
  window.location.hash = '#contact';
};

const WebServiceMobile = () => {
  return (
    <div className="flex flex-col items-center p-4 mt-10">
      <h1 className={`mt-32 text-[35px] text-center font-bold mb-2 ${poppins700.className} bg-gradient-to-r from-[#111] to-[#313131] bg-clip-text text-transparent`}>
        Web Solutions
      </h1>
      <img src="/images/web-service.png" alt="Web Solutions" className="mt-10 w-7/12 h-auto rounded mb-4" />
      <p className={`mb-0 text-[18px] mt-4 p-4 text-center ${poppins500.className} text-[#000] font-medium`}>
        Crafting modern, responsive websites designed to captivate your audience <br /> and drive business growth.
      </p>
      <p className={`mb-4 text-[18px] p-4 text-center ${poppins500.className} text-[#000] font-medium`}>
        Our tailored designs ensure your online presence stands out and <br /> delivers seamless user experiences.
      </p>
      <div className={`flex gap-4 mt-6 flex-wrap justify-center ${poppins500.className}`}>
        <button onClick={handleExploreClick} className="btn explore w-[clamp(150px,0vw,246px)] h-[clamp(50px,8vh,42px)] rounded-[50px] font-poppins font-medium text-[18px] text-white bg-[rgba(0,0,0,0.5)] shadow-[0px_6px_6.8px_1px_rgba(0,0,0,0.30)] transition-transform duration-300 ease-in-out hover:translate-y-[-3px]">
          Explore
        </button>
        <button onClick={handleLetsTalkClick} className="btn lets-talk w-[clamp(150px,0vw,246px)] h-[clamp(50px,8vh,42px)] rounded-[50px] font-poppins font-medium text-[18px] text-white bg-[#316ff6] shadow-[0px_6px_6.8px_1px_rgba(0,0,0,0.30)] transition-transform duration-300 ease-in-out hover:translate-y-[-3px]">
          Let's Talk
        </button>
      </div>
    </div>
  );
};

const WebServiceDesktop = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 mt-60">
      {/* Image Section */}
      <div className="md:w-1/3 mt-4 md:mt-0 lg:ml-10">
        <img src="/images/web-service.png" alt="Web Solutions" className="w-full h-auto rounded" />
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 md:pl-4 lg:mr-36">
        {/* Container for Title, Content, and Buttons */}
        <div className="flex flex-col items-end">
          <h1 className={`text-[45px] font-bold mb-2 ${poppins700.className} bg-gradient-to-r from-[#111] to-[#313131] bg-clip-text text-transparent text-right`}>
            Web Solutions
          </h1>
          <p className={`mb-4 text-[24px] md:text-lg mt-4 ${poppins500.className} text-[#000] font-medium text-right`}>
            Crafting modern, responsive websites designed to <br /> captivate your audience and drive business growth.
          </p>
          <p className={`mb-4 text-[24px] md:text-lg ${poppins500.className} text-[#000] font-medium text-right`}>
            Our tailored designs ensure your online presence stands <br /> out and delivers seamless user experiences.
          </p>
          <div className={`flex gap-8 mt-12 flex-wrap justify-end`}>
            <button onClick={handleExploreClick} className={` ${poppins500.className} btn explore w-[clamp(180px,0vw,246px)] h-[clamp(50px,8vh,72px)] rounded-[50px] font-poppins font-medium text-[24px] text-white bg-[rgba(0,0,0,0.5)] shadow-[0px_6px_6.8px_1px_rgba(0,0,0,0.30)] transition-transform duration-300 ease-in-out hover:translate-y-[-3px]`}>
              Explore
            </button>
            <button onClick={handleLetsTalkClick} className={` ${poppins500.className} btn lets-talk w-[clamp(180px,0vw,246px)] h-[clamp(50px,8vh,72px)] rounded-[50px] font-poppins font-medium text-[24px] text-white bg-[#316ff6] shadow-[0px_6px_6.8px_1px_rgba(0,0,0,0.30)] transition-transform duration-300 ease-in-out hover:translate-y-[-3px]`}>
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const WebService = () => {
  return (
    <>
      <div className="block lg:hidden">
        <WebServiceMobile />
      </div>
      <div className="hidden lg:block">
        <WebServiceDesktop />
      </div>
    </>
  );
};

export default WebService;