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
    sendGAEvent('event', 'button_click', { value: 'Alpha Partners Teaser - Learn More' });
  }

  const isDark = theme === 'dark';

  return (
    <section 
      id="alpha-partners-teaser" 
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
                  Alpha Partners Program
                </span>
              </div>
              
              {/* Headline */}
              <h2 className={`mb-8 text-4xl md:text-5xl lg:text-5xl font-light tracking-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              } leading-[1.1]`}>
                Be part of the Philippine <br /> EV Network
              </h2>

              {/* Description */}
              <p className={`text-lg md:text-xl font-light leading-relaxed mb-12 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Join our exclusive Alpha Partner Program. Co-create the network that powers tomorrow's fleets and gain lasting strategic advantages.
              </p>

              {/* Benefits List */}
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className={`h-px w-8 ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
                  <span className={`text-base font-light ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    First-Mover Advantage
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`h-px w-8 ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
                  <span className={`text-base font-light ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Product Advisory Board seat
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`h-px w-8 ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
                  <span className={`text-base font-light ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Guaranteed Savings
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
                  <span className="text-lg font-light tracking-wide">Become an Alpha Partner</span>
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
              alt="Alpha Partners Program"
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
            
            {/* Stats Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className={`grid grid-cols-3 gap-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <div>
                  <div className="text-3xl md:text-4xl font-light mb-2">50%</div>
                  <div className="text-xs tracking-wide opacity-70 uppercase">Savings</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-light mb-2">₱0</div>
                  <div className="text-xs tracking-wide opacity-70 uppercase">Upfront</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-light mb-2">6</div>
                  <div className="text-xs tracking-wide opacity-70 uppercase">Months</div>
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
