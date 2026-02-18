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
                  Partnership Program
                </span>
              </div>
              
              {/* Headline */}
              <h1 className="mb-6 text-4xl md:text-7xl lg:text-6xl font-light tracking-tight text-white leading-[1.05]">
                Build the Operations Infrastructure
                <br />
                <span className="font-normal">for EV Charging</span>
              </h1>

              {/* Subheadline */}
              <p className="text-md md:text-2xl lg:text-3xl font-light text-gray-300 leading-relaxed max-w-3xl mb-12">
                Partner with us to create the intelligent operations layer that connects charging networks, hardware providers, energy companies, and fleet operators.
              </p>

              {/* CTA */}
              <Link onClick={handleClickApply} href="/alpha-partners/apply">
                <button className="group inline-flex items-center gap-4 text-white hover:text-gray-300 transition-all duration-300">
                  <span className="text-lg md:text-xl font-light tracking-wide">Explore Partnership</span>
                  <div className="flex items-center justify-center w-14 h-14 rounded-full border border-white group-hover:scale-110 transition-transform duration-300">
                    <IconArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </div>
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
