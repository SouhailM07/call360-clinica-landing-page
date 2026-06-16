"use client";

import { motion } from "framer-motion";

export default function DashboardShowcase() {
  return (
    <section className="py-20 md:py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Powerful Analytics Dashboard
          </h2>
          <p className="text-lg text-slate-600">
            Visualize your clinic's performance through intuitive metrics, charts, and actionable insights.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto mt-12">
          {/* Main Dashboard Image/Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden z-10"
          >
            {/* Header */}
            <div className="h-14 border-b border-slate-100 bg-slate-50/50 flex items-center px-6 justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
              </div>
              <div className="w-32 h-6 bg-slate-200 rounded-md"></div>
            </div>
            
            {/* Body */}
            <div className="p-8 grid md:grid-cols-4 gap-6 bg-slate-50/30">
              {/* Sidebar */}
              <div className="hidden md:flex flex-col gap-4 col-span-1 border-r border-slate-100 pr-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={`h-10 rounded-lg ${i === 1 ? 'bg-primary/10 text-primary' : 'bg-transparent'} flex items-center px-4`}>
                    <div className={`w-full h-2 rounded ${i === 1 ? 'bg-primary/50' : 'bg-slate-200'}`}></div>
                  </div>
                ))}
              </div>
              {/* Content */}
              <div className="col-span-3 space-y-6">
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-28 bg-white rounded-xl border border-slate-100 shadow-sm p-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 mb-4"></div>
                      <div className="w-16 h-3 bg-slate-200 rounded mb-2"></div>
                      <div className="w-24 h-5 bg-slate-800 rounded"></div>
                    </div>
                  ))}
                </div>
                {/* Chart Area */}
                <div className="h-64 bg-white rounded-xl border border-slate-100 shadow-sm p-6 flex flex-col justify-between">
                  <div className="w-32 h-4 bg-slate-200 rounded"></div>
                  <div className="flex items-end gap-2 h-40">
                    {[40, 70, 45, 90, 65, 85, 100, 60, 50].map((h, i) => (
                      <div key={i} className="flex-1 bg-primary/20 rounded-t-sm hover:bg-primary transition-colors" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Elements (Parallax effect) */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute -left-6 md:-left-12 bottom-12 z-20 bg-white rounded-xl shadow-xl border border-slate-100 p-5 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-lg">
                +42%
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Patient Response</p>
                <p className="text-xs text-slate-500">Compared to last month</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -right-6 md:-right-12 top-1/4 z-20 bg-white rounded-xl shadow-xl border border-slate-100 p-5 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                98%
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Call Resolution</p>
                <p className="text-xs text-slate-500">First contact resolution</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
