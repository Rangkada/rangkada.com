'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import { IconArrowRight } from "@tabler/icons-react";

const AlphaPartnersHero = () => {
  const handleClickApply = () => {
    sendGAEvent('event', 'button_click', { value: 'Alpha Partners Hero - Apply for Pilot' }); 
  }

  return (
    <section
      id="alpha-hero"
      className="relative z-10 overflow-hidden bg-black"
    >
      {/* Hero Image Section */}
      <div className="relative h-screen min-h-[700px] max-h-[900px]">
        <Image
          src="/images/backgrounds/city-light.jpg"
          alt="Alpha Partners Program"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-16 md:pb-24 lg:pb-32">
            <div className="max-w-5xl">
              {/* Badge */}
              <div className="mb-8">
                <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-400">
                  Alpha Partners Program
                </span>
              </div>
              
              {/* Headline */}
              <h1 className="mb-6 text-4xl md:text-7xl lg:text-6xl font-light tracking-tight text-white leading-[1.05]">
                Be part of the EV Network.
                <br />
                <span className="font-semibold">Shape the Future. Reap the Rewards.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-md md:text-2xl lg:text-3xl font-light text-gray-300 leading-relaxed max-w-3xl mb-12">
                Exclusive for visionary fleet operators and charging station hosts who want to co-create the future of electric mobility.
              </p>

              {/* CTA */}
              <Link onClick={handleClickApply} href="/alpha-partners/apply">
                <button className="group relative inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold text-xs md:text-xl px-8 md:px-10 py-5 md:py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50">
                  <span>🔥 Join Our Alpha Partner Program</span>
                  <IconArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  {/* Animated pulse effect */}
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlphaPartnersHero;
