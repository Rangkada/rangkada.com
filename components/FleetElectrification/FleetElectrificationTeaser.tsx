'use client';

import React from "react";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import { IconArrowRight, IconTruck, IconBolt, IconCpu, IconTool } from "@tabler/icons-react";

interface FleetElectrificationTeaserProps {
  theme?: 'dark' | 'light';
}

const FleetElectrificationTeaser: React.FC<FleetElectrificationTeaserProps> = ({ theme = 'light' }) => {
  const handleClickExplore = () => {
    sendGAEvent('event', 'button_click', { value: 'Fleet Electrification Teaser - Learn More' });
  };

  const isDark = theme === 'dark';

  return (
    <section 
      id="fleet-electrification-teaser" 
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
                Fleet Service
              </span>
            </div>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Fleet Electrification Made Simple
            </h2>
            <p className={`text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Asset-light, outcome-based charging. No upfront CapEx. 95%+ uptime guaranteed.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {/* Feature 1 */}
            <div className="group">
              <div className="mb-6 flex justify-start">
                <IconTruck className={`h-12 w-12 transition-colors ${
                  isDark 
                    ? 'text-gray-600 group-hover:text-white' 
                    : 'text-gray-400 group-hover:text-gray-900'
                }`} />
              </div>
              <h3 className={`text-2xl md:text-3xl font-light mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                We Lease the Chargers
              </h3>
              <p className={`text-base font-light leading-relaxed ${
                isDark ? 'text-gray-500' : 'text-gray-600'
              }`}>
                Partner with OEMs for 12-month operating leases. No upfront CapEx. Flexible scaling as your fleet grows.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group">
              <div className="mb-6 flex justify-start">
                <IconTool className={`h-12 w-12 transition-colors ${
                  isDark 
                    ? 'text-gray-600 group-hover:text-white' 
                    : 'text-gray-400 group-hover:text-gray-900'
                }`} />
              </div>
              <h3 className={`text-2xl md:text-3xl font-light mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                We Install & Maintain
              </h3>
              <p className={`text-base font-light leading-relaxed ${
                isDark ? 'text-gray-500' : 'text-gray-600'
              }`}>
                Field service partner handles installation and maintenance. Preventive wear part replacement every 6 months.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group">
              <div className="mb-6 flex justify-start">
                <IconCpu className={`h-12 w-12 transition-colors ${
                  isDark 
                    ? 'text-gray-600 group-hover:text-white' 
                    : 'text-gray-400 group-hover:text-gray-900'
                }`} />
              </div>
              <h3 className={`text-2xl md:text-3xl font-light mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                AI Platform Monitors 24/7
              </h3>
              <p className={`text-base font-light leading-relaxed ${
                isDark ? 'text-gray-500' : 'text-gray-600'
              }`}>
                Real-time monitoring detects faults automatically. Remote remediation before issues impact your fleet.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group">
              <div className="mb-6 flex justify-start">
                <IconBolt className={`h-12 w-12 transition-colors ${
                  isDark 
                    ? 'text-gray-600 group-hover:text-white' 
                    : 'text-gray-400 group-hover:text-gray-900'
                }`} />
              </div>
              <h3 className={`text-2xl md:text-3xl font-light mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Predictable Costs
              </h3>
              <p className={`text-base font-light leading-relaxed ${
                isDark ? 'text-gray-500' : 'text-gray-600'
              }`}>
                Monthly per-vehicle pricing. No surprises. Share energy savings above baseline (15-30% typical reduction).
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className={`h-px ${isDark ? 'bg-gray-800' : 'bg-gray-200'} mb-16`} />

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className={`text-5xl md:text-6xl font-light mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                95%+
              </div>
              <p className={`text-base font-light ${
                isDark ? 'text-gray-500' : 'text-gray-600'
              }`}>
                Uptime Guarantee
              </p>
            </div>

            <div className="text-center">
              <div className={`text-5xl md:text-6xl font-light mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                No CapEx
              </div>
              <p className={`text-base font-light ${
                isDark ? 'text-gray-500' : 'text-gray-600'
              }`}>
                Asset-Light Model
              </p>
            </div>

            <div className="text-center">
              <div className={`text-5xl md:text-6xl font-light mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                15-30%
              </div>
              <p className={`text-base font-light ${
                isDark ? 'text-gray-500' : 'text-gray-600'
              }`}>
                Energy Savings
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link onClick={handleClickExplore} href="/fleet-electrification">
              <button className={`group inline-flex items-center gap-4 transition-all duration-300 ${
                isDark
                  ? 'text-white hover:text-gray-300'
                  : 'text-gray-900 hover:text-gray-600'
              }`}>
                <span className="text-lg md:text-xl font-light tracking-wide">Learn How It Works</span>
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

export default FleetElectrificationTeaser;
