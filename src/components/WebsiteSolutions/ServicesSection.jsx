import { poppins700, poppins600, poppins500 } from "@/app/fonts";

const ServicesSection = () => {
  const services = [
    {
      title: "Custom Website Development",
      description: "Built from the ground up, tailored to reflect your brand’s identity and goals"
    },
    {
      title: "E-Commerce Solutions",
      description: "Powerful online stores with marketing techniques to boost sales"
    },
    {
      title: "Landing Page Design",
      description: "High-converting pages, crafted using proven marketing strategies"
    },
    {
      title: "Marketing Enhanced Websites",
      description: "SEO, analytics, and user-focused design to maximize business growth"
    },
    {
      title: "Website Redesign",
      description: "Refresh your existing website with enhanced features designed to improve engagement"
    }
  ];

  return (
    <section className="mx-auto max-w-full px-4 py-16 sm:px-6 lg:px-8">
      <h2 className={`${poppins700.className} mb-10 text-center text-[clamp(2rem,3vw,3.3rem)] leading-[1.2] text-[#111111]`}>
        What We Offer in Web <br className="hidden md:block" />Development
      </h2>

      {/* Mobile & Tablet: Two Cards Per Row */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:hidden">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex min-h-[300px] w-full max-w-[360px] flex-col items-center justify-center rounded-[40px] bg-[#bebebe5c] p-8 text-center shadow-[6px_6px_45px_3px_rgba(255,255,255,0.4)_inset,6px_6px_25px_3px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all hover:scale-[1.02]"
          >
            <h3 className={`${poppins600.className} mb-10 -mt-[2.5rem] text-2xl font-bold leading-tight text-[#111111]`}>
              {service.title}
            </h3>
            <p className={`${poppins500.className} text-balance text-lg font-semibold leading-relaxed text-[#111111]`}>
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop: Proper Pyramid Layout */}
      <div className="mx-auto hidden max-w-4xl flex-col items-center gap-10 lg:flex">
        {/* First Row (3 Cards) */}
        <div className="flex w-full justify-center gap-10">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="flex min-h-[200px] w-full max-w-[250px] flex-col items-center justify-center rounded-[40px] bg-[#bebebe5c] p-8 text-center shadow-[6px_6px_45px_3px_rgba(255,255,255,0.4)_inset,6px_6px_25px_3px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all hover:scale-[1.02]"
            >
              <h3 className={`${poppins600.className} mb-10 -mt-[0.5rem] text-lg font-bold leading-tight text-[#111111]`}>
                {service.title}
              </h3>
              <p className={`${poppins500.className} text-balance text-sm font-semibold leading-relaxed text-[#111111]`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row (2 Cards, Centered) */}
        <div className="flex w-full justify-center gap-10">
          {services.slice(3, 5).map((service, index) => (
            <div
              key={index + 3}
              className="flex min-h-[200px] w-full max-w-[250px] flex-col items-center justify-center rounded-[40px] bg-[#bebebe5c] p-8 text-center shadow-[6px_6px_45px_3px_rgba(255,255,255,0.4)_inset,6px_6px_25px_3px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all hover:scale-[1.02]"
            >
              <h3 className={`${poppins600.className} mb-10 -mt-[0.5rem] text-lg font-bold leading-tight text-[#111111]`}>
                {service.title}
              </h3>
              <p className={`${poppins500.className} text-balance text-sm font-semibold leading-relaxed text-[#111111]`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
