import { poppins700, poppins600, poppins500 } from "@/app/fonts";

const ServicesSection = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored applications built to solve your unique challenges"
    },
    {
      title: "Enterprise Software Solutions",
      description: "Optimize and automate your business operations"
    },
    {
      title: "API Integration & Development",
      description: "Connect and enhance your digital ecosystem"
    }
  ];

  return (
    <section className="mx-auto max-w-full px-4 py-16 sm:px-6 lg:px-8 ">
      <h2 className={`${poppins700.className} mb-20 text-center text-[clamp(2rem,3vw,3rem)] leading-[1.2] text-[#111111]`}>
        What We Offer in Software<br/> Development
      </h2>

      <div className="mx-auto grid max-w-5xl grid-cols-1 justify-items-center gap-10 md:gap-10  md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div 
            key={index}
            className={`flex min-h-[260px] w-full max-w-[300px] flex-col items-center justify-center rounded-[40px] bg-[#918a8a5c] p-8 text-center shadow-[6px_6px_45px_3px_rgba(255,255,255,0.4)_inset,6px_6px_25px_3px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all hover:scale-[1.02] md:min-h-[260px] ${
              index === 2 ? "md:col-span-2 md:max-w-[300px] lg:col-span-1" : ""
            }`}
          >
            <h3 className={`${poppins600.className} mb-10 -mt-[0.5rem] text-xl font-bold leading-tight text-[#111111]  md:text-xl lg:text-[1.4rem]`}>
              {service.title}
            </h3>
            <p className={`${poppins500.className} text-balance text-md font-semibold leading-relaxed text-[#111111] md:text-md`}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;