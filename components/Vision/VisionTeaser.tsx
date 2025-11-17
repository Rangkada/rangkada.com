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
      {/* Hero Image Section */}
      <div className="relative h-[600px] md:h-[700px] lg:h-[800px]">
        <Image
          src="/images/backgrounds/green-landscape-and-truck.jpg"
          alt="Rangkada Vision"
          fill
          className="object-cover object-center"
          quality={100}
          priority={false}
        />
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-t from-black via-black/40 to-transparent' 
            : 'bg-gradient-to-t from-white via-white/40 to-transparent'
        }`} />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-16 md:pb-20 lg:pb-24">
            <div className="max-w-4xl">
              {/* Badge */}
              <div className="mb-6">
                <span className={`inline-block text-xs tracking-[0.3em] uppercase font-semibold ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Our Vision
                </span>
              </div>
              
              {/* Headline */}
              <h2 className={`mb-8 text-4xl md:text-6xl lg:text-7xl font-light tracking-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              } leading-[1.1]`}>
                Making clean mobility<br />
                <span className="font-normal">affordable for every Filipino.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className={`${isDark ? 'bg-black' : 'bg-white'} py-20 md:py-28 lg:py-32`}>
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
              {/* Left - Description */}
              <div>
                <p className={`text-xl md:text-2xl lg:text-3xl font-light leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Building a Philippines where clean, affordable transportation empowers businesses, 
                  enriches communities, and creates a sustainable legacy for generations.
                </p>
              </div>

              {/* Right - CTA */}
              <div className="flex justify-start lg:justify-end">
                <Link onClick={handleClickExplore} href="/vision">
                  <button className={`group inline-flex items-center gap-4 ${
                    isDark
                      ? 'text-white hover:text-gray-300'
                      : 'text-gray-900 hover:text-gray-600'
                  } transition-all duration-300`}>
                    <span className="text-lg md:text-xl font-light tracking-wide">Explore Our Vision</span>
                    <div className={`flex items-center justify-center w-14 h-14 rounded-full border ${
                      isDark ? 'border-white' : 'border-gray-900'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <IconArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </Link>
              </div>
            </div>

            {/* Divider */}
            <div className={`h-px ${isDark ? 'bg-gray-800' : 'bg-gray-200'} mb-20`} />

            {/* Impact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {/* Economic */}
              <div className="group">
                <div className={`text-sm tracking-[0.2em] uppercase font-semibold mb-4 ${
                  isDark ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  01
                </div>
                <h3 className={`text-2xl md:text-3xl font-light mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Economic<br />Empowerment
                </h3>
                <div className={`h-px w-0 group-hover:w-full transition-all duration-500 ${
                  isDark ? 'bg-white' : 'bg-gray-900'
                }`} />
              </div>

              {/* Environmental */}
              <div className="group">
                <div className={`text-sm tracking-[0.2em] uppercase font-semibold mb-4 ${
                  isDark ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  02
                </div>
                <h3 className={`text-2xl md:text-3xl font-light mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Environmental<br />Revolution
                </h3>
                <div className={`h-px w-0 group-hover:w-full transition-all duration-500 ${
                  isDark ? 'bg-white' : 'bg-gray-900'
                }`} />
              </div>

              {/* Strategic */}
              <div className="group">
                <div className={`text-sm tracking-[0.2em] uppercase font-semibold mb-4 ${
                  isDark ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  03
                </div>
                <h3 className={`text-2xl md:text-3xl font-light mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Strategic<br />Independence
                </h3>
                <div className={`h-px w-0 group-hover:w-full transition-all duration-500 ${
                  isDark ? 'bg-white' : 'bg-gray-900'
                }`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionTeaser;
