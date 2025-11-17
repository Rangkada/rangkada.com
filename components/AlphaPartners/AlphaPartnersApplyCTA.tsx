"use client";

import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import { Clock, Users, Zap } from "lucide-react";
import { IconArrowRight } from "@tabler/icons-react";

const AlphaPartnersApplyCTA = () => {
  const handleClickApply = () => {
    sendGAEvent('event', 'button_click', { value: 'Alpha Partners - Apply for Pilot' }); 
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 dark:from-primary/90 dark:to-primary/90 py-20 md:py-28">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />
        </div>
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-gray-300 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-12">
              Ready to lead<br />the revolution?
            </h2>
            <p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed mb-16">
              Join the exclusive Alpha Partner program and be among the first to revolutionize your operations with zero upfront costs and immediate savings.
            </p>

            {/* Key Benefits */}
            <div className="mb-10 grid gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center gap-2 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <Users className="h-8 w-8 text-white" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">20</div>
                  <div className="text-sm text-white/80">Spots Only</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <Zap className="h-8 w-8 text-white" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50%</div>
                  <div className="text-sm text-white/80">Cost Savings</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <Clock className="h-8 w-8 text-white" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">Q1 2026</div>
                  <div className="text-sm text-white/80">Start Date</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link 
                onClick={handleClickApply} 
                href="/alpha-partners/apply"
                className="group inline-flex items-center gap-4 text-white hover:text-gray-300 transition-all duration-300 cursor-pointer"
              >
                <span className="text-lg md:text-xl font-light tracking-wide">🔥 Apply for the Program</span>
                <div className="flex items-center justify-center w-14 h-14 rounded-full border border-white group-hover:scale-110 transition-transform duration-300">
                  <IconArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
  );
};

export default AlphaPartnersApplyCTA;
