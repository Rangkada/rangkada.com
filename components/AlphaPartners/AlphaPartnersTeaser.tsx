'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sendGAEvent } from "@next/third-parties/google";
import { IconArrowRight } from "@tabler/icons-react";

interface AlphaPartnersTeaserProps {
  theme?: 'dark' | 'light';
}

const AlphaPartnersTeaser: React.FC<AlphaPartnersTeaserProps> = ({ theme = 'dark' }) => {
  const handleClickLearnMore = () => {
    sendGAEvent('event', 'button_click', { value: 'Partnerships Teaser - Learn More' });
  }

  const isDark = theme === 'dark';

  return (
    <section 
      id="partnerships-teaser" 
      className={`relative ${isDark ? 'bg-black' : 'bg-white'}`}
    >
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
          {/* Left Column - Content */}
          <div className="mx-10 xl:mx-20 flex flex-col justify-center py-16 md:py-20 lg:py-24 pr-0 lg:pr-16">
            <div className="max-w-xl">
              {/* Badge */}
              <div className="mb-8">
                <span className={`inline-block text-xs tracking-[0.3em] uppercase font-semibold ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Partnership Program
                </span>
              </div>
              
              {/* Headline */}
              <h2 className={`mb-8 text-4xl md:text-5xl lg:text-5xl font-light tracking-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              } leading-[1.1]`}>
                Build the Operations Infrastructure Together
              </h2>

              {/* Description */}
              <p className={`text-lg md:text-xl font-light leading-relaxed mb-12 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Partner with us to create the intelligent operations layer for EV charging. For networks, hardware providers, energy companies, and fleet operators.
              </p>

              {/* Partner Types List */}
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className={`h-px w-8 ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
                  <span className={`text-base font-light ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Charging Networks & Hardware Providers
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`h-px w-8 ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
                  <span className={`text-base font-light ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    CPMS Platforms & Energy Companies
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`h-px w-8 ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
                  <span className={`text-base font-light ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Fleet Operators & OEMs
                  </span>
                </div>
              </div>

              {/* CTA */}
              <Link onClick={handleClickLearnMore} href="/alpha-partners">
                <button className={`group inline-flex items-center gap-4 ${
                  isDark
                    ? 'text-white hover:text-gray-300'
                    : 'text-gray-900 hover:text-gray-600'
                } transition-all duration-300`}>
                  <span className="text-lg font-light tracking-wide">Explore Partnerships</span>
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full border ${
                    isDark ? 'border-white' : 'border-gray-900'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <IconArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative min-h-[400px] lg:min-h-full order-first lg:order-last">
            <Image
              src="/images/backgrounds/city-light.jpg"
              alt="Partnership Program"
              fill
              className="object-cover"
              quality={90}
            />
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 ${
              isDark 
                ? 'bg-gradient-to-br from-black/60 via-black/30 to-transparent' 
                : 'bg-gradient-to-br from-white/60 via-white/30 to-transparent'
            }`} />
            
            {/* Partnership Types Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className={`space-y-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <div className="text-sm tracking-wide opacity-70 uppercase mb-6">Partnership Types</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-base font-light">Networks</div>
                  <div className="text-base font-light">Hardware</div>
                  <div className="text-base font-light">Software</div>
                  <div className="text-base font-light">Energy</div>
                  <div className="text-base font-light">Fleets</div>
                  <div className="text-base font-light">OEMs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlphaPartnersTeaser;
