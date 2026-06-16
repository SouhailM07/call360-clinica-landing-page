"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlayCircle, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-900 text-white">
      {/* Background Gradient similar to compusave */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/80 via-slate-900 to-slate-950"></div>
      
      {/* Medical Abstract Shapes (Subtle) */}
      <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-[-200px] w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Modernize Patient <span className="text-secondary">Communication</span> and Clinic Management
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                Centralize calls, appointments, doctors, patients and social interactions inside one intelligent, enterprise-grade platform.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 text-lg px-8 h-14 group">
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-slate-800 bg-white hover:bg-slate-100 border-white text-lg px-8 h-14">
                <PlayCircle className="mr-2 w-5 h-5" />
                Watch Video
              </Button>
            </motion.div>
          </div>

          {/* Right Visual / Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:h-[600px] flex items-center justify-center perspective-1000"
          >
            {/* Dashboard Mockup Representation */}
            <div className="relative w-full aspect-video md:aspect-[4/3] bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden transform rotate-y-[-5deg] rotate-x-[5deg]">
              {/* Header */}
              <div className="h-12 bg-slate-900 border-b border-slate-700 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              {/* Fake Dashboard Content */}
              <div className="p-6 grid grid-cols-3 gap-4 h-full bg-slate-50 text-slate-800">
                <div className="col-span-2 space-y-4">
                  <div className="h-32 bg-white rounded-xl border shadow-sm p-4 flex flex-col justify-between">
                    <div className="w-32 h-4 bg-slate-200 rounded"></div>
                    <div className="w-full h-16 bg-blue-50 rounded-lg"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-white rounded-xl border shadow-sm p-4">
                      <div className="w-20 h-4 bg-slate-200 rounded mb-2"></div>
                      <div className="w-12 h-8 bg-primary/20 rounded"></div>
                    </div>
                    <div className="h-24 bg-white rounded-xl border shadow-sm p-4">
                      <div className="w-24 h-4 bg-slate-200 rounded mb-2"></div>
                      <div className="w-16 h-8 bg-secondary/20 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 space-y-4">
                  <div className="h-full bg-white rounded-xl border shadow-sm p-4">
                    <div className="w-24 h-4 bg-slate-200 rounded mb-4"></div>
                    <div className="space-y-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                          <div className="flex-1 space-y-2">
                            <div className="w-full h-2 bg-slate-200 rounded"></div>
                            <div className="w-2/3 h-2 bg-slate-100 rounded"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-4 md:-right-8 top-1/4 bg-white p-4 rounded-xl shadow-xl border border-slate-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Appointments</p>
                  <p className="text-xl font-bold text-slate-800">+124 Today</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
