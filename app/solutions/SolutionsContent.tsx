"use client";

import Link from "next/link";
import Image from "next/image";
import { sendGAEvent } from "@next/third-parties/google";
import { IconArrowRight, IconBolt, IconBattery, IconDeviceMobile, IconTruck } from "@tabler/icons-react";

const SolutionsContent = () => {
  const handleClickCTA = () => {
    sendGAEvent('event', 'button_click', { value: 'Solutions - Get Custom Estimate' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white min-h-screen flex items-center py-32 md:py-40 lg:py-48">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-500">
                Complete Fleet Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[1.05] mb-10">
              We're not just selling vehicles.
              <br />
              <span className="font-normal text-gray-400">
                We're selling a competitive advantage.
              </span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-400 leading-relaxed max-w-4xl mb-16">
              Rangkada provides a complete, integrated electric fleet solution designed from the ground up for the Philippine market. We eliminate your biggest operational variable—fuel costs—and replace it with predictable, manageable savings.
            </p>

            <Link onClick={handleClickCTA} href="#contact">
              <button className="group inline-flex items-center gap-4 px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300">
                <span className="text-lg font-light tracking-wide">Get a Custom Savings Estimate</span>
                <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 1. Financing Model */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-400 mb-8">
                01
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-[1.1] mb-8">
                The Rangkada Financing Model
                <br />
                <span className="font-normal">Profit from day one</span>
              </h2>
              <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed max-w-3xl">
                We remove the single biggest barrier to electrification: upfront cost.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
              <div className="group">
                <div className="mb-6">
                  <IconBolt className="h-12 w-12 text-gray-400 group-hover:text-gray-900 transition-colors" />
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                  Pay-As-You-Save Model
                </h3>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  You pay a simple weekly subscription fee that is guaranteed to be lower than your current fuel and maintenance costs. From the very first week, you are saving money with zero capital expenditure.
                </p>
              </div>

              <div className="group">
                <div className="mb-6">
                  <IconBolt className="h-12 w-12 text-gray-400 group-hover:text-gray-900 transition-colors" />
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                  Unlock Government Incentives
                </h3>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  We help you navigate the EVIDA law (RA 11697), ensuring you benefit from zero excise tax, reduced registration fees, and other financial perks, maximizing your savings.
                </p>
              </div>

              <div className="group">
                <div className="mb-6">
                  <IconBolt className="h-12 w-12 text-gray-400 group-hover:text-gray-900 transition-colors" />
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                  Total Cost Predictability
                </h3>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  Transform a volatile expense (fuel prices) into a fixed, predictable line item. Simplify your budgeting and protect your margins from global oil shocks.
                </p>
              </div>
            </div>

            <div className="border-l-2 border-gray-200 pl-8">
              <p className="text-xl md:text-2xl font-light text-gray-900 italic leading-relaxed">
                You don't need a large budget to start; you just need a commitment to saving one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Vehicles */}
      <section className="bg-black text-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-500 mb-8">
                02
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-8">
                The Vehicles
                <br />
                <span className="font-normal text-gray-400">Data-driven design for Philippine roads</span>
              </h2>
              <p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed max-w-3xl">
                Our upcoming vehicles are being engineered with one source of truth: millions of kilometers of real-world data collected from our Alpha Partners.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              {/* E-Trike */}
              <div>
                <div className="relative aspect-[4/3] mb-8 overflow-hidden rounded-lg">
                  <Image
                    src="/images/sections/3-wheel-ev-cargo.png"
                    alt="Rangkada Model 1 E-Trike"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-3xl md:text-4xl font-light mb-6">
                  Rangkada Model 1
                  <br />
                  <span className="font-normal text-gray-400">E-Trike</span>
                </h3>
                <p className="text-lg font-light text-gray-400 leading-relaxed mb-6">
                  Built for durability and payload. Designed for last-mile logistics and passenger transport, with a rugged frame and a cargo capacity optimized for Filipino businesses.
                </p>
              </div>

              {/* E-Motorcycle */}
              <div>
                <div className="relative aspect-[4/3] mb-8 overflow-hidden rounded-lg">
                  <Image
                    src="/images/sections/2-wheel-ev.png"
                    alt="Rangkada Model 2 E-Motorcycle"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-3xl md:text-4xl font-light mb-6">
                  Rangkada Model 2
                  <br />
                  <span className="font-normal text-gray-400">E-Motorcycle</span>
                </h3>
                <p className="text-lg font-light text-gray-400 leading-relaxed mb-6">
                  Agile and efficient. The perfect solution for food delivery and courier services, offering the perfect balance of range, speed, and maneuverability in dense urban traffic.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-12">
              <h4 className="text-2xl font-light text-white mb-8">Core Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <div className="h-px w-12 bg-white" />
                  <p className="text-base font-light text-gray-400">
                    Weather-Sealed & Corrosion-Resistant: Built to withstand tropical heat, monsoon rains, and coastal humidity.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="h-px w-12 bg-white" />
                  <p className="text-base font-light text-gray-400">
                    Enhanced Torque for Inclines: Powerful motors designed to handle steep grades fully loaded.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="h-px w-12 bg-white" />
                  <p className="text-base font-light text-gray-400">
                    Modular Design: Easy maintenance and repair to maximize uptime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PowerSwap Network */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-400 mb-8">
                03
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-[1.1] mb-8">
                The Rangkada PowerSwap Network
                <br />
                <span className="font-normal text-gray-600">Charging in 60 seconds</span>
              </h2>
              <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed max-w-3xl">
                Downtime is revenue lost. Our battery-swapping system is designed for fleets that never sleep.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
              <div>
                <div className="mb-6">
                  <IconBattery className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                  Swap, Don't Wait
                </h3>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  Drivers can exchange a depleted battery for a fully charged one at a Rangkada station in less than a minute—faster than filling a gas tank.
                </p>
              </div>

              <div>
                <div className="mb-6">
                  <IconBattery className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                  Strategic Locations
                </h3>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  We are deploying swap stations in high-traffic corridors and near partner business hubs, integrated directly into your daily routes.
                </p>
              </div>

              <div>
                <div className="mb-6">
                  <IconBattery className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                  Battery-as-a-Service
                </h3>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  The battery—the most expensive and complex component—is included in your PAYS fee. We own the battery health and performance, so you don't have to.
                </p>
              </div>
            </div>

            <div className="border-l-2 border-gray-200 pl-8">
              <p className="text-xl md:text-2xl font-light text-gray-900 italic leading-relaxed">
                Your vehicles stay on the road earning money, not parked at a charging station.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FleetOS */}
      <section className="bg-black text-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-500 mb-8">
                04
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-8">
                The Rangkada FleetOS
                <br />
                <span className="font-normal text-gray-400">Command your fleet from your phone</span>
              </h2>
              <p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed max-w-3xl">
                Data is the new oil. Our proprietary Fleet Management Platform turns operational data into profit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <IconDeviceMobile className="h-6 w-6 text-gray-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-light text-white mb-2">Live Vehicle Dashboard</h3>
                    <p className="text-base font-light text-gray-400 leading-relaxed">
                      See the real-time location, battery level, and health of every vehicle in your fleet.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <IconDeviceMobile className="h-6 w-6 text-gray-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-light text-white mb-2">Route & Efficiency Analytics</h3>
                    <p className="text-base font-light text-gray-400 leading-relaxed">
                      Identify inefficient routes, excessive idling, and opportunities to save more energy and time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <IconDeviceMobile className="h-6 w-6 text-gray-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-light text-white mb-2">Predictive Maintenance Alerts</h3>
                    <p className="text-base font-light text-gray-400 leading-relaxed">
                      Our system analyzes vehicle data to warn you of potential issues before they cause breakdowns, slashing maintenance costs and preventing downtime.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <IconDeviceMobile className="h-6 w-6 text-gray-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-light text-white mb-2">Automated Reporting</h3>
                    <p className="text-base font-light text-gray-400 leading-relaxed">
                      Generate savings reports, carbon footprint reductions, and driver performance metrics with a single click.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-[1.1] mb-12">
              Ready to transform your fleet
              <br />
              <span className="font-normal text-gray-600">from a cost center into a profit engine?</span>
            </h2>
            <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed mb-16">
              We'll provide a free, detailed analysis showing exactly how much you can save.
            </p>
            
            <Link onClick={handleClickCTA} href="/alpha-partners">
              <button className="group inline-flex items-center gap-4 px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300">
                <span className="text-lg font-light tracking-wide">Become an Alpha Partner Today</span>
                <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionsContent;
