import { useState, useEffect } from 'react';
import { poppins700, poppins500 } from '@/app/fonts';

const AboutSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const GradientText = ({ children }) => (
    <span className={`${poppins700.className} bg-gradient-to-r from-[#111] to-[#313131] bg-clip-text text-transparent`}>
      {children}
    </span>
  );

  return (
<section 

id="about" 

className="lg:mt-72  my-12 lg:my-24 p-6 lg:p-12

  rounded-[40px] bg-[rgba(164,164,164,0.36)] 

  shadow-[6px_6px_45px_3px_rgba(255,255,255,0.40)_inset,6px_6px_25px_3px_rgba(0,0,0,0.50)] 

  backdrop-blur-[2px] lg:max-w-5xl w-full mx-auto
  
  sm:translate-x-0 md:translate-x-0 lg:translate-x-0

  "

>
      {/* Header */}
      <h1 className="text-[40px] lg:text-[55px] font-bold text-left mb-4 lg:mb-5">
        <GradientText>About Us</GradientText>
      </h1>

      {isMobile ? (
        <MobileLayout />
      ) : (
        <DesktopLayout />
      )}

      <VisionMissionSection />
    </section>
  );
};

// Mobile Layout Component (without image)
const MobileLayout = () => (
  <div className="flex flex-col items-center">
    <div className="space-y-4">
      <AboutText />
    </div>
  </div>
);

// Desktop Layout Component (with image)
const DesktopLayout = () => (
  <div className="flex flex-row items-start gap-8">
    <div className="flex-1 space-y-6">
      <AboutText />
    </div>
    <AboutImage />
  </div>
);

// Reusable About Text Component
const AboutText = () => (
  <div className={`${poppins500.className}`}>
    <p className="text-sm lg:text-[16px] text-black leading-relaxed text-justify hyphens-auto">
      Welcome to Skyradix – where innovation meets limitless possibilities.
    </p>
    <p className="text-sm lg:text-[16px] mt-4 lg:mt-6 text-black leading-relaxed text-justify hyphens-auto">
      At Skyradix, we combine innovation with strategy to deliver web, mobile, and software
      solutions that drive success. What sets us apart is our focus on integrating marketing into
      every project, ensuring your digital presence stands out.
    </p>
    <p className="text-sm lg:text-[16px] mt-4 lg:mt-6 text-black leading-relaxed text-justify hyphens-auto">
      We're dedicated to empowering businesses through cutting-edge technology. While we focus on
      external projects to grow and establish our brand, our vision is to develop transformative
      platforms and software that shape a smarter, more connected future.
    </p>
  </div>
);

// Reusable Image Component
const AboutImage = () => (
  <div className="shrink-0 w-full md:w-[35%] lg:w-[35%] flex justify-center">
    <img
      src="/images/about-image.png"
      alt="Skyradix target"
      className="w-[250px] lg:w-full max-w-[350px] object-contain lg:-mt-14"
      loading="lazy"
    />
  </div>
);

// Vision & Mission Section
const VisionMissionSection = () => (
  <div className={`mt-8 lg:mt-16 flex flex-col lg:flex-row gap-8 -ml-5 ${poppins500.className}`}>
    <SectionCard title="Our Vision">
      To empower a better tomorrow by harnessing the power of technology,
      shaping a smarter, more sustainable, and interconnected digital world.
    </SectionCard>

    <SectionCard title="Our Mission">
      To deliver cutting-edge digital solutions with a strategic focus on
      marketing and innovation, helping businesses thrive in an interconnected world, while
      building a foundation for transformative internal projects that redefine technology's role
      in shaping the future.
    </SectionCard>
  </div>
);

// Reusable Section Card Component
const SectionCard = ({ title, children }) => (
  <div className="flex-1 p-6 rounded-xl">
    <h2 className={`${poppins700.className} text-[30px] lg:text-[40px] font-bold mb-4 text-black`}>
      <span className="bg-gradient-to-r from-[#111] to-[#313131] bg-clip-text text-transparent">
        {title}
      </span>
    </h2>
    <p className="text-black leading-relaxed text-justify hyphens-auto tracking-tight font-poppins text-sm lg:text-[16px] font-medium">
      {children}
    </p>
  </div>
);

export default AboutSection;