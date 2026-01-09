import Image from 'next/image';
import { poppins700, poppins500 } from '@/app/fonts';

const HeroSection = () => {
  return (
    <section className="relative h-[10vh] min-h-[400px] md:min-h-[500px] lg:min-h-[500px] w-full overflow-hidden bg-gradient-to-b from-[#f5f5f5] to-[#dfdaee]">
      {/* Background Wave */}
      <div className="absolute left-1/2 z-10 mt-[100px] lg:mt-[50px] md:mt-[100px] h-full w-screen -translate-x-1/2">
        <Image
          src="/images/SVG-wave.png"
          alt="Wave Background"
          className="h-auto w-full object-cover opacity-10"
          width={1200}
          height={300}
          priority
        />
      </div>

     {/* Main Content */}
     <div className="relative z-20 flex h-full flex-col items-center justify-center px-8 text-center">
     <h1 className={`${poppins700.className} mb-8 max-w-[1255px] bg-gradient-to-r from-[#316ff6] via-[#7b52d1] via-[36.5%] to-[#ff5826] bg-clip-text text-[clamp(22px,4vw,63px)] font-bold leading-tight text-transparent`}>
          {`Web Solutions Designed to`}
          <br />
          {`Elevate Your Online Presence`}
        </h1>

        <p className={`${poppins500.className} mb-12 max-w-[580px] text-[clamp(12px,2.5vw,19px)] leading-relaxed text-black`}>
        Modern, responsive, and user-friendly websites tailored
          <br />
          to your business goals. Build an impactful
          <br />
          digital presence with Skyradix
        </p>

        <a href="#contact" className="no-underline -mt-5 md:mt-0 lg:mt-0 mb-10">
          <button className="hover:scale-105 h-[46px] rounded-full bg-[#316ff6] px-8 transition-transform duration-300 ease-in-out">
            <span className={`text-[clamp(12px,2.5vw,16px)] font-medium text-white ${poppins500.className}`}>
              Get Free Consultation
            </span>
          </button>
        </a>
      </div>

    {/* Scroll Down Indicator */}
    <div className="absolute bottom-[clamp(1rem,1vw,6rem)] left-[50%] md:left-[50%] lg:left-[50%] z-20 h-8 w-8 -translate-x-1/2 animate-bounce">
      <Image
        src="/images/icon-scroll-down.png"
        alt="Scroll down"
        className="h-full w-full object-contain"
        width={32}
        height={32}
        loading="lazy"
        style={{
          transform: 'translateX(-25px)' // Fine-tune horizontal alignment
        }}
      />
    </div>   

 </section>
  );
};

export default HeroSection;