'use client';

import React from "react";
import Image from "next/image";

const VisionHero = () => {
  return (
    <section
      id="vision-hero"
      className="relative z-10 overflow-hidden bg-white"
    >
      {/* Hero Image Section */}
      <div className="relative h-screen min-h-[700px] max-h-[900px]">
        <Image
          src="/images/backgrounds/green-landscape-and-truck.jpg"
          alt="Rangkada Vision"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-white/30 to-transparent" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-16 md:pb-24 lg:pb-32">
            <div className="max-w-5xl">
              {/* Badge */}
              <div className="mb-8">
                <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-200">
                  Our Vision
                </span>
              </div>
              
              {/* Headline */}
              <h1 className="mb-6 text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-gray-900 leading-[1.05]">
                Making clean mobility
                <br />
                <span className="font-normal">affordable for every Filipino.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-700 leading-relaxed max-w-3xl">
                Building a future where the Philippines leads, our people prosper, 
                and our environment thrives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionHero;
