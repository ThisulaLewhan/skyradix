import { poppins700 } from "@/app/fonts";

const TimelineSection = () => {
    return (
      <section className="my-[50px] md:my-[150px] lg:my-[150px] flex flex-col items-center">
        <h2 className={`${poppins700.className} features-title mb-[clamp(2rem,5vw,4rem)] text-center text-[clamp(2rem,3vw,3.3rem)] font-bold text-[#111111]`}>
          Our Proven Development<br/> Process
        </h2>
  
        <div className="timeline-container m-[5px] flex w-full max-w-[90%] justify-center">
          <object
            type="image/svg+xml"
            data="/images/timeline.svg"
            className="h-auto w-full max-w-full"
          >
            Your browser does not support SVG
          </object>
        </div>
      </section>
    );
  };
  
  export default TimelineSection;