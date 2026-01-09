import Image from 'next/image';

const HeroSection = () => {
  return (
    <section 
      id="home"
      className="relative w-full min-h-[40vh] md:min-h-[40vh] lg:min-h-[90vh]  flex flex-col items-center justify-center 
                 bg-gradient-to-b from-[#f5f5f5] to-[#dfdaee] overflow-hidden "
    >
      {/* Main Logo */}
      <div className="sm:max-w-20 md:max-w-lg lg:max-w-lg w-full mx-auto px-14 mt-0 lg:mt-0 xl:mt-0 ">
        <Image
          src="/images/hero-content.png"
          alt="Skyradix white logo"
          width={500}
          height={200}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Wave SVG */}
      <div className="relative bottom-0 left-0 w-full sm:mt-0">
        <img
          src="/images/SVG-wave.png"
          alt="Decorative wave"
          className="w-full h-auto"
        />
      </div>

    {/* Scroll Down Indicator */}
    <div className="absolute bottom-[clamp(1rem,1vw,6rem)] md:bottom-[clamp(5rem,1vw,6rem)] lg:bottom-[1px] left-[45%] md:left-[47%] lg:left-[48%] z-20 h-8 w-8 -translate-x-1/2 animate-bounce">
      <Image
        src="/images/icon-scroll-down.png"
        alt="Scroll down"
        className="h-full w-full object-contain"
        width={32}
        height={32}
        loading="lazy"
        style={{
          transform: 'translateX(-1px)' // Fine-tune horizontal alignment
        }}
      />
    </div>   

    </section>
  );
};

export default HeroSection;