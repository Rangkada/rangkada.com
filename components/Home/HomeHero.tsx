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
      className="relative z-10 overflow-hidden bg-gray-800"
    >
      {/* Background Image - Desktop */}
      <div className="block absolute inset-0">
        <Image
          src="/images/backgrounds/highway-vehicles.jpg"
          alt="Electric Vehicle"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          className="opacity-80"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black  to-black/20" />
      </div>

      {/*
      <div className="block absolute inset-0">
        <Image
          src="/images/svg/qqquad.svg"
          alt="Electric Vehicle"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          className="opacity-80"
          priority
          quality={100}
        />
      </div>
      */}

      {/* Content Container */}
      <div className="relative min-h-screen flex items-center">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 py-32 md:py-40 lg:py-48">
            {/* Left Column - Content */}
            <div className="relative z-20 max-w-2xl">
              {/* Badge */}
              <div className="mb-10">
                <span className="inline-block text-xs tracking-[0.1em] md:tracking-[0.3em] uppercase font-semibold text-gray-300">
                  Powering the connected EV ecosystem
                </span>
              </div>

              {/* Headline */}
              <h1 className="mb-8 text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-light  text-white ">
                Operations engine for EV charging networks
              </h1>

              {/* Subheadline */}
              <p className="mb-12 text-lg md:text-2xl font-light text-gray-300 md:leading-relaxed max-w-xl">
                Automated operations that deliver 95%+ uptime and 15-25% cost reduction
              </p>

              {/* CTA */}
              <Link onClick={handleClickGetStarted} href="#contact">
                <button className="group inline-flex items-center gap-4 text-white hover:text-gray-300 transition-all duration-300">
                  <span className="text-xs md:text-xl font-light tracking-wide">🔥 Schedule Assessment</span>
                  <div className="flex items-center justify-center h-8 w-8 md:w-14 md:h-14 rounded-full border border-white group-hover:scale-110 transition-transform duration-300">
                    <IconArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3 text-gray-300">
        <span className="text-xs tracking-[0.3em] uppercase font-semibold">Scroll</span>
        <div className="w-px h-16 bg-gray-300" />
      </div>
    </section>
  );
};

export default HomeHero;
