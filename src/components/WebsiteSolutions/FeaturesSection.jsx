import Image from 'next/image';
import { poppins700, poppins600, poppins500 } from "@/app/fonts";

const FeaturesSection = () => {
  const mobileFeatures = [
    {
      title: "Custom Design with Marketing Insights",
      description: "We craft websites that not only represent your brand but are optimized to convert visitors into customers using proven marketing strategies"
    },
    {
      title: "SEO-Optimized for Visibility",
      description: "Our websites are built to rank higher on search engines, bringing more organic traffic to your website."
    },
    {
      title: "User-Focused with Conversion in Mind",
      description: "Exceptional user experience designed to keep visitors engaged and guide them toward taking action"
    },
    {
      title: "Responsive & Mobile-Friendly",
      description: "Ensure your website looks stunning and functions seamlessly on all devices to maximize reach and engagement"
    },
    {
      title: "Integrated Marketing Features",
      description: "From lead generation forms to strategically placed CTAs, your website becomes a powerful marketing tool"
    }
  ];

  return (
    <section className={`${poppins500.className} mx-auto my-[clamp(2rem,4vw,4rem)] max-w-[1200px] p-[clamp(2rem,5vw,5rem)]`}>
      <h2 className={`${poppins700.className} mb-[clamp(2rem,5vw,4rem)] text-center text-[clamp(2rem,3vw,3.3rem)] font-bold text-[#111111]`}>
        Why Our Web Solutions <br className="hidden md:inline" />Drive Business Growth
      </h2>

      {/* Mobile View */}
      <div className="md:hidden space-y-8">
        {mobileFeatures.map((feature, index) => (
          <div 
            key={index}
            className="rounded-[40px] bg-[rgba(164,164,164,0.36)] p-8 shadow-[6px_6px_45px_3px_rgba(255,255,255,0.4)_inset,6px_6px_25px_3px_rgba(0,0,0,0.5)] backdrop-blur-[2px]"
          >
            <h3 className={`${poppins600.className} mb-4 text-center text-xl font-bold leading-tight text-[#111111]`}>
              {feature.title}
            </h3>
            <p className={`${poppins500.className} text-center text-base font-medium leading-relaxed text-black`}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop/Tablet View */}
      <div className="hidden md:block rounded-[40px] bg-[rgba(164,164,164,0.36)] p-[clamp(1rem,1vw,1rem)] shadow-[6px_6px_45px_3px_rgba(255,255,255,0.4)_inset,6px_6px_25px_3px_rgba(0,0,0,0.5)] backdrop-blur-[2px]">
        <div className="mb-[clamp(1rem,0.1vw,1rem)] mt-[50px] text-center">
          <h3 className={`${poppins600.className} mb-[clamp(1rem,0.5vw,1rem)] text-[clamp(1.25rem,2vw,2.5rem)] font-bold leading-tight text-[#111111]`}>
            Custom Design with Marketing Insights
          </h3>
          <p className={`${poppins500.className} mx-auto mb-[30px] max-w-[750px] text-[clamp(1rem,1.4vw,1.25rem)] font-medium leading-[1.4] text-black`}>
            We craft websites that not only represent your brand but are optimized to convert visitors into customers using proven marketing strategies
          </p>
        </div>

        <div className="mt-10 grid grid-cols-[1fr_auto_1fr] gap-[clamp(1rem,1.5vw,2rem)] p-[clamp(1rem,2vw,1.5rem)]">
          {/* Left Column Cards */}
          <div className="col-start-1 col-end-2 row-start-1 row-end-2">
            <h3 className={`${poppins600.className} mb-[clamp(1rem,1.5vw,1rem)] text-center text-[clamp(1.25rem,2vw,1.5rem)] font-bold leading-tight text-[#111111]`}>
              SEO-Optimized for Visibility
            </h3>
            <p className={`${poppins500.className} mx-auto mb-[30px] max-w-[40ch] text-center text-[clamp(1rem,1.4vw,1.25rem)] font-medium leading-[1.4] text-black`}>
              Our websites are built to rank higher on search engines, bringing more organic traffic to your website.
            </p>
          </div>

          <div className="col-start-1 col-end-2 row-start-2 row-end-3">
            <h3 className={`${poppins600.className} mb-[clamp(1rem,1.5vw,1rem)] text-center text-[clamp(1.25rem,2vw,1.5rem)] font-bold leading-tight  text-[#111111]`}>
              User-Focused with Conversion in Mind
            </h3>
            <p className={`${poppins500.className} mx-auto mb-[30px] max-w-[40ch] text-center text-[clamp(1rem,1.4vw,1.25rem)] font-medium leading-[1.4] text-black`}>
              Exceptional user experience designed to keep visitors engaged and guide them toward taking action
            </p>
          </div>

          {/* Center Image */}
          <div className="col-start-2 col-end-3 row-span-2 flex items-center justify-center">
            <Image
              src="/images/3dicons-zoom-front-gradient.png"
              alt="Feature Image"
              width={202}
              height={202}
              className="h-[150px] w-[150px] -translate-y-12 rotate-[10deg] flex-shrink-0 rounded-[20px] transition-all hover:-translate-y-14"
            />
          </div>

          {/* Right Column Cards */}
          <div className="col-start-3 col-end-4 row-start-1 row-end-2">
            <h3 className={`${poppins600.className} mb-[clamp(1rem,1.5vw,1rem)] text-[clamp(1.25rem,2vw,1.5rem)] font-bold text-center leading-tight text-[#111111]`}>
              Responsive & Mobile-Friendly
            </h3>
            <p className={`${poppins500.className} mx-auto mb-[30px] max-w-[40ch] text-[clamp(1rem,1.4vw,1.25rem)] font-medium text-center leading-[1.4] text-black`}>
              Ensure your website looks stunning and functions seamlessly on all devices to maximize reach and engagement
            </p>
          </div>

          <div className="col-start-3 col-end-4 row-start-2 row-end-3">
            <h3 className={`${poppins600.className} mb-[clamp(1rem,1.5vw,1rem)] text-[clamp(1.25rem,2vw,1.5rem)] font-bold leading-tight text-center text-[#111111]`}>
              Integrated Marketing Features
            </h3>
            <p className={`${poppins500.className} mx-auto mb-[30px] max-w-[40ch] text-[clamp(1rem,1.4vw,1.25rem)] font-medium leading-[1.4] text-center text-black`}>
              From lead generation forms to strategically placed CTAs, your website becomes a powerful marketing tool
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;