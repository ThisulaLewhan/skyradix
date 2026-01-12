import { poppins500 } from "@/app/fonts";

const Footer = () => {
    return (
      <footer className="bg-[#000000] text-white py-8 border-t-2 border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={`text-md ${poppins500.className}`}>
            © 2025 - {new Date().getFullYear()} Skyradix. All rights reserved
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
