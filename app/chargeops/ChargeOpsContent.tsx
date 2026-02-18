"use client";

import Link from "next/link";
import Image from "next/image";
import { sendGAEvent } from "@next/third-parties/google";
import { 
  IconArrowRight, 
  IconPlug, 
  IconCpu, 
  IconTool, 
  IconBolt, 
  IconChartBar, 
  IconRefresh
} from "@tabler/icons-react";

const ChargeOpsContent = () => {
  const handleClickCTA = () => {
    sendGAEvent('event', 'button_click', { value: 'ChargeOps - Schedule Assessment' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white min-h-screen flex items-center py-32 md:py-40 lg:py-48">
        <Image
          src="/images/backgrounds/ev-charging-2.jpg"
          alt="ChargeOps Operations Engine"
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
                Operations Service
              </span>
            </div>
            
            <h1 className="text-3xl md:text-6xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-[1.05] mb-10">
              Operations Engine for EV Charging Networks
            </h1>

            <p className="text-md md:text-2xl lg:text-3xl font-light text-gray-400 leading-relaxed max-w-4xl mb-16">
              Automated monitoring, diagnosis, and resolution. 95%+ uptime. 15-25% cost reduction.
            </p>

            <Link 
                onClick={handleClickCTA} 
                href="/#contact"
                className="group inline-flex items-center gap-4 text-white hover:text-gray-300 transition-all duration-300 cursor-pointer"
              >
                <span className="text-lg md:text-xl font-light tracking-wide">Schedule Assessment</span>
                <div className="flex items-center justify-center w-14 h-14 rounded-full border border-white group-hover:scale-110 transition-transform duration-300">
                  <IconArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
          </div>
        </div>
      </section>

      {/* What We Connect To */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-400 mb-8">
                System Integration
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-[1.1] mb-8">
                What We Connect To
              </h2>
              <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed max-w-4xl">
                We integrate with your existing systems to create a unified operational view.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="group">
                <div className="mb-6">
                  <IconPlug className="h-12 w-12 text-gray-400 group-hover:text-gray-900 transition-colors" />
                </div>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4">
                  CPMS Platforms
                </h3>
                <p className="text-base font-light text-gray-600 leading-relaxed">
                  Real-time charger status and session data.
                </p>
              </div>

              <div className="group">
                <div className="mb-6">
                  <IconCpu className="h-12 w-12 text-gray-400 group-hover:text-gray-900 transition-colors" />
                </div>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4">
                  OCPP & Hardware APIs
                </h3>
                <p className="text-base font-light text-gray-600 leading-relaxed">
                  Communication logs and diagnostic interfaces.
                </p>
              </div>

              <div className="group">
                <div className="mb-6">
                  <IconBolt className="h-12 w-12 text-gray-400 group-hover:text-gray-900 transition-colors" />
                </div>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4">
                  Utility Meters
                </h3>
                <p className="text-base font-light text-gray-600 leading-relaxed">
                  Interval data for demand charge analysis.
                </p>
              </div>

              <div className="group">
                <div className="mb-6">
                  <IconChartBar className="h-12 w-12 text-gray-400 group-hover:text-gray-900 transition-colors" />
                </div>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4">
                  Building Systems
                </h3>
                <p className="text-base font-light text-gray-600 leading-relaxed">
                  Site-level energy management integration.
                </p>
              </div>

              <div className="group">
                <div className="mb-6">
                  <IconTool className="h-12 w-12 text-gray-400 group-hover:text-gray-900 transition-colors" />
                </div>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4">
                  Fleet Telematics
                </h3>
                <p className="text-base font-light text-gray-600 leading-relaxed">
                  Vehicle schedules and charging requirements.
                </p>
              </div>

              <div className="group">
                <div className="mb-6">
                  <IconRefresh className="h-12 w-12 text-gray-400 group-hover:text-gray-900 transition-colors" />
                </div>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4">
                  Vendor Portals
                </h3>
                <p className="text-base font-light text-gray-600 leading-relaxed">
                  Diagnostic tools and firmware repositories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Monitor */}
      <section className="bg-black text-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-500 mb-8">
                Continuous Monitoring
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-8">
                How We Monitor
              </h2>
              <p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed max-w-4xl">
                Continuous analysis of voltage, current, temperature, and state-of-charge data. Baseline behavior established for every charger. Deviations flagged before they cause downtime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-6">
                  Baseline Behavior
                </h3>
                <ul className="space-y-3 text-base font-light text-gray-400">
                  <li>• Voltage and current patterns per session</li>
                  <li>• Temperature profiles under load</li>
                  <li>• Communication latency and timing</li>
                  <li>• State-of-charge progression curves</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-6">
                  Predictive Maintenance
                </h3>
                <ul className="space-y-3 text-base font-light text-gray-400">
                  <li>• Unusual patterns detected days before failure</li>
                  <li>• Scheduled replacement vs. emergency dispatch</li>
                  <li>• Component degradation tracking</li>
                  <li>• Maintenance window optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Resolve */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-400 mb-8">
                Automated Resolution
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-[1.1] mb-8">
                How We Resolve
              </h2>
              <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed max-w-4xl">
                90% of charger outages are software-related. We classify root cause and execute the appropriate response automatically.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Network Issues */}
              <div className="group bg-white border border-gray-200 p-8 hover:border-gray-900 transition-all duration-300">
                <div className="mb-6">
                  <IconPlug className="h-12 w-12 text-gray-400 group-hover:text-gray-900 transition-colors" />
                </div>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-3">
                  Network Issues
                </h3>
                <p className="text-base font-light text-gray-600 leading-relaxed">
                  Automated diagnostics, remote reboot, connectivity restoration
                </p>
              </div>

              {/* Payment Failures */}
              <div className="group bg-white border border-gray-200 p-8 hover:border-gray-900 transition-all duration-300">
                <div className="mb-6">
                  <IconCpu className="h-12 w-12 text-gray-400 group-hover:text-gray-900 transition-colors" />
                </div>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-3">
                  Payment Failures
                </h3>
                <p className="text-base font-light text-gray-600 leading-relaxed">
                  Terminal reset, gateway reconnection, transaction retry
                </p>
              </div>

              {/* OCPP Errors */}
              <div className="group bg-white border border-gray-200 p-8 hover:border-gray-900 transition-all duration-300">
                <div className="mb-6">
                  <IconRefresh className="h-12 w-12 text-gray-400 group-hover:text-gray-900 transition-colors" />
                </div>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-3">
                  OCPP Errors
                </h3>
                <p className="text-base font-light text-gray-600 leading-relaxed">
                  Protocol analysis, firmware updates, message queue clearing
                </p>
              </div>

              {/* Grid Interruptions */}
              <div className="group bg-white border border-gray-200 p-8 hover:border-gray-900 transition-all duration-300">
                <div className="mb-6">
                  <IconBolt className="h-12 w-12 text-gray-400 group-hover:text-gray-900 transition-colors" />
                </div>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-3">
                  Grid Interruptions
                </h3>
                <p className="text-base font-light text-gray-600 leading-relaxed">
                  Condition monitoring, utility coordination, automatic restart
                </p>
              </div>

              {/* Hardware Failures */}
              <div className="group bg-white border border-gray-200 p-8 hover:border-gray-900 transition-all duration-300">
                <div className="mb-6">
                  <IconTool className="h-12 w-12 text-gray-400 group-hover:text-gray-900 transition-colors" />
                </div>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-3">
                  Hardware Failures
                </h3>
                <p className="text-base font-light text-gray-600 leading-relaxed">
                  Technician dispatch with diagnosis, certifications, and parts
                </p>
              </div>

              {/* Software/Remote Resolution Highlight */}
              <div className="group bg-gray-900 text-white p-8 flex flex-col justify-center">
                <div className="text-5xl md:text-6xl font-light mb-4">90%</div>
                <p className="text-lg font-light text-gray-400">
                  Software issues resolved remotely without technician dispatch
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 lg:p-12">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
                Technician Coordination
              </h3>
              <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                When physical intervention is required, we match the job with the right technician. No more arriving without the correct parts or training.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                      <IconTool className="h-6 w-6 text-gray-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-light text-gray-900 mb-2">Certifications</h4>
                    <p className="text-sm font-light text-gray-600">
                      Electrical, manufacturer training, safety
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                      <IconPlug className="h-6 w-6 text-gray-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-light text-gray-900 mb-2">Location</h4>
                    <p className="text-sm font-light text-gray-600">
                      Current position, availability, travel time
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                      <IconCpu className="h-6 w-6 text-gray-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-light text-gray-900 mb-2">Parts</h4>
                    <p className="text-sm font-light text-gray-600">
                      Vehicle stock, warehouse availability
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Optimization */}
      <section className="bg-black text-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-500 mb-8">
                Cost Optimization
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-8">
                Energy Optimization
              </h2>
              <p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed max-w-4xl">
                Continuous monitoring of electricity prices, consumption patterns, and vehicle schedules. Optimal charging schedules calculated dynamically.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-16">
              <div>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-6">
                  Demand Charge Prevention
                </h3>
                <p className="text-lg font-light text-gray-400 leading-relaxed mb-6">
                  Demand charges: 30-50% of operating expenses. One 15-minute peak can double your monthly bill. We prevent peaks before they occur.
                </p>
                <ul className="space-y-3 text-base font-light text-gray-500">
                  <li>• Real-time consumption monitoring</li>
                  <li>• Peak prediction and prevention</li>
                  <li>• Load distribution across chargers</li>
                  <li>• Automatic throttling at thresholds</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-6">
                  Load Shifting
                </h3>
                <p className="text-lg font-light text-gray-400 leading-relaxed mb-6">
                  Automatic shift to low-price windows without compromising vehicle readiness.
                </p>
                <ul className="space-y-3 text-base font-light text-gray-500">
                  <li>• Vehicle departure time integration</li>
                  <li>• State-of-charge tracking</li>
                  <li>• Time-of-use rate optimization</li>
                  <li>• Wholesale price response</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-900 p-8 lg:p-12">
              <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
                Demand Response
              </h3>
              <p className="text-lg font-light text-gray-400 leading-relaxed">
                Automatic response to utility demand events. Creates new revenue stream while reducing grid strain. Documented cost reductions up to 25%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Learning */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-400 mb-8">
                System Intelligence
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-[1.1] mb-8">
                Continuous Learning
              </h2>
              <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed max-w-4xl">
                Every incident improves our models. Every demand spike refines our algorithms. Each new customer benefits from everything we've learned.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
                  Cross-Customer Learning
                </h3>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  Firmware mismatch on one charger? Every charger with that firmware becomes detectable. Demand spike from fleet returns? Every similar site becomes preventable.
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
                  Model Refinement
                </h3>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  Detection thresholds adjusted based on false positives. Optimization algorithms refined based on cost outcomes. Dispatch efficiency improves with each job.
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
              Built for Scale
            </h2>
            <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed mb-16">
              50 chargers to 10,000. Same 95% uptime. Same 15-25% cost reduction.
            </p>
            
            <Link onClick={handleClickCTA} href="/#contact">
              <button className="group inline-flex items-center gap-4 px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300">
                <span className="text-lg font-light tracking-wide">Schedule Operations Assessment</span>
                <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChargeOpsContent;
