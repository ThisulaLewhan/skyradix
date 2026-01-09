import Image from 'next/image';
import { poppins700, poppins600, poppins500 } from "@/app/fonts";

const PostLaunchSection = () => {
  const services = [
    {
      title: "Ongoing Maintenance",
      description: "Regular updates, bug fixes, and performance enhancements to keep your website running smoothly",
      image: "/images/Ongoing-Maintenance.png"
    },
    {
      title: "Security Monitoring",
      description: "Protection against cyber threats with regular backups, updates, and advanced security measures",
      image: "/images/Security-Monitoring.png"
    },
    {
      title: "Technical Support",
      description: "Quick and reliable assistance for any issues or questions, ensuring minimal downtime and maximum functionality",
      image: "/images/Technical-Support.png"
    },
    {
      title: "Scalability Support",
      description: "As your brand grows, we’re here to expand and enhance your website to meet new challenges and opportunities",
      image: "/images/Scalability-Support.png"
    },
    {
      title: "Analytics & Insights",
      description: "Monthly performance reports and actionable insights to refine your marketing efforts and website effectiveness",
      image: "/images/Analytics-Insights.png"
    }
  ];

  return (
    <section className="mx-auto mb-[clamp(4rem,10vw,8rem)] max-w-[1600px] px-4">
      <h2 className={`${poppins700.className} mb-[clamp(2rem,5vw,4rem)] text-center text-[clamp(2rem,3vw,3.3rem)] font-bold leading-[1.2] text-[#111111]`}>
        Post-Launch <br/>Support & Services
      </h2>

      <div className="mx-auto grid max-w-5xl gap-5">
        {services.map((service, index) => (
          <div 
          key={index}
          className="flex flex-col items-center justify-between gap-5 rounded-[40px] bg-[rgba(190,190,190,0.36)] 
          p-[clamp(1.5rem,2vw,3rem)] shadow-[6px_6px_45px_3px_rgba(255,255,255,0.4)_inset,6px_6px_25px_3px_rgba(0,0,0,0.5)] 
          backdrop-blur-sm transition-all duration-300 md:flex-row md:gap-8 
           hover:border  hover:-translate-y-1"
        >
          <div className="flex-1 space-y-2 text-center md:text-left md:ml-14">
            <h2 className={`${poppins600.className} text-[clamp(1.5rem,1vw,2rem)] font-bold leading-tight text-[#111111] transition-colors duration-300 `}>
              {service.title}
            </h2>
            <p className={`${poppins500.className} mx-auto max-w-[50ch] text-[clamp(1rem,1vw,1.25rem)] font-medium leading-relaxed text-black md:mx-0 transition-colors duration-300 `}>
              {service.description}
            </p>
          </div>
          
          <div className="shrink-0 md:mr-20">
            <Image
              src={service.image}
              alt={service.title}
              width={100}
              height={100}
              className="h-[clamp(90px,2vw,120px)] w-[clamp(90px,2vw,120px)] object-contain transition-transform duration-300 hover:brightness-125"
            />
          </div>
        </div>
        
        ))}
      </div>
    </section>
  );
};

export default PostLaunchSection;