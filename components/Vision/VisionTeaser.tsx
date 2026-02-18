'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sendGAEvent } from "@next/third-parties/google";
import { IconArrowRight } from "@tabler/icons-react";

interface VisionTeaserProps {
  theme?: 'dark' | 'light';
}

const VisionTeaser: React.FC<VisionTeaserProps> = ({ theme = 'light' }) => {
  const handleClickExplore = () => {
    sendGAEvent('event', 'button_click', { value: 'Vision Teaser - Explore Vision' });
  }

  const isDark = theme === 'dark';

  return (
    <section 
      id="vision-teaser" 
      className={`relative ${isDark ? 'bg-black' : 'bg-white'} overflow-hidden`}
    >
      {/* Content Section */}
      <div className={`${isDark ? 'bg-black' : 'bg-white'} py-20 md:py-28 lg:py-32`}>
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 lg:gap-4 items-center mb-20">
              <div>
                {/* Badge */}
                <div className="mb-6">
                  <span className={`inline-block text-xs tracking-[0.3em] uppercase font-semibold ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Our Mission
                  </span>
                </div>
                <p className={`text-xl md:text-2xl lg:text-2xl font-light leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  We solve the immediate operational challenges of EV charging—reliability and cost—while building the foundational infrastructure for the distributed energy future.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className={`h-px ${isDark ? 'bg-gray-800' : 'bg-gray-200'} mb-20`} />

            {/* Development Phases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
              {/* Phase 1 */}
              <div className="group">
                <div className={`text-sm tracking-[0.2em] uppercase font-semibold mb-4 ${
                  isDark ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  Phase 1
                </div>
                <h3 className={`text-xl md:text-2xl font-light mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Operations<br />Service
                </h3>
                <p className={`text-sm font-light mb-4 ${
                  isDark ? 'text-gray-500' : 'text-gray-600'
                }`}>
                  Reliability + energy optimization
                </p>
                <div className={`h-px w-0 group-hover:w-full transition-all duration-500 ${
                  isDark ? 'bg-white' : 'bg-gray-900'
                }`} />
              </div>

              {/* Phase 2 */}
              <div className="group">
                <div className={`text-sm tracking-[0.2em] uppercase font-semibold mb-4 ${
                  isDark ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  Phase 2
                </div>
                <h3 className={`text-xl md:text-2xl font-light mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Storage<br />Orchestration
                </h3>
                <p className={`text-sm font-light mb-4 ${
                  isDark ? 'text-gray-500' : 'text-gray-600'
                }`}>
                  Battery coordination
                </p>
                <div className={`h-px w-0 group-hover:w-full transition-all duration-500 ${
                  isDark ? 'bg-white' : 'bg-gray-900'
                }`} />
              </div>

              {/* Phase 3 */}
              <div className="group">
                <div className={`text-sm tracking-[0.2em] uppercase font-semibold mb-4 ${
                  isDark ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  Phase 3
                </div>
                <h3 className={`text-xl md:text-2xl font-light mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  V2G<br />Integration
                </h3>
                <p className={`text-sm font-light mb-4 ${
                  isDark ? 'text-gray-500' : 'text-gray-600'
                }`}>
                  Bidirectional charging
                </p>
                <div className={`h-px w-0 group-hover:w-full transition-all duration-500 ${
                  isDark ? 'bg-white' : 'bg-gray-900'
                }`} />
              </div>

              {/* Phase 4 */}
              <div className="group">
                <div className={`text-sm tracking-[0.2em] uppercase font-semibold mb-4 ${
                  isDark ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  Phase 4
                </div>
                <h3 className={`text-xl md:text-2xl font-light mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Full<br />Orchestration
                </h3>
                <p className={`text-sm font-light mb-4 ${
                  isDark ? 'text-gray-500' : 'text-gray-600'
                }`}>
                  Complete DER coordination
                </p>
                <div className={`h-px w-0 group-hover:w-full transition-all duration-500 ${
                  isDark ? 'bg-white' : 'bg-gray-900'
                }`} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="relative h-[600px] md:h-[700px] lg:h-[800px]">
        <Image
          src="/images/backgrounds/green-landscape-and-truck.jpg"
          alt="Distributed Energy Vision"
          fill
          className="object-cover object-center"
          quality={100}
          priority={false}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-16 md:pb-20 lg:pb-24">
            <div className="max-w-4xl">
              {/* Badge */}
              <div className="mb-6">
                <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-400">
                  Our Vision
                </span>
              </div>
              
              {/* Headline */}
              <h2 className="mb-8 text-2xl md:text-6xl lg:text-4xl font-light text-white leading-[1.1]">
                Intelligent orchestration for distributed energy. Today we solve charging operations. Tomorrow we coordinate solar, storage, chargers, and grid.
              </h2>
              
              {/* CTA */}
              <div className="flex justify-start lg:justify-start">
                <Link onClick={handleClickExplore} href="/vision">
                  <button className="group inline-flex items-center gap-4 text-white hover:text-gray-300 transition-all duration-300">
                    <span className="text-md md:text-xl font-light tracking-wide">Explore Our Vision</span>
                    <div className="flex items-center justify-center w-14 h-14 rounded-full border border-white group-hover:scale-110 transition-transform duration-300">
                      <IconArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionTeaser;
