'use client';

import React from "react";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import { IconArrowRight, IconBolt, IconBattery, IconDeviceMobile, IconTruck } from "@tabler/icons-react";

interface SolutionsTeaserProps {
  theme?: 'dark' | 'light';
}

const SolutionsTeaser: React.FC<SolutionsTeaserProps> = ({ theme = 'dark' }) => {
  const handleClickExplore = () => {
    sendGAEvent('event', 'button_click', { value: 'Solutions Teaser - Explore Solutions' });
  };

  const isDark = theme === 'dark';

  return (
    <section 
      id="solutions-teaser" 
      className={`relative ${isDark ? 'bg-black' : 'bg-white'} py-24 md:py-32 lg:py-40`}
    >
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-20 text-center">
            <div className="mb-8">
              <span className={`inline-block text-xs tracking-[0.3em] uppercase font-semibold ${
                isDark ? 'text-gray-500' : 'text-gray-400'
              }`}>
                Complete Fleet Solutions
              </span>
            </div>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              One Platform, Total Control
            </h2>
            <p className={`text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              We are the essential software layer—the central operating system—that connects all electric fleet vehicles with all charging infrastructure, regardless of brand.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
            {/* Feature 1 */}
            <div className="group text-center">
              <div className="mb-6 flex justify-center">
                <IconBolt className={`h-12 w-12 transition-colors ${
                  isDark 
                    ? 'text-gray-600 group-hover:text-white' 
                    : 'text-gray-400 group-hover:text-gray-900'
                }`} />
              </div>
              <h3 className={`text-xl md:text-2xl font-light mb-3 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Turnkey Solution
              </h3>
              <p className={`text-base font-light leading-relaxed ${
                isDark ? 'text-gray-500' : 'text-gray-600'
              }`}>
                We Provide the Complete Charging Ecosystem.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group text-center">
              <div className="mb-6 flex justify-center">
                <IconTruck className={`h-12 w-12 transition-colors ${
                  isDark 
                    ? 'text-gray-600 group-hover:text-white' 
                    : 'text-gray-400 group-hover:text-gray-900'
                }`} />
              </div>
              <h3 className={`text-xl md:text-2xl font-light mb-3 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Unify EV Operations
              </h3>
              <p className={`text-base font-light leading-relaxed ${
                isDark ? 'text-gray-500' : 'text-gray-600'
              }`}>
                Access every partnered charger through one app
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group text-center">
              <div className="mb-6 flex justify-center">
                <IconBattery className={`h-12 w-12 transition-colors ${
                  isDark 
                    ? 'text-gray-600 group-hover:text-white' 
                    : 'text-gray-400 group-hover:text-gray-900'
                }`} />
              </div>
              <h3 className={`text-xl md:text-2xl font-light mb-3 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Maximize Charging Station
              </h3>
              <p className={`text-base font-light leading-relaxed ${
                isDark ? 'text-gray-500' : 'text-gray-600'
              }`}>
                Full Management & Monetization
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group text-center">
              <div className="mb-6 flex justify-center">
                <IconDeviceMobile className={`h-12 w-12 transition-colors ${
                  isDark 
                    ? 'text-gray-600 group-hover:text-white' 
                    : 'text-gray-400 group-hover:text-gray-900'
                }`} />
              </div>
              <h3 className={`text-xl md:text-2xl font-light mb-3 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Charging Network
              </h3>
              <p className={`text-base font-light leading-relaxed ${
                isDark ? 'text-gray-500' : 'text-gray-600'
              }`}>
                Connect EV fleet with all charging infrastructure
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className={`h-px ${isDark ? 'bg-gray-800' : 'bg-gray-200'} mb-16`} />

          {/* Key Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className={`text-2xl md:text-3xl font-light mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Built for Scale
              </h3>
              <p className={`text-lg font-light leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Our API-first architecture ensures robust performance as your fleet and network grow.
              </p>
            </div>

            <div>
              <h3 className={`text-2xl md:text-3xl font-light mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Data-Driven Intelligence
              </h3>
              <p className={`text-lg font-light leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                We transform raw data into actionable insights, helping you optimize routes, energy costs, and asset utilization.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link onClick={handleClickExplore} href="/solutions">
              <button className={`group inline-flex items-center gap-4 transition-all duration-300 ${
                isDark
                  ? 'text-white hover:text-gray-300'
                  : 'text-gray-900 hover:text-gray-600'
              }`}>
                <span className="text-lg md:text-xl font-light tracking-wide">Explore Our Solutions</span>
                <div className={`flex items-center justify-center w-14 h-14 rounded-full border transition-all ${
                  isDark 
                    ? 'border-white group-hover:scale-110' 
                    : 'border-gray-900 group-hover:scale-110'
                }`}>
                  <IconArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsTeaser;
