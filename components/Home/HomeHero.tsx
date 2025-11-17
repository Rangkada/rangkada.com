'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sendGAEvent } from "@next/third-parties/google";
import { IconArrowRight } from "@tabler/icons-react";

const HomeHero = () => {
  const handleClickGetStarted = () => {
    sendGAEvent('event', 'button_click', { value: 'Home - Get Started' }); 
  }

  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-black"
    >
      {/* Background Image - Desktop */}
      <div className="hidden lg:block absolute inset-0">
        <Image
          src="/images/hero/motorbike-slick-dark-bg-2.png"
          alt="Electric Vehicle"
          fill
          className="opacity-80"
          style={{ objectFit: 'contain', objectPosition: 'calc(0% + 110px) center' }}
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/35 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative min-h-screen flex items-center">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 py-32 md:py-40 lg:py-48">
            {/* Left Column - Content */}
            <div className="relative z-20 max-w-2xl">
              {/* Badge */}
              <div className="mb-10">
                <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-500">
                  Electric Fleet Solutions
                </span>
              </div>

              {/* Headline */}
              <h1 className="mb-8 text-5xl md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-white leading-[1.05]">
                Power your fleet.
                <br />
                <span className="font-normal text-gray-400">
                  Skip the costs.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="mb-12 text-xl md:text-2xl font-light text-gray-400 leading-relaxed max-w-xl">
                Pay-as-you-save electric vehicles. Zero upfront investment. 
                Guaranteed savings from day one.
              </p>

              {/* CTA */}
              <Link onClick={handleClickGetStarted} href="#contact">
                <button className="group inline-flex items-center gap-4 text-white hover:text-gray-300 transition-all duration-300">
                  <span className="text-lg md:text-xl font-light tracking-wide">🔥 Become an Alpha Partner</span>
                  <div className="flex items-center justify-center w-14 h-14 rounded-full border border-white group-hover:scale-110 transition-transform duration-300">
                    <IconArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </Link>

              {/* Stats */}
              <div className="mt-16 pt-12 border-t border-gray-800">
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <div className="text-4xl md:text-5xl font-light text-white mb-2">50%</div>
                    <div className="text-xs tracking-wide text-gray-600 uppercase">Guaranteed Savings</div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-light text-white mb-2">₱0</div>
                    <div className="text-xs tracking-wide text-gray-600 uppercase">Upfront Investment</div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-light text-white mb-2">2025</div>
                    <div className="text-xs tracking-wide text-gray-600 uppercase">Limited Window</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Mobile Image */}
            <div className="lg:hidden relative h-[400px] -mx-4">
              <Image
                src="/images/hero/motorbike-slick-dark-bg-2.png"
                alt="Electric Vehicle"
                fill
                className="object-cover"
                style={{ objectPosition: 'calc(50% - 60px) center' }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3 text-gray-600">
        <span className="text-xs tracking-[0.3em] uppercase font-semibold">Scroll</span>
        <div className="w-px h-16 bg-gray-800" />
      </div>
    </section>
  );
};

export default HomeHero;
