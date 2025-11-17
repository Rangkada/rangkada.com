'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import ShinyButton from "@/components/magicui/shiny-button";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { Ripple } from "@/components/magicui/ripple";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { 
  IconBolt, 
  IconChartLine, 
  IconCar, 
  IconDatabase,
  IconLeaf,
  IconTrendingUp
} from "@tabler/icons-react";

const HomeHero = () => {
  const [activePhase, setActivePhase] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleClickGetStarted = () => {
    sendGAEvent('event', 'button_click', { value: 'Home - Get Started' }); 
  }

  const handleClickLearnMore = () => {
    sendGAEvent('event', 'button_click', { value: 'Home - Learn More' });
  }

  const benefits = [
    { 
      icon: IconChartLine, 
      title: "40% Cost Reduction", 
      description: "Slash delivery costs",
      color: "from-ev-electric-500 to-ev-cyber-500"
    },
    { 
      icon: IconLeaf, 
      title: "Zero Emissions", 
      description: "Cleaner operations",
      color: "from-ev-cyber-500 to-ev-power-500"
    },
    { 
      icon: IconTrendingUp, 
      title: "Pay-As-You-Save", 
      description: "No upfront capital",
      color: "from-ev-power-500 to-ev-electric-500"
    }
  ];

  const metrics = [
    { label: "Cost Savings", value: "40% Less", icon: IconChartLine },
    { label: "Capital Required", value: "₱0 Upfront", icon: IconDatabase },
    { label: "Vehicle Types", value: "2W & 3W EVs", icon: IconCar },
  ];

  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black dark:from-gray-950 dark:via-gray-900 dark:to-black light:from-gray-50 light:via-white light:to-gray-100 pt-[120px] pb-16 md:pt-[150px] md:pb-20 lg:pt-[180px] lg:pb-28"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 z-0">
        <AnimatedGridPattern
          numSquares={60}
          maxOpacity={0.2}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%]"
          )}
        />
      </div>

      {/* Electric Energy Ripples - Top Right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-40">
        <Ripple numCircles={4} />
      </div>

      {/* Electric Energy Ripples - Bottom Left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-30">
        <Ripple numCircles={3} />
      </div>

      {/* Radial Gradient Overlays for Depth */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-gradient-radial from-emerald-500/20 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/15 via-transparent to-transparent blur-3xl" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="wow fadeInUp" data-wow-delay=".2s">
            {/* Announcement Badge */}
            <Link href="#contact" className="inline-block mb-6">
              <AnimatedGradientText>
                <IconBolt className="h-4 w-4 text-emerald-400" />
                <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-600" />
                <span
                  className={cn(
                    "inline animate-gradient bg-gradient-to-r from-ev-electric-400 via-ev-cyber-400 to-ev-power-400 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent"
                  )}
                >
                  Alpha Partner Program Now Open
                </span>
              </AnimatedGradientText>
            </Link>

            {/* Main Headline */}
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white dark:text-white light:text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl drop-shadow-2xl">
              Stop Fueling Your Fleet.
              <span className="bg-gradient-to-r from-ev-electric-400 via-ev-cyber-400 to-ev-power-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                {" "}Start Funding Your Future.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mb-8 text-base leading-relaxed text-gray-300 dark:text-gray-300 light:text-gray-600 sm:text-lg md:text-xl max-w-[600px]">
              Join the Alpha Partner program and slash your delivery costs by 40% with electric vehicles—no upfront capital required. Lead the revolution, not the fuel queue.
            </p>

            {/* Key Metrics Pills */}
            <div className="mb-8 flex flex-wrap gap-3">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-2 rounded-full border border-ev-electric-500/30 dark:border-ev-electric-500/30 light:border-ev-electric-500/50 bg-gray-900/60 dark:bg-gray-900/60 light:bg-white/80 px-4 py-2 backdrop-blur-sm shadow-lg shadow-ev-electric-500/10"
                  >
                    <Icon className="h-4 w-4 text-ev-electric-400" />
                    <span className="text-xs font-medium text-gray-200 dark:text-gray-200 light:text-gray-700">
                      {metric.value}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link onClick={handleClickGetStarted} href="#contact">
                <ShinyButton 
                  text="Apply to Alpha Partner"
                  className="rounded-lg bg-gradient-to-r from-ev-electric-500 to-ev-cyber-500 px-8 py-3 text-base font-semibold text-white shadow-2xl shadow-ev-electric-500/30 hover:shadow-ev-electric-500/50 transition-all duration-300"
                />
              </Link>
              <Link
                onClick={handleClickLearnMore}
                href="#benefits"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-700 dark:border-gray-700 light:border-gray-300 bg-gray-900/50 dark:bg-gray-900/50 light:bg-white/80 px-8 py-3 text-base font-semibold text-white dark:text-white light:text-gray-900 transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-800 light:hover:bg-gray-100 hover:border-ev-electric-500/50 backdrop-blur-sm"
              >
                Calculate Savings
                <IconChartLine className="h-4 w-4" />
              </Link>
            </div>

            {/* Pay-As-You-Save Highlight */}
            <div className="rounded-2xl border border-ev-electric-500/30 dark:border-ev-electric-500/30 light:border-ev-electric-500/50 bg-gradient-to-br from-gray-900/80 to-gray-800/80 dark:from-gray-900/80 dark:to-gray-800/80 light:from-white light:to-gray-50 p-6 backdrop-blur-sm shadow-2xl shadow-ev-electric-500/10">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-ev-electric-500 to-ev-cyber-500 flex-shrink-0 shadow-lg shadow-ev-electric-500/50">
                  <IconLeaf className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-white dark:text-white light:text-gray-900">
                    Pay-As-You-Save Model
                  </h3>
                  <p className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                    Your fuel savings become your vehicle payment. No cash outlay, just immediate ROI from day one of operations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            {/* Customer Benefits Visualization */}
            <div className="relative mx-auto max-w-[500px]">
              {/* Cost Savings Comparison Circle */}
              <div className="relative mx-auto mb-12 flex h-56 w-56 items-center justify-center">
                {/* Rotating Cost Savings Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-ev-electric-500/40 animate-[spin_20s_linear_infinite] shadow-[0_0_30px_rgba(16,185,129,0.3)]" />
                <div className="absolute inset-4 rounded-full border-2 border-dashed border-ev-cyber-500/40 animate-[spin_15s_linear_infinite_reverse] shadow-[0_0_25px_rgba(6,182,212,0.3)]" />
                
                {/* Center - Big Savings Number */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="text-6xl font-bold text-white dark:text-white light:text-gray-900 drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]">
                    40%
                  </div>
                  <div className="text-sm font-semibold text-ev-electric-400 uppercase tracking-wider">
                    Cost Savings
                  </div>
                </div>

                {/* Orbiting Benefit Icons */}
                <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-ev-electric-500 shadow-[0_0_20px_rgba(52,211,153,0.8)]">
                    <IconLeaf className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-ev-cyber-500 shadow-[0_0_20px_rgba(34,211,238,0.8)]">
                    <IconCar className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="absolute inset-0 animate-[spin_16s_linear_infinite]">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-ev-power-500 shadow-[0_0_20px_rgba(96,165,250,0.8)]">
                    <IconBolt className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Three Benefit Cards */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  const isActive = activePhase === index;
                  
                  return (
                    <div
                      key={index}
                      className={cn(
                        "relative overflow-hidden rounded-2xl border transition-all duration-500 backdrop-blur-sm",
                        isActive
                          ? "border-ev-electric-500/50 dark:border-ev-electric-500/50 light:border-ev-electric-500/70 bg-gradient-to-r from-ev-electric-500/20 to-ev-cyber-500/20 dark:from-ev-electric-500/20 dark:to-ev-cyber-500/20 light:from-ev-electric-500/10 light:to-ev-cyber-500/10 shadow-2xl shadow-ev-electric-500/20 scale-105"
                          : "border-gray-700/50 dark:border-gray-700/50 light:border-gray-300/50 bg-gray-900/40 dark:bg-gray-900/40 light:bg-white/60 scale-100"
                      )}
                    >
                      <div className="relative z-10 flex items-center gap-4 p-4">
                        {/* Benefit Icon */}
                        <div className={cn(
                          "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl font-bold transition-all duration-500",
                          isActive
                            ? `bg-gradient-to-br ${benefit.color} text-white shadow-lg shadow-ev-electric-500/50`
                            : "bg-gray-800 dark:bg-gray-800 light:bg-gray-200 text-gray-500 dark:text-gray-500 light:text-gray-400"
                        )}>
                          <Icon className="h-6 w-6" />
                        </div>

                        {/* Benefit Info */}
                        <div className="flex-1">
                          <div className={cn(
                            "font-bold transition-colors duration-500 text-lg",
                            isActive 
                              ? "text-white dark:text-white light:text-gray-900" 
                              : "text-gray-400 dark:text-gray-400 light:text-gray-600"
                          )}>
                            {benefit.title}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-500 light:text-gray-600">
                            {benefit.description}
                          </div>
                        </div>

                        {/* Active Indicator */}
                        {isActive && (
                          <div className="h-2 w-2 rounded-full bg-ev-electric-400 animate-pulse shadow-lg shadow-ev-electric-500/50" />
                        )}
                      </div>

                      {/* Progress Bar with Glow */}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden bg-gray-800">
                          <div 
                            className={cn(
                              "h-full animate-[slideProgress_3s_ease-in-out]",
                              `bg-gradient-to-r ${benefit.color} shadow-[0_0_10px_currentColor]`
                            )}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Alpha Partner Badge */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-ev-electric-500/30 dark:border-ev-electric-500/30 light:border-ev-electric-500/50 bg-gray-900/60 dark:bg-gray-900/60 light:bg-white/80 px-4 py-2 backdrop-blur-sm shadow-lg shadow-ev-electric-500/10">
                  <div className="h-2 w-2 rounded-full bg-ev-electric-400 animate-pulse shadow-lg shadow-ev-electric-500/50" />
                  <span className="text-xs font-medium text-gray-300 dark:text-gray-300 light:text-gray-700">
                    Limited Alpha Partner Slots
                  </span>
                  <IconBolt className="h-4 w-4 text-ev-electric-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <style jsx>{`
        @keyframes slideProgress {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HomeHero;
