'use client';

import React from "react";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import { IconArrowRight, IconPlug, IconBolt, IconCpu, IconChartBar } from "@tabler/icons-react";

interface ChargeOpsTeaserProps {
  theme?: 'dark' | 'light';
}

const ChargeOpsTeaser: React.FC<ChargeOpsTeaserProps> = ({ theme = 'dark' }) => {
  const handleClickExplore = () => {
    sendGAEvent('event', 'button_click', { value: 'ChargeOps Teaser - Learn More' });
  };

  const isDark = theme === 'dark';

  return (
    <section 
      id="chargeops-teaser" 
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
                How It Works
              </span>
            </div>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Intelligent Operations Layer
            </h2>
            <p className={`text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Connects to your existing systems. Monitors continuously. Resolves issues automatically.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {/* Feature 1 */}
            <div className="group">
              <div className="mb-6 flex justify-start">
                <IconPlug className={`h-12 w-12 transition-colors ${
                  isDark 
                    ? 'text-gray-600 group-hover:text-white' 
                    : 'text-gray-400 group-hover:text-gray-900'
                }`} />
              </div>
              <h3 className={`text-2xl md:text-3xl font-light mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Continuous Monitoring
              </h3>
              <p className={`text-base font-light leading-relaxed ${
                isDark ? 'text-gray-500' : 'text-gray-600'
              }`}>
                24/7 monitoring of every charger. Anomaly detection flags issues before they cause downtime. Baseline behavior established for predictive maintenance.
              </p>
            </div>

            {/* Feature 2 */}
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
                Automated Resolution
              </h3>
              <p className={`text-base font-light leading-relaxed ${
                isDark ? 'text-gray-500' : 'text-gray-600'
              }`}>
                90% of failures resolved remotely. Root cause classification triggers appropriate response. Hardware issues get coordinated technician dispatch.
              </p>
            </div>

            {/* Feature 3 */}
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
                Energy Optimization
              </h3>
              <p className={`text-base font-light leading-relaxed ${
                isDark ? 'text-gray-500' : 'text-gray-600'
              }`}>
                Real-time demand charge prevention. Automatic load shifting to low-price windows. Predictable monthly costs without manual intervention.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group">
              <div className="mb-6 flex justify-start">
                <IconChartBar className={`h-12 w-12 transition-colors ${
                  isDark 
                    ? 'text-gray-600 group-hover:text-white' 
                    : 'text-gray-400 group-hover:text-gray-900'
                }`} />
              </div>
              <h3 className={`text-2xl md:text-3xl font-light mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                System Integration
              </h3>
              <p className={`text-base font-light leading-relaxed ${
                isDark ? 'text-gray-500' : 'text-gray-600'
              }`}>
                Connects to existing CPMS, OCPP logs, utility meters, and hardware APIs. No migration required. Unified operational view across all systems.
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
                Charger Uptime
              </p>
            </div>

            <div className="text-center">
              <div className={`text-5xl md:text-6xl font-light mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                15-25%
              </div>
              <p className={`text-base font-light ${
                isDark ? 'text-gray-500' : 'text-gray-600'
              }`}>
                Cost Reduction
              </p>
            </div>

            <div className="text-center">
              <div className={`text-5xl md:text-6xl font-light mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                90%
              </div>
              <p className={`text-base font-light ${
                isDark ? 'text-gray-500' : 'text-gray-600'
              }`}>
                Remote Resolution
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link onClick={handleClickExplore} href="/chargeops">
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

export default ChargeOpsTeaser;
