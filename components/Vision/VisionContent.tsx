'use client';

import React from "react";
import Link from "next/link";
import { IconArrowRight, IconPlug, IconBolt, IconChartBar, IconCpu } from "@tabler/icons-react";

const VisionContent = () => {
  return (
    <>
      {/* Mission Statement Section */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16">
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-400 mb-8">
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-[1.1] mb-12">
                Solve Today's Problems.<br />Build Tomorrow's Infrastructure.
              </h2>
              <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed max-w-4xl">
                We solve the immediate operational challenges of EV charging—reliability and cost—while building the foundational infrastructure for the distributed energy future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="bg-black text-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-20">
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-500 mb-8">
                Where We Are Today
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-12">
                Operations Service for EV Charging
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-16">
              <div>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-6">
                  The Problem We Solve
                </h3>
                <p className="text-lg font-light text-gray-400 leading-relaxed mb-6">
                  EV charging operators face two critical challenges: charger reliability and energy cost volatility. Software generates alerts but doesn't fix problems. Operations teams remain the glue between disconnected systems.
                </p>
                <ul className="space-y-3 text-base font-light text-gray-500">
                  <li>• Chargers fail without warning</li>
                  <li>• Hours investigating root causes</li>
                  <li>• Demand charges account for 30-50% of costs</li>
                  <li>• Single 15-minute peak doubles monthly bills</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-6">
                  How We Solve It
                </h3>
                <p className="text-lg font-light text-gray-400 leading-relaxed mb-6">
                  We become the outsourced operations team. Our systems connect to existing infrastructure, monitor continuously, and execute resolutions automatically.
                </p>
                <ul className="space-y-3 text-base font-light text-gray-500">
                  <li>• 95%+ charger uptime</li>
                  <li>• 15-25% energy cost reduction</li>
                  <li>• 90% of issues resolved remotely</li>
                  <li>• Predictable monthly billing</li>
                </ul>
              </div>
            </div>

            <div className="border-l-2 border-gray-800 pl-8">
              <p className="text-lg md:text-xl font-light text-gray-400 italic leading-relaxed">
                This is our entry point. It solves immediate, urgent problems and builds the foundational infrastructure for our long-term vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-20">
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-400 mb-8">
                Where We're Going
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-[1.1] mb-12">
                Intelligent Orchestration Layer for Distributed Energy
              </h2>
              <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed max-w-4xl">
                As electrification accelerates, the energy landscape becomes fundamentally more complex. Solar panels, battery storage, EV chargers, and grid connections proliferate—but they operate in isolation. No single system coordinates them intelligently.
              </p>
            </div>

            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-12">
                The Future Problem
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="border-l-2 border-gray-200 pl-6">
                  <p className="text-base font-light text-gray-700 leading-relaxed">
                    Solar generation peaks when vehicles are not present. Battery storage is underutilized because charging schedules are not coordinated with discharge opportunities.
                  </p>
                </div>
                <div className="border-l-2 border-gray-200 pl-6">
                  <p className="text-base font-light text-gray-700 leading-relaxed">
                    Vehicle-to-grid capabilities remain dormant because no system can orchestrate bidirectional flows. Demand response opportunities are missed because assets cannot respond collectively.
                  </p>
                </div>
                <div className="border-l-2 border-gray-200 pl-6">
                  <p className="text-base font-light text-gray-700 leading-relaxed">
                    Grid connection upgrades are purchased unnecessarily because existing assets are not optimized. Revenue opportunities from grid services go uncaptured.
                  </p>
                </div>
                <div className="border-l-2 border-gray-200 pl-6">
                  <p className="text-base font-light text-gray-700 leading-relaxed">
                    Operators manage each asset separately—chargers, solar, storage—without unified intelligence to maximize value across the entire system.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-12">
                The Future Solution
              </h3>
              
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-12">
                We will build an intelligent orchestration layer that connects and coordinates all distributed energy assets:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* EV Chargers */}
                <div className="group border border-gray-200 hover:border-gray-900 transition-all duration-300">
                  <div className="bg-gray-50 p-6 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-gray-900 transition-colors">
                        <IconPlug className="h-6 w-6 text-gray-600 group-hover:text-gray-900 transition-colors" />
                      </div>
                      <h4 className="text-xl font-light text-gray-900">EV Chargers</h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-light text-gray-500 mb-2">Current State</p>
                        <p className="text-base font-light text-gray-700">Isolated load centers</p>
                      </div>
                      <div className="flex justify-center">
                        <IconArrowRight className="h-5 w-5 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm font-light text-gray-500 mb-2">Future State</p>
                        <p className="text-base font-light text-gray-900">Controllable assets that charge and discharge based on grid signals</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* EV Batteries */}
                <div className="group border border-gray-200 hover:border-gray-900 transition-all duration-300">
                  <div className="bg-gray-50 p-6 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-gray-900 transition-colors">
                        <IconBolt className="h-6 w-6 text-gray-600 group-hover:text-gray-900 transition-colors" />
                      </div>
                      <h4 className="text-xl font-light text-gray-900">EV Batteries</h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-light text-gray-500 mb-2">Current State</p>
                        <p className="text-base font-light text-gray-700">Idle when parked</p>
                      </div>
                      <div className="flex justify-center">
                        <IconArrowRight className="h-5 w-5 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm font-light text-gray-500 mb-2">Future State</p>
                        <p className="text-base font-light text-gray-900">Distributed storage participating in energy markets</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Solar & Storage */}
                <div className="group border border-gray-200 hover:border-gray-900 transition-all duration-300">
                  <div className="bg-gray-50 p-6 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-gray-900 transition-colors">
                        <IconChartBar className="h-6 w-6 text-gray-600 group-hover:text-gray-900 transition-colors" />
                      </div>
                      <h4 className="text-xl font-light text-gray-900">Solar & Storage</h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-light text-gray-500 mb-2">Current State</p>
                        <p className="text-base font-light text-gray-700">Generation peaks wasted, storage underutilized</p>
                      </div>
                      <div className="flex justify-center">
                        <IconArrowRight className="h-5 w-5 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm font-light text-gray-500 mb-2">Future State</p>
                        <p className="text-base font-light text-gray-900">Matched with charging demand, optimized for peak shaving</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Grid Connection */}
                <div className="group border border-gray-200 hover:border-gray-900 transition-all duration-300">
                  <div className="bg-gray-50 p-6 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-gray-900 transition-colors">
                        <IconCpu className="h-6 w-6 text-gray-600 group-hover:text-gray-900 transition-colors" />
                      </div>
                      <h4 className="text-xl font-light text-gray-900">Grid Connection</h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-light text-gray-500 mb-2">Current State</p>
                        <p className="text-base font-light text-gray-700">Fixed capacity constraint</p>
                      </div>
                      <div className="flex justify-center">
                        <IconArrowRight className="h-5 w-5 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm font-light text-gray-500 mb-2">Future State</p>
                        <p className="text-base font-light text-gray-900">Dynamically managed through load flexibility</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Roadmap */}
      <section className="bg-black text-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-20">
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-500 mb-8">
                The Path Forward
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-12">
                Four-Phase Development
              </h2>
            </div>

            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="relative">
                <div className="flex items-start gap-8">
                  {/* Timeline dot and line */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-700 flex items-center justify-center flex-shrink-0">
                      <IconPlug className="h-8 w-8 text-white" />
                    </div>
                    <div className="w-0.5 h-full bg-gray-800 mt-4" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-12">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-white/10 text-sm font-light text-gray-400 rounded-full mb-3">
                        Phase 1 • Current
                      </span>
                      <h3 className="text-2xl md:text-3xl font-light text-white mb-3">
                        Reliability + Energy Optimization
                      </h3>
                    </div>
                    <p className="text-lg font-light text-gray-400 leading-relaxed mb-4">
                      Operations service for EV charging. 95%+ uptime, 15-25% cost reduction.
                    </p>
                    <div className="bg-white/5 border border-white/10 p-4 rounded">
                      <p className="text-sm font-light text-gray-500 mb-1">Customer Value</p>
                      <p className="text-base font-light text-gray-300">
                        Higher uptime, lower energy bills, reduced operational complexity
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative">
                <div className="flex items-start gap-8">
                  {/* Timeline dot and line */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-900 border-2 border-gray-700 flex items-center justify-center flex-shrink-0">
                      <IconChartBar className="h-8 w-8 text-gray-500" />
                    </div>
                    <div className="w-0.5 h-full bg-gray-800 mt-4" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-12">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-white/5 text-sm font-light text-gray-500 rounded-full mb-3">
                        Phase 2 • 12-18 months
                      </span>
                      <h3 className="text-2xl md:text-3xl font-light text-white mb-3">
                        Stationary Storage Orchestration
                      </h3>
                    </div>
                    <p className="text-lg font-light text-gray-400 leading-relaxed mb-4">
                      Coordinate battery storage with charging demand. Maximize storage ROI through peak shaving and arbitrage.
                    </p>
                    <div className="bg-white/5 border border-white/10 p-4 rounded">
                      <p className="text-sm font-light text-gray-500 mb-1">Customer Value</p>
                      <p className="text-base font-light text-gray-300">
                        Maximize storage ROI, reduce peak loads, avoid grid upgrade costs
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative">
                <div className="flex items-start gap-8">
                  {/* Timeline dot and line */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-900 border-2 border-gray-700 flex items-center justify-center flex-shrink-0">
                      <IconBolt className="h-8 w-8 text-gray-500" />
                    </div>
                    <div className="w-0.5 h-full bg-gray-800 mt-4" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-12">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-white/5 text-sm font-light text-gray-500 rounded-full mb-3">
                        Phase 3 • 24-36 months
                      </span>
                      <h3 className="text-2xl md:text-3xl font-light text-white mb-3">
                        Vehicle-to-Grid Orchestration
                      </h3>
                    </div>
                    <p className="text-lg font-light text-gray-400 leading-relaxed mb-4">
                      Manage bidirectional charging flows. Turn parked fleet vehicles into virtual power plants that generate revenue.
                    </p>
                    <div className="bg-white/5 border border-white/10 p-4 rounded">
                      <p className="text-sm font-light text-gray-500 mb-1">Customer Value</p>
                      <p className="text-base font-light text-gray-300">
                        New revenue from bidirectional charging, grid service payments
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="relative">
                <div className="flex items-start gap-8">
                  {/* Timeline dot (no line after) */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-900 border-2 border-gray-700 flex items-center justify-center flex-shrink-0">
                      <IconCpu className="h-8 w-8 text-gray-500" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-white/5 text-sm font-light text-gray-500 rounded-full mb-3">
                        Phase 4 • 36-48 months
                      </span>
                      <h3 className="text-2xl md:text-3xl font-light text-white mb-3">
                        Full Distributed Energy Orchestration
                      </h3>
                    </div>
                    <p className="text-lg font-light text-gray-400 leading-relaxed mb-4">
                      Coordinate solar, storage, chargers, meters, and grid connections. Complete asset optimization with grid service revenues.
                    </p>
                    <div className="bg-white/5 border border-white/10 p-4 rounded">
                      <p className="text-sm font-light text-gray-500 mb-1">Customer Value</p>
                      <p className="text-base font-light text-gray-300">
                        Virtual power plant participation, complete asset optimization, grid service revenues
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-20">
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-400 mb-8">
                Impact
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-[1.1] mb-12">
                Why This Matters
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
                  For Our Customers
                </h3>
                <ul className="space-y-4 text-lg font-light text-gray-700">
                  <li>• Deferred infrastructure investment ($50K-$500K per site)</li>
                  <li>• New revenue streams from existing assets</li>
                  <li>• Maximized ROI on renewable investments</li>
                  <li>• Grid service revenues from flexibility</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
                  For the Grid
                </h3>
                <ul className="space-y-4 text-lg font-light text-gray-700">
                  <li>• Reduced peak demand through intelligent load management</li>
                  <li>• Increased renewable integration capacity</li>
                  <li>• Grid stability through distributed flexibility</li>
                  <li>• Deferred transmission and distribution upgrades</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black text-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-12">
              Start with Operations.<br />Scale to Orchestration.
            </h2>
            <p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed mb-16">
              We're solving today's operational problems while building the infrastructure for tomorrow's distributed energy future.
            </p>
            
            <div className="h-px bg-gray-800 mb-16" />
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link href="/chargeops">
                <button className="group inline-flex items-center gap-4 text-white hover:text-gray-300 transition-all duration-300">
                  <span className="text-lg font-light tracking-wide">Explore ChargeOps</span>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white group-hover:scale-110 transition-transform duration-300">
                    <IconArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </Link>
              
              <Link href="/alpha-partners">
                <button className="group inline-flex items-center gap-4 text-white hover:text-gray-300 transition-all duration-300">
                  <span className="text-lg font-light tracking-wide">Partner With Us</span>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white group-hover:scale-110 transition-transform duration-300">
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
