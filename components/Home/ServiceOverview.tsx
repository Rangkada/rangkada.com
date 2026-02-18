'use client';

import React from "react";

const ServiceOverview = () => {
  return (
    <section className="relative bg-gray-900 py-24 md:py-32 lg:py-40">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="mb-8">
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-500">
                What We Do
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.1] mb-8">
              Operations Service for
              <span className="block font-normal text-gray-400">
                EV Charging Networks
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-8 text-center">
            <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
              We keep your charging infrastructure running at peak performance. Our service integrates with your existing CPMS and hardware to provide continuous monitoring, automated issue resolution, and intelligent energy optimization.
            </p>
            
            <p className="text-lg md:text-xl font-light text-gray-400 leading-relaxed max-w-3xl mx-auto">
              No hardware replacement. No system migration. Just plug in our operations layer and get immediate visibility and control over your entire charging network.
            </p>

            {/* Key Value Props */}
            <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div>
                <div className="text-3xl md:text-4xl font-light text-white mb-3">
                  Maximize Uptime
                </div>
                <p className="text-base font-light text-gray-500">
                  Detect and resolve issues before they impact drivers
                </p>
              </div>

              <div>
                <div className="text-3xl md:text-4xl font-light text-white mb-3">
                  Reduce Costs
                </div>
                <p className="text-base font-light text-gray-500">
                  Optimize energy usage and prevent demand charges
                </p>
              </div>

              <div>
                <div className="text-3xl md:text-4xl font-light text-white mb-3">
                  Scale Operations
                </div>
                <p className="text-base font-light text-gray-500">
                  Manage hundreds of chargers without adding staff
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
