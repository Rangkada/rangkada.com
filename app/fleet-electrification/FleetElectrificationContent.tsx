"use client";

import Link from "next/link";
import Image from "next/image";
import { sendGAEvent } from "@next/third-parties/google";
import { 
  IconArrowRight, 
  IconTruck,
  IconBolt,
  IconCpu,
  IconTool,
  IconChartLine,
  IconShieldCheck
} from "@tabler/icons-react";

const FleetElectrificationContent = () => {
  const handleClickCTA = () => {
    sendGAEvent('event', 'button_click', { value: 'Fleet Electrification - Schedule Consultation' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white min-h-screen flex items-center py-32 md:py-40 lg:py-48">
        <Image
          src="/images/backgrounds/truck-green-bg.jpg"
          alt="Fleet Electrification"
          fill
          className="object-cover object-center"
          quality={100}
          priority={false}
        />
        <div className={`absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent`} />

        <div className="container absolute inset-0 flex items-end mb-20">
          <div className="max-w-4xl">
            <div className="mb-10">
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-500">
                Charging As A Service
              </span>
            </div>
            
            <h1 className="text-3xl md:text-6xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-[1.05] mb-10">
              Fleet Electrification Made Simple
            </h1>

            <p className="text-md md:text-2xl lg:text-3xl font-light text-gray-400 leading-relaxed max-w-4xl mb-16">
              Asset-light, outcome-based charging. 95%+ uptime. Predictable costs. Shared energy savings.
            </p>

            <Link 
                onClick={handleClickCTA} 
                href="/#contact"
                className="group inline-flex items-center gap-4 text-white hover:text-gray-300 transition-all duration-300 cursor-pointer"
              >
                <span className="text-lg md:text-xl font-light tracking-wide">Schedule Consultation</span>
                <div className="flex items-center justify-center w-14 h-14 rounded-full border border-white group-hover:scale-110 transition-transform duration-300">
                  <IconArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
          </div>
        </div>
      </section>

      {/* How It Works - 4 Steps */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-400 mb-8">
                Simple, Asset-Light, and Proven
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-[1.1]">
                How It Works
              </h2>
            </div>

            <div className="space-y-16 lg:space-y-24">
              {/* Step 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                    We Lease the Chargers
                  </h3>
                  <p className="text-lg font-light text-gray-600 leading-relaxed mb-6">
                    We partner with OEMs and local distributors to secure chargers on 12-month operating leases. You don't buy anything. No upfront CapEx.
                  </p>
                  <ul className="space-y-3 text-base font-light text-gray-600">
                    <li className="flex items-start gap-3">
                      <IconShieldCheck className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>Vendor financing partnerships</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <IconShieldCheck className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>Fixed-cost 12-month leases</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <IconShieldCheck className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>Flexible scaling as fleet grows</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/images/sections/chargers-neon.jpg"
                    alt="EV Chargers"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative h-80 rounded-lg overflow-hidden order-2 lg:order-1">
                  <Image
                    src="/images/sections/maintenance-1.jpg"
                    alt="Installation and Maintenance"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                    We Install & Maintain
                  </h3>
                  <p className="text-lg font-light text-gray-600 leading-relaxed mb-6">
                    Our field service partner handles installation, preventive maintenance, and hardware repairs. We replace wear parts every 6 months.
                  </p>
                  <ul className="space-y-3 text-base font-light text-gray-600">
                    <li className="flex items-start gap-3">
                      <IconShieldCheck className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>Professional installation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <IconShieldCheck className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>Scheduled preventive maintenance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <IconShieldCheck className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>Rapid hardware repair response</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                    Our AI Platform Monitors 24/7
                  </h3>
                  <p className="text-lg font-light text-gray-600 leading-relaxed mb-6">
                    Our proprietary NOC ingests real-time data from every charger. It automatically detects faults, reboots remotely, and creates repair tickets before you notice an issue.
                  </p>
                  <ul className="space-y-3 text-base font-light text-gray-600">
                    <li className="flex items-start gap-3">
                      <IconShieldCheck className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>Real-time anomaly detection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <IconShieldCheck className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>Automated remote remediation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <IconShieldCheck className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>Predictive maintenance alerts</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/images/sections/screenshot-statistics-1.png"
                    alt="AI Platform Monitoring"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative h-80 rounded-lg overflow-hidden order-2 lg:order-1">
                  <Image
                    src="/images/sections/green-trucks.jpg"
                    alt="Electric Fleet"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  {/*
                  <div className="mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6">
                      <span className="text-3xl font-light text-gray-900">4</span>
                    </div>
                  </div>
                  */}
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                    You Pay Per Vehicle
                  </h3>
                  <p className="text-lg font-light text-gray-600 leading-relaxed mb-6">
                    Monthly fee per electric vehicle in your fleet. No surprises. No per-charger fees. Simple, predictable pricing.
                  </p>
                  <ul className="space-y-3 text-base font-light text-gray-600">
                    <li className="flex items-start gap-3">
                      <IconShieldCheck className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>Predictable monthly costs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <IconShieldCheck className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>Shared energy savings (15-30% reduction)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <IconShieldCheck className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>Deposit-to-own option after 24 months</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Layers */}
      <section className="bg-black text-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-500 mb-8">
                Our Solution
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-8">
                Four Layers of Reliability
              </h2>
              <p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed max-w-4xl">
                We guarantee 95%+ uptime and predictable energy costs through integrated asset management, AI-native operations, field service partnerships, and outcome-based contracts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Layer 1 */}
              <div className="bg-gray-900 p-8 lg:p-10 rounded-lg border border-gray-800">
                <div className="mb-6">
                  <IconTruck className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
                  Asset-Light Orchestration
                </h3>
                <p className="text-base font-light text-gray-400 leading-relaxed mb-6">
                  No upfront CapEx. We secure vendor financing partnerships with OEMs for fixed-cost, 12-month operating leases on chargers.
                </p>
                <ul className="space-y-2 text-sm font-light text-gray-500">
                  <li>• Vendor financing partnerships</li>
                  <li>• Fixed-cost operating leases</li>
                  <li>• Bundled with AI platform</li>
                </ul>
              </div>

              {/* Layer 2 */}
              <div className="bg-gray-900 p-8 lg:p-10 rounded-lg border border-gray-800">
                <div className="mb-6">
                  <IconCpu className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
                  AI-Native NOC Platform
                </h3>
                <p className="text-base font-light text-gray-400 leading-relaxed mb-6">
                  Real-time data ingestion from chargers, batteries, and grid meters. Automatic anomaly detection, diagnosis, and remote remediation.
                </p>
                <ul className="space-y-2 text-sm font-light text-gray-500">
                  <li>• OCPP/API integration</li>
                  <li>• Automated diagnostics</li>
                  <li>• Energy optimization</li>
                </ul>
              </div>

              {/* Layer 3 */}
              <div className="bg-gray-900 p-8 lg:p-10 rounded-lg border border-gray-800">
                <div className="mb-6">
                  <IconTool className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
                  Preventive Maintenance & Field Service
                </h3>
                <p className="text-base font-light text-gray-400 leading-relaxed mb-6">
                  Third-party field service network for rapid hardware repair. Preventive maintenance schedule embedded in contract.
                </p>
                <ul className="space-y-2 text-sm font-light text-gray-500">
                  <li>• Rapid repair response</li>
                  <li>• 6-month wear part replacement</li>
                  <li>• No internal truck fleet needed</li>
                </ul>
              </div>

              {/* Layer 4 */}
              <div className="bg-gray-900 p-8 lg:p-10 rounded-lg border border-gray-800">
                <div className="mb-6">
                  <IconChartLine className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
                  Outcome-Based Contracts
                </h3>
                <p className="text-base font-light text-gray-400 leading-relaxed mb-6">
                  95%+ uptime guarantee with penalty clause. Energy savings guarantee with 50/50 shared savings above baseline.
                </p>
                <ul className="space-y-2 text-sm font-light text-gray-500">
                  <li>• 95%+ uptime SLA</li>
                  <li>• Shared energy savings</li>
                  <li>• Deposit-to-own option</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-400 mb-8">
                The Rangkada Advantage
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-[1.1] mb-8">
                Why Choose Rangkada
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              <div>
                <div className="mb-6">
                  <IconShieldCheck className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4">
                  No Upfront CapEx
                </h3>
                <p className="text-base font-light text-gray-600 leading-relaxed">
                  Asset-light model means you can scale your fleet without massive capital investment.
                </p>
              </div>

              <div>
                <div className="mb-6">
                  <IconBolt className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4">
                  95%+ Uptime Guarantee
                </h3>
                <p className="text-base font-light text-gray-600 leading-relaxed">
                  SLA-backed reliability with penalty clauses. Your fleet stays charged, always.
                </p>
              </div>

              <div>
                <div className="mb-6">
                  <IconChartLine className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4">
                  Predictable Costs
                </h3>
                <p className="text-base font-light text-gray-600 leading-relaxed">
                  Monthly per-vehicle pricing. No surprises. No hidden per-charger fees.
                </p>
              </div>

              <div>
                <div className="mb-6">
                  <IconCpu className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4">
                  AI-Powered Optimization
                </h3>
                <p className="text-base font-light text-gray-600 leading-relaxed">
                  Automatic demand charge prevention and energy cost reduction (15-30% typical).
                </p>
              </div>

              <div>
                <div className="mb-6">
                  <IconTool className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4">
                  Shared Savings
                </h3>
                <p className="text-base font-light text-gray-600 leading-relaxed">
                  We share energy savings above baseline. Your success is our success.
                </p>
              </div>

              <div>
                <div className="mb-6">
                  <IconTruck className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4">
                  Deposit-to-Own
                </h3>
                <p className="text-base font-light text-gray-600 leading-relaxed">
                  After 24 months, own the chargers. Continue service at lower rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-300 py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-[1.1] mb-12">
              Ready to Electrify Your Fleet?
            </h2>
            <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed mb-16">
              Let's discuss how Rangkada can simplify your fleet electrification journey.
            </p>
            
            <Link onClick={handleClickCTA} href="/#contact">
              <button className="group inline-flex items-center gap-4 px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300">
                <span className="text-lg font-light tracking-wide">Schedule Consultation</span>
                <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FleetElectrificationContent;
