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
                The Opportunity
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-[1.1] mb-12 max-w-4xl mx-auto">
                Build the Foundation of the Electric Future
              </h2>
              <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Join our exclusive Alpha Partner Program. Co-create the network that powers tomorrow's fleets and gain lasting strategic advantages.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
              <div className="bg-white p-12 text-center">
                <div className="text-5xl md:text-6xl font-light text-gray-900 mb-4">50%</div>
                <div className="text-sm tracking-wide text-gray-600 uppercase">Guaranteed Savings</div>
              </div>
              <div className="bg-white p-12 text-center">
                <div className="text-5xl md:text-6xl font-light text-gray-900 mb-4">₱0</div>
                <div className="text-sm tracking-wide text-gray-600 uppercase">Upfront Investment</div>
              </div>
              <div className="bg-white p-12 text-center">
                <div className="text-5xl md:text-6xl font-light text-gray-900 mb-4">6</div>
                <div className="text-sm tracking-wide text-gray-600 uppercase">Month Pilot</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* For Fleet Operators */}
              <div>
                <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-500 mb-8">
                  Fleet Management System
                </span>
                <h3 className="text-3xl md:text-4xl font-light text-white mb-12 leading-tight">
                  For Fleet Operators
                </h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-white transition-colors">
                      <IconCheck className="h-5 w-5 text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-lg font-light text-white mb-2">Strategic Co-Creation</h4>
                      <p className="text-base font-light text-gray-500 leading-relaxed">
                        Direct input on fleet dashboard features, route planning, and reporting tools.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-white transition-colors">
                      <IconCheck className="h-5 w-5 text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-lg font-light text-white mb-2">Exclusive Pricing</h4>
                      <p className="text-base font-light text-gray-500 leading-relaxed">
                        Lifetime discount on fleet subscription fees.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-white transition-colors">
                      <IconCheck className="h-5 w-5 text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-lg font-light text-white mb-2">Priority Support</h4>
                      <p className="text-base font-light text-gray-500 leading-relaxed">
                        Dedicated Slack channel or direct line to founding team for technical & operational support.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-white transition-colors">
                      <IconCheck className="h-5 w-5 text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-lg font-light text-white mb-2">Marketing & Recognition</h4>
                      <p className="text-base font-light text-gray-500 leading-relaxed">
                        Featured case study and "Founding Fleet Partner" badge for your marketing.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-white transition-colors">
                      <IconCheck className="h-5 w-5 text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-lg font-light text-white mb-2">Future Priority</h4>
                      <p className="text-base font-light text-gray-500 leading-relaxed">
                        First access to new features like smart charging, V2G, and energy management tools.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-500 mb-8">
                  Charge Point Management System
                </span>
                <h3 className="text-3xl md:text-4xl font-light text-white mb-12 leading-tight">
                  For Charging Station Hosts
                </h3>
                
                <div className="space-y-8">
                  <div className="border-l border-gray-800 pl-8 hover:border-gray-600 transition-colors">
                    <h4 className="text-lg font-light text-white mb-2">Product Influence</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      Direct input on station management, analytics, pricing controls, and owner reporting.
                    </p>
                  </div>

                  <div className="border-l border-gray-800 pl-8 hover:border-gray-600 transition-colors">
                    <h4 className="text-lg font-light text-white mb-2">Reduced Fees</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      Dramatically reduced platform transaction fees.
                    </p>
                  </div>

                  <div className="border-l border-gray-800 pl-8 hover:border-gray-600 transition-colors">
                    <h4 className="text-lg font-light text-white mb-2">Dedicated Support</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      Same dedicated support channel for installation and management issues.
                    </p>
                  </div>

                  <div className="border-l border-gray-800 pl-8 hover:border-gray-600 transition-colors">
                    <h4 className="text-lg font-light text-white mb-2">Preferred Location</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      Listed as a "Preferred Charging Location" on the platform map and in fleet communications.
                    </p>
                  </div>

                  <div className="border-l border-gray-800 pl-8 hover:border-gray-600 transition-colors">
                    <h4 className="text-lg font-light text-white mb-2">Future Priority</h4>
                    <p className="text-base font-light text-gray-500 leading-relaxed">
                      First right to opt into future premium programs (e.g., demand response, grid services).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-20">
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-400 mb-8">
                Why Now
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-light tracking-tight text-gray-900 leading-[1.1] mb-12">
                Your First-Mover Advantage Won't Last.
              </h2>
            </div>

            <div className="space-y-16">
              <div>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
                  Capitalize on Explosive, Policy-Driven Growth
                </h3>
                <p className="text-lg font-light text-gray-700 leading-relaxed mb-4">
                  Shape the platform to serve your exact needs from the start and secure your spot as a preferred destination for the first major wave of EV fleets.
                </p>
                <div className="h-px bg-gray-200" />
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
                  Pioneer Partner
                </h3>
                <p className="text-lg font-light text-gray-700 leading-relaxed mb-4">
                  Become a founding member of the definitive solution. For hosts, get promoted to locked-in fleets. For fleets, get guaranteed, software-optimized access to essential charging partners.
                </p>
                <div className="h-px bg-gray-200" />
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
                  Competitive Advantage
                </h3>
                <p className="text-lg font-light text-gray-700 leading-relaxed mb-4">
                  Secure lifetime or long-term preferential rates. These exclusive economics are only available to Alpha Partners and are not guaranteed for later joiners.
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
