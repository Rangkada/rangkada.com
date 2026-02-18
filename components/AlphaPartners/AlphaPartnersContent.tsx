'use client';

import React from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { IconCheck } from "@tabler/icons-react";
import AlphaPartnersApplyCTA from "./AlphaPartnersApplyCTA";

const AlphaPartnersContent = () => {
  const handleClickApply = () => {
    sendGAEvent('event', 'button_click', { value: 'Alpha Partners - Apply for Pilot' }); 
  }

  return (
    <>
      {/* The Opportunity */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-400 mb-8">
                Partnership Opportunities
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-[1.1] mb-12 max-w-4xl mx-auto">
                Build the Future Together
              </h2>
              <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed max-w-3xl mx-auto">
                We're building the operations infrastructure for EV charging. Partner with us to expand reach, improve reliability, and create new revenue streams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="bg-black text-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-8">
                Partnership Types
              </h2>
              <p className="text-xl font-light text-gray-400 leading-relaxed max-w-3xl">
                We work with partners across the EV charging ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Charging Network Operators */}
              <div>
                <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-500 mb-6">
                  Network Partners
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-8 leading-tight">
                  Charging Network Operators
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l border-gray-800 pl-6 hover:border-gray-600 transition-colors">
                    <h4 className="text-lg font-light text-white mb-2">Expand Your Network</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      Connect your charging stations to our operations platform. Increase utilization through our fleet operator network.
                    </p>
                  </div>

                  <div className="border-l border-gray-800 pl-6 hover:border-gray-600 transition-colors">
                    <h4 className="text-lg font-light text-white mb-2">Improve Reliability</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      Our 24/7 monitoring and automated resolution reduces downtime across your network.
                    </p>
                  </div>

                  <div className="border-l border-gray-800 pl-6 hover:border-gray-600 transition-colors">
                    <h4 className="text-lg font-light text-white mb-2">Revenue Share</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      Earn from increased utilization and premium fleet services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hardware Providers */}
              <div>
                <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-500 mb-6">
                  Technology Partners
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-8 leading-tight">
                  Charger Hardware Providers
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l border-gray-800 pl-6 hover:border-gray-600 transition-colors">
                    <h4 className="text-lg font-light text-white mb-2">Integration Support</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      OCPP integration and API connectivity. We handle the operations layer for your hardware.
                    </p>
                  </div>

                  <div className="border-l border-gray-800 pl-6 hover:border-gray-600 transition-colors">
                    <h4 className="text-lg font-light text-white mb-2">Reduce Support Burden</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      Our automated diagnostics and resolution reduce support tickets for your hardware.
                    </p>
                  </div>

                  <div className="border-l border-gray-800 pl-6 hover:border-gray-600 transition-colors">
                    <h4 className="text-lg font-light text-white mb-2">Market Access</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      Access to fleet operators and site hosts through our network.
                    </p>
                  </div>
                </div>
              </div>

              {/* CPMS Providers */}
              <div>
                <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-500 mb-6">
                  Software Partners
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-8 leading-tight">
                  CPMS & Software Platforms
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l border-gray-800 pl-6 hover:border-gray-600 transition-colors">
                    <h4 className="text-lg font-light text-white mb-2">Complementary Services</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      We handle operations. You handle management. Together we provide complete solution.
                    </p>
                  </div>

                  <div className="border-l border-gray-800 pl-6 hover:border-gray-600 transition-colors">
                    <h4 className="text-lg font-light text-white mb-2">API Integration</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      Seamless integration with your platform. Shared customer success.
                    </p>
                  </div>

                  <div className="border-l border-gray-800 pl-6 hover:border-gray-600 transition-colors">
                    <h4 className="text-lg font-light text-white mb-2">Joint Go-to-Market</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      Co-selling opportunities and bundled offerings for customers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Energy & Grid */}
              <div>
                <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-500 mb-6">
                  Energy Partners
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-8 leading-tight">
                  Utilities & Energy Providers
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l border-gray-800 pl-6 hover:border-gray-600 transition-colors">
                    <h4 className="text-lg font-light text-white mb-2">Demand Response</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      Automated load management and demand response participation across our network.
                    </p>
                  </div>

                  <div className="border-l border-gray-800 pl-6 hover:border-gray-600 transition-colors">
                    <h4 className="text-lg font-light text-white mb-2">Grid Services</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      Future V2G and distributed energy orchestration capabilities.
                    </p>
                  </div>

                  <div className="border-l border-gray-800 pl-6 hover:border-gray-600 transition-colors">
                    <h4 className="text-lg font-light text-white mb-2">Data Insights</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      Aggregated consumption patterns and forecasting for grid planning.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fleet Operators */}
              <div>
                <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-500 mb-6">
                  Operational Partners
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-8 leading-tight">
                  Fleet Operators & Site Hosts
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l border-gray-800 pl-6 hover:border-gray-600 transition-colors">
                    <h4 className="text-lg font-light text-white mb-2">Founding Customer Program</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      50% lifetime discount. Direct input on product development. Priority support.
                    </p>
                  </div>

                  <div className="border-l border-gray-800 pl-6 hover:border-gray-600 transition-colors">
                    <h4 className="text-lg font-light text-white mb-2">Guaranteed Outcomes</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      95%+ uptime and 15-25% cost reduction. 6-month pilot with no long-term commitment.
                    </p>
                  </div>

                  <div className="border-l border-gray-800 pl-6 hover:border-gray-600 transition-colors">
                    <h4 className="text-lg font-light text-white mb-2">Co-Creation</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      Shape features and roadmap. Featured case studies and marketing recognition.
                    </p>
                  </div>
                </div>
              </div>

              {/* OEMs & Vehicle Manufacturers */}
              <div>
                <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-500 mb-6">
                  Vehicle Partners
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-8 leading-tight">
                  OEMs & Vehicle Manufacturers
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l border-gray-800 pl-6 hover:border-gray-600 transition-colors">
                    <h4 className="text-lg font-light text-white mb-2">Telematics Integration</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      Connect vehicle data for optimized charging schedules and predictive maintenance.
                    </p>
                  </div>

                  <div className="border-l border-gray-800 pl-6 hover:border-gray-600 transition-colors">
                    <h4 className="text-lg font-light text-white mb-2">Fleet Services</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      Bundled charging operations with vehicle sales. Complete fleet solution.
                    </p>
                  </div>

                  <div className="border-l border-gray-800 pl-6 hover:border-gray-600 transition-colors">
                    <h4 className="text-lg font-light text-white mb-2">V2G Readiness</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      Future bidirectional charging capabilities and grid services integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-20">
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-400 mb-8">
                Why Partner With Us
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-light tracking-tight text-gray-900 leading-[1.1] mb-12">
                Early Partners Shape the Platform
              </h2>
            </div>

            <div className="space-y-16">
              <div>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
                  Market Timing
                </h3>
                <p className="text-lg font-light text-gray-700 leading-relaxed mb-4">
                  EV charging infrastructure is growing rapidly, but operations remain fragmented. Early partners help define the standards and capture market share as the industry consolidates.
                </p>
                <div className="h-px bg-gray-200" />
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
                  Technical Integration
                </h3>
                <p className="text-lg font-light text-gray-700 leading-relaxed mb-4">
                  Deep integration with our platform. Your technology becomes part of the operations infrastructure that fleet operators and site hosts depend on.
                </p>
                <div className="h-px bg-gray-200" />
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
                  Revenue Opportunities
                </h3>
                <p className="text-lg font-light text-gray-700 leading-relaxed mb-4">
                  Access to our customer network. Revenue sharing on services. Joint go-to-market opportunities. Preferential terms for early partners.
                </p>
                <div className="h-px bg-gray-200" />
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
                  Future Capabilities
                </h3>
                <p className="text-lg font-light text-gray-700 leading-relaxed mb-4">
                  Early access to V2G orchestration, distributed energy management, and grid services. Position your technology for the next phase of EV infrastructure.
                </p>
                <div className="h-px bg-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AlphaPartnersApplyCTA />
    </>
  );
};

export default AlphaPartnersContent;
