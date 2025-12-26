'use client';

import React from "react";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

const VisionContent = () => {
  return (
    <>
      {/* Vision Statement Section */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="">
              <div>
                <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-400 mb-8">
                  The Mission
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-[1.1]">
                  Building a movement
                </h2>
              </div>
              <br />
              <div className="flex items-center">
                <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed">
                  Our goal is to build the intelligent, sustainable nervous system for Philippine progress—where smart mobility is the lifeblood of every community, unlocking economic potential and connecting people to opportunity.
                  <br /><br />
                   We aim to accelerate the adoption of electric mobility by intelligently connecting fleet operators and charging infrastructure through a unified, hardware-agnostic software platform, eliminating fragmentation and powering efficient, sustainable transportation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-black text-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            {/* Section Header */}
            <div className="mb-20 md:mb-28">
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-500 mb-8">
                When We Succeed
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] max-w-3xl">
                The impact will be profound and multi-layered
              </h2>
            </div>

            {/* Impact Categories */}
            <div className="space-y-24 md:space-y-32">
              {/* Economic Empowerment */}
              <div>
                <div className="mb-12">
                  <span className="text-sm tracking-[0.2em] uppercase font-semibold text-gray-600 mb-6 block">01</span>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8">
                    Economic Empowerment
                  </h3>
                  <div className="h-px bg-gray-800 w-full" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                  <div>
                    <h4 className="text-lg font-light text-gray-400 mb-4 tracking-wide">For Businesses</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      Directly increase profitability for thousands of Filipino SMEs and corporations by slashing their 
                      largest variable cost: transportation.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-light text-gray-400 mb-4 tracking-wide">For Drivers</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      Create stable, higher-income earning potential for drivers by dramatically reducing their 
                      operational expenses.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-light text-gray-400 mb-4 tracking-wide">For the Philippines</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      Establish a high-tech manufacturing base, create thousands of skilled jobs, and reduce the national 
                      trade deficit by cutting fossil fuel imports.
                    </p>
                  </div>
                </div>
              </div>

              {/* Environmental Revolution */}
              <div>
                <div className="mb-12">
                  <span className="text-sm tracking-[0.2em] uppercase font-semibold text-gray-600 mb-6 block">02</span>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8">
                    Environmental Revolution
                  </h3>
                  <div className="h-px bg-gray-800 w-full" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                  <div>
                    <h4 className="text-lg font-light text-gray-400 mb-4 tracking-wide">Cleaner Air</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      Directly reduce smog and particulate matter in urban centers, leading to lower rates of asthma 
                      and respiratory diseases. Every Filipino deserves to breathe clean air.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-light text-gray-400 mb-4 tracking-wide">Carbon Reduction</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      Significantly lower the carbon footprint of the Philippine transportation sector, 
                      contributing to global climate action and protecting our islands.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-light text-gray-400 mb-4 tracking-wide">Quieter Cities</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      Dramatically reduce noise pollution, creating more peaceful, livable cities 
                      where communities can truly thrive.
                    </p>
                  </div>
                </div>
              </div>

              {/* Strategic Independence */}
              <div>
                <div className="mb-12">
                  <span className="text-sm tracking-[0.2em] uppercase font-semibold text-gray-600 mb-6 block">03</span>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8">
                    Strategic Independence
                  </h3>
                  <div className="h-px bg-gray-800 w-full" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                  <div>
                    <h4 className="text-lg font-light text-gray-400 mb-4 tracking-wide">Energy Security</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      Reduce the nation's dependence on volatile global oil markets. 
                      Control our own energy destiny and protect our economy from external shocks.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-light text-gray-400 mb-4 tracking-wide">Technological Sovereignty</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      Position the Philippines as a leader in EV adoption and manufacturing in Southeast Asia—
                      not just a consumer of foreign technology, but a creator and exporter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Statement */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-[1.1] mb-12">
              A legacy for<br />generations
            </h2>
            <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed mb-16">
              This is more than business. This is nation-building. When Rangkada succeeds, we create a future 
              where the Philippines leads, where our people prosper, and where our environment thrives.
            </p>
            
            <div className="h-px bg-gray-200 mb-16" />
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link href="/alpha-partners">
                <button className="group inline-flex items-center gap-4 text-gray-900 hover:text-gray-600 transition-all duration-300">
                  <span className="text-lg font-light tracking-wide">🔥 Become an Alpha Partner</span>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-900 group-hover:scale-110 transition-transform duration-300">
                    <IconArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionContent;
