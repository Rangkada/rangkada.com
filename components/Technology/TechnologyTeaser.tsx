'use client';

import React from "react";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import { IconArrowRight, IconCpu, IconRefresh, IconBolt, IconChartBar } from "@tabler/icons-react";

interface TechnologyTeaserProps {
  theme?: 'dark' | 'light';
}

const TechnologyTeaser: React.FC<TechnologyTeaserProps> = ({ theme = 'dark' }) => {
  const handleClickExplore = () => {
    sendGAEvent('event', 'button_click', { value: 'Technology Teaser - Learn More' });
  };

  const isDark = theme === 'dark';

  return (
    <section 
      id="technology-teaser" 
      className={`relative ${isDark ? 'bg-black' : 'bg-white'} py-24 md:py-32 lg:py-40`}
    >
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <div className="mb-8">
              <span className={`inline-block text-xs tracking-[0.3em] uppercase font-semibold ${
                isDark ? 'text-gray-500' : 'text-gray-400'
              }`}>
                Technology
              </span>
            </div>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Built for Today. Ready for Tomorrow.
            </h2>
            <p className={`text-xl md:text-2xl font-light leading-relaxed max-w-4xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Our technology isn't sold as software—it's the internal machinery that enables us to deliver outcomes at scale. Today we solve reliability and cost. Tomorrow we orchestrate distributed energy.
            </p>
          </div>

          {/* Current Capabilities */}
          <div className="mb-20">
            <h3 className={`text-2xl md:text-3xl font-light mb-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Current Capabilities
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="group">
                <div className="mb-6">
                  <IconCpu className={`h-10 w-10 transition-colors ${
                    isDark 
                      ? 'text-gray-600 group-hover:text-white' 
                      : 'text-gray-400 group-hover:text-gray-900'
                  }`} />
                </div>
                <h4 className={`text-xl font-light mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Cross-System Intelligence
                </h4>
                <p className={`text-base font-light leading-relaxed ${
                  isDark ? 'text-gray-500' : 'text-gray-600'
                }`}>
                  Aggregates data from CPMS, OCPP logs, utility meters, and hardware APIs. Creates unified operational view no individual system provides.
                </p>
              </div>

              <div className="group">
                <div className="mb-6">
                  <IconRefresh className={`h-10 w-10 transition-colors ${
                    isDark 
                      ? 'text-gray-600 group-hover:text-white' 
                      : 'text-gray-400 group-hover:text-gray-900'
                  }`} />
                </div>
                <h4 className={`text-xl font-light mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Continuous Learning
                </h4>
                <p className={`text-base font-light leading-relaxed ${
                  isDark ? 'text-gray-500' : 'text-gray-600'
                }`}>
                  Every incident improves our models. Every demand spike refines our algorithms. Each customer benefits from everything we've learned.
                </p>
              </div>

              <div className="group">
                <div className="mb-6">
                  <IconBolt className={`h-10 w-10 transition-colors ${
                    isDark 
                      ? 'text-gray-600 group-hover:text-white' 
                      : 'text-gray-400 group-hover:text-gray-900'
                  }`} />
                </div>
                <h4 className={`text-xl font-light mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Real-Time Optimization
                </h4>
                <p className={`text-base font-light leading-relaxed ${
                  isDark ? 'text-gray-500' : 'text-gray-600'
                }`}>
                  Monitors electricity prices, consumption patterns, and vehicle schedules. Calculates optimal charging schedules dynamically.
                </p>
              </div>

              <div className="group">
                <div className="mb-6">
                  <IconChartBar className={`h-10 w-10 transition-colors ${
                    isDark 
                      ? 'text-gray-600 group-hover:text-white' 
                      : 'text-gray-400 group-hover:text-gray-900'
                  }`} />
                </div>
                <h4 className={`text-xl font-light mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Predictive Maintenance
                </h4>
                <p className={`text-base font-light leading-relaxed ${
                  isDark ? 'text-gray-500' : 'text-gray-600'
                }`}>
                  Anomaly detection flags deviations before they cause downtime. Scheduled replacement instead of emergency dispatch.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className={`h-px ${isDark ? 'bg-gray-800' : 'bg-gray-200'} mb-20`} />

          {/* Future Development 
          <div className="mb-16">
            <h3 className={`text-2xl md:text-3xl font-light mb-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Future Development
            </h3>
            
            <div className="space-y-8">
              <div className={`border-l-2 pl-8 ${
                isDark ? 'border-gray-800' : 'border-gray-200'
              }`}>
                <div className="flex items-baseline gap-4 mb-3">
                  <span className={`text-sm font-light ${
                    isDark ? 'text-gray-600' : 'text-gray-500'
                  }`}>
                    Phase 2 (12-18 months)
                  </span>
                  <h4 className={`text-xl font-light ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Stationary Storage Orchestration
                  </h4>
                </div>
                <p className={`text-base font-light leading-relaxed ${
                  isDark ? 'text-gray-500' : 'text-gray-600'
                }`}>
                  Coordinate battery storage with charging demand. Maximize storage ROI through peak shaving and arbitrage.
                </p>
              </div>

              <div className={`border-l-2 pl-8 ${
                isDark ? 'border-gray-800' : 'border-gray-200'
              }`}>
                <div className="flex items-baseline gap-4 mb-3">
                  <span className={`text-sm font-light ${
                    isDark ? 'text-gray-600' : 'text-gray-500'
                  }`}>
                    Phase 3 (24-36 months)
                  </span>
                  <h4 className={`text-xl font-light ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Vehicle-to-Grid Orchestration
                  </h4>
                </div>
                <p className={`text-base font-light leading-relaxed ${
                  isDark ? 'text-gray-500' : 'text-gray-600'
                }`}>
                  Manage bidirectional charging flows. Turn parked fleet vehicles into virtual power plants that generate revenue.
                </p>
              </div>

              <div className={`border-l-2 pl-8 ${
                isDark ? 'border-gray-800' : 'border-gray-200'
              }`}>
                <div className="flex items-baseline gap-4 mb-3">
                  <span className={`text-sm font-light ${
                    isDark ? 'text-gray-600' : 'text-gray-500'
                  }`}>
                    Phase 4 (36-48 months)
                  </span>
                  <h4 className={`text-xl font-light ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Full Distributed Energy Orchestration
                  </h4>
                </div>
                <p className={`text-base font-light leading-relaxed ${
                  isDark ? 'text-gray-500' : 'text-gray-600'
                }`}>
                  Coordinate solar, storage, chargers, and grid connections. Complete asset optimization with grid service revenues.
                </p>
              </div>
            </div>
          </div>
          */}

          {/* CTA */}
          <div className="text-center">
            <Link onClick={handleClickExplore} href="/chargeops">
              <button className={`group inline-flex items-center gap-4 transition-all duration-300 ${
                isDark
                  ? 'text-white hover:text-gray-300'
                  : 'text-gray-900 hover:text-gray-600'
              }`}>
                <span className="text-lg md:text-xl font-light tracking-wide">Explore the Technology</span>
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

export default TechnologyTeaser;
