"use client";

import Link from "next/link";
import Image from "next/image";

export default function TemporaryLandingPage() {
  const preventContextMenu = (e) => {
    e.preventDefault();
  };

  const protectedImageProps = {
    onContextMenu: preventContextMenu,
    draggable: "false",
    style: { userSelect: 'none', WebkitUserSelect: 'none' }
  };

  return (
    <div className="relative min-h-[115vh] w-full bg-black overflow-x-hidden font-sans -mt-24 pt-24">
      
      {/* ================ BACKGROUND LAYER ================ */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* Glow */}
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-green-900/60 via-black/80 via-45% md:via-35% to-black"></div>
        {/* Grid */}
        <div className="absolute inset-0 opacity-70 h-full w-full">
          <Image
            src="/grid-background.svg" 
            alt="Background Pattern"
            fill
            style={{ objectFit: 'cover' }}
            {...protectedImageProps}
          />
        </div>

        {/* --- FIXED: MOVED IMAGES FULLY INSIDE THE SCREEN --- */}

        {/* Top Left DNA Image */}
        {/* Changed '-left-16' to 'left-0' so the image isn't cut off */}
        <div className="absolute top-0 left-0 opacity-80">
          <Image
            src="/dna-strand-l.png"
            alt="DNA decorative element"
            width={800} 
            height={800}
            className="w-52 md:w-[400px] h-auto"
            {...protectedImageProps}
          />
        </div>

        {/* Top Right DNA Image (Flipped) */}
        {/* Changed '-right-16' to 'right-0' so the image isn't cut off */}
        <div className="absolute top-0 right-0 opacity-80 scale-x-[-1]">
          <Image
            src="/dna-strand-l.png"
            alt="DNA decorative element"
            width={800}
            height={800}
            className="w-52 md:w-[400px] h-auto"
            {...protectedImageProps}
          />
        </div>
      </div>
      {/* ================ END BACKGROUND LAYER ================ */}


      {/* ================ MAIN CONTENT LAYER ================ */}
      <main
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 h-full pt-20"
        style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
      >
        <div className="container mx-auto mt-20 md:mt-32">
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight pb-2">
            <span className="bg-gradient-to-b from-[#00F99A] to-[#396755] bg-clip-text text-transparent drop-shadow-sm">
              We’re Rebuilding Skyradix
            </span>
          </h1>

          <h2 className="mt-6 text-3xl md:text-6xl font-medium pb-2">
            <span className="bg-gradient-to-b from-[#F6F8F8] to-[#A7AEAE] bg-clip-text text-transparent">
              New Website Coming Soon
            </span>
          </h2>

          <div className="mt-10 mb-20">
            <Link href="/home">
              <button className="rounded-2xl bg-[#00ff9d] px-10 py-4 text-xl md:text-2xl font-bold text-black shadow-[0_0_30px_-5px_#00ff9d66] transition-transform hover:scale-105 active:scale-95">
                Visit Older Version
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}