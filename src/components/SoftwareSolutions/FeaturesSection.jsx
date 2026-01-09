import { poppins700, poppins600, poppins500 } from "@/app/fonts";

const FeaturesSection = () => {
  const features = [
    {
      title: "Tailored to Your Needs",
      description: "We design software that aligns perfectly with your business goals and processes"
    },
    {
      title: "Scalable and Flexible",
      description: "Our solutions grow with your business, adapting to future needs"
    },
    {
      title: "Seamless Integration",
      description: "Ensure compatibility with your existing tools and systems"
    },
    {
      title: "Innovation-Driven Development",
      description: "Leverage the latest technologies for cutting-edge performance"
    }
  ];

  return (
    <section className="mx-auto my-[clamp(2rem,5vw,4rem)] max-w-[1600px] p-[clamp(2rem,5vw,5rem)]">
      <h2 className={`${poppins700.className} mb-[clamp(2rem,3vw,4rem)] text-center text-[clamp(2rem,3vw,3.3rem)] font-bold text-[#111111]`}>
        Why Our Software Solutions <br className="hidden md:inline" />Stand Out
      </h2>

      <div className="grid grid-cols-1 gap-[clamp(1.5rem,3vw,3rem)] rounded-[40px] bg-[rgba(164,164,164,0.36)] p-[clamp(1rem,1vw,3rem)] shadow-[6px_6px_45px_3px_rgba(255,255,255,0.4)_inset,6px_6px_25px_3px_rgba(0,0,0,0.5)] backdrop-blur-[2px] md:grid-cols-2">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="flex flex-col items-center p-[clamp(1rem,2vw,2rem)] text-center"
          >
            <h3 className={`${poppins600.className} mb-[clamp(1rem,2vw,1.5rem)] text-[clamp(1.25rem,2vw,2.5rem)] font-bold leading-tight text-[#111111]`}>
              {feature.title}
            </h3>
            <p className={`${poppins500.className} max-w-[40ch] text-[clamp(1rem,1.4vw,1.25rem)] font-medium leading-[1.4] text-black`}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;