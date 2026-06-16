"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlayCircle, ArrowRight, CheckCircle2, Shield, Sparkles } from "lucide-react";

interface HeroProps {
  dict: any;
}

export default function Hero({ dict }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-36 overflow-hidden bg-slate-900 text-white">
      {/* Background Gradients & Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/30 via-slate-950 to-slate-950"></div>
      
      {/* Subtle Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Decorative Glows */}
      <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-secondary/15 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-200px] left-[-200px] w-[600px] h-[600px] bg-primary/25 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold shadow-inner"
            >
              <Shield className="w-4 h-4" />
              <span>GDPR & HIPAA Compliant Secure Platform</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                {dict.title.split(dict.span)[0]}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-teal-400 font-extrabold relative">
                  {dict.span}
                  <span className="absolute left-0 right-0 bottom-1 h-1.5 bg-gradient-to-r from-secondary to-teal-400 rounded-full opacity-35"></span>
                </span>
                {dict.title.split(dict.span)[1]}
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
                {dict.subtitle}
              </p>
            </motion.div>

            {/* Trust Highlights to fill white space */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 max-w-lg pt-2 border-t border-slate-800"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium text-slate-200">Zero Missed Patients</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium text-slate-200">24/7 Smart Automations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium text-slate-200">Centralized Clinic Inbox</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium text-slate-200">Instant SMS Confirmations</span>
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 text-base font-bold px-8 h-14 shadow-lg shadow-secondary/20 group">
                {dict.demoBtn}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="text-slate-900 bg-white hover:bg-slate-50 border-white text-base font-bold px-8 h-14 shadow-md">
                <PlayCircle className="mr-2 w-5 h-5 text-primary" />
                {dict.videoBtn}
              </Button>
            </motion.div>
          </div>

          {/* Right Visual / Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Dashboard Mockup Representation */}
            <div className="relative w-full max-w-md md:max-w-none aspect-[4/3] bg-slate-900/80 rounded-2xl border border-slate-700/80 shadow-2xl shadow-primary/10 overflow-hidden backdrop-blur-md">
              {/* Fake Window Header */}
              <div className="h-12 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="text-xs text-slate-500 font-semibold select-none">call360-dashboard.clinic</div>
                <div className="w-10"></div>
              </div>

              {/* Fake Dashboard Content */}
              <div className="p-4 grid grid-cols-12 gap-3 h-[calc(100%-3rem)] bg-slate-950 text-slate-200">
                {/* Sidebar (Left) */}
                <div className="col-span-3 border-r border-slate-800/80 pr-2 space-y-3 hidden sm:block">
                  <div className="h-6 bg-slate-800/60 rounded-md flex items-center px-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-secondary mr-2"></div>
                    <div className="w-12 h-2.5 bg-slate-700/80 rounded"></div>
                  </div>
                  <div className="space-y-2 pt-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className={`h-4 rounded flex items-center px-1.5 ${i === 1 ? "bg-primary/20" : ""}`}>
                        <div className={`w-2 h-2 rounded-full mr-2 ${i === 1 ? "bg-primary" : "bg-slate-700"}`}></div>
                        <div className="w-8 h-1.5 bg-slate-600 rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dashboard Main Panel */}
                <div className="col-span-12 sm:col-span-9 space-y-4">
                  {/* Header info */}
                  <div className="flex justify-between items-center bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-xs text-secondary font-bold">C3</div>
                      <div className="space-y-1">
                        <div className="w-20 h-2 bg-slate-300 rounded"></div>
                        <div className="w-12 h-1.5 bg-slate-600 rounded"></div>
                      </div>
                    </div>
                    <div className="px-2.5 py-1 bg-secondary/15 rounded text-[10px] text-secondary font-bold">Active</div>
                  </div>

                  {/* Main Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800/80 flex flex-col justify-between h-20 shadow-sm">
                      <div className="w-12 h-2 bg-slate-600 rounded"></div>
                      <div className="w-8 h-5 bg-secondary/20 rounded text-secondary flex items-center justify-center font-bold text-xs">98%</div>
                    </div>
                    <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800/80 flex flex-col justify-between h-20 shadow-sm">
                      <div className="w-16 h-2 bg-slate-600 rounded"></div>
                      <div className="w-12 h-5 bg-primary/30 rounded text-sky-400 flex items-center justify-center font-bold text-xs">24 ms</div>
                    </div>
                    <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800/80 flex flex-col justify-between h-20 shadow-sm">
                      <div className="w-14 h-2 bg-slate-600 rounded"></div>
                      <div className="w-10 h-5 bg-emerald-500/20 rounded text-emerald-400 flex items-center justify-center font-bold text-xs">320</div>
                    </div>
                  </div>

                  {/* Feed/Live calls list */}
                  <div className="bg-slate-900/80 rounded-xl border border-slate-800/80 p-3 space-y-2.5">
                    <div className="flex justify-between items-center">
                      <div className="w-24 h-2.5 bg-slate-500 rounded"></div>
                      <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
                    </div>
                    <div className="space-y-2 pt-1">
                      {[1, 2].map((i) => (
                        <div key={i} className="flex items-center justify-between p-2 rounded bg-slate-950/80 border border-slate-800/40">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-semibold">P{i}</div>
                            <div className="space-y-1">
                              <div className="w-16 h-2 bg-slate-400 rounded"></div>
                              <div className="w-10 h-1.5 bg-slate-600 rounded"></div>
                            </div>
                          </div>
                          <div className="w-8 h-3 bg-secondary/15 rounded"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Live Badge to visual impact */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-4 md:-right-6 top-1/4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 text-slate-800"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/15 rounded-full flex items-center justify-center text-secondary">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{dict.statsLabel}</p>
                  <p className="text-lg font-bold text-slate-900">{dict.statsToday}</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Live Performance Indicator */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -left-6 md:-left-8 bottom-1/4 bg-white px-4 py-3 rounded-xl shadow-xl border border-slate-100 text-slate-800 flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-ping"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-secondary absolute left-4"></span>
              <span className="text-xs font-bold text-slate-700">99.8% Call Success</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
