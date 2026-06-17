"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, ChevronRight } from "lucide-react";

interface ComparisonProps {
  dict: any;
}

export default function Comparison({ dict }: ComparisonProps) {
  return (
    <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-[-200px] top-1/4 w-[500px] h-[500px] bg-sky-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {dict.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {dict.subtitle}
          </p>
        </div>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Traditional Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 rounded-3xl border border-red-100 shadow-lg space-y-8 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-red-50 border border-red-200 rounded-full text-red-650 text-xs font-bold mb-6">
                <AlertCircle className="w-4 h-4" />
                <span>{dict.traditional}</span>
              </div>

              <div className="space-y-6">
                {dict.points.map((point: any, idx: number) => (
                  <div key={idx} className="space-y-2 pb-5 border-b border-slate-100 last:border-0 last:pb-0">
                    <p className="text-xs font-extrabold text-slate-405 uppercase tracking-wider text-start">{point.label}</p>
                    <p className="text-base text-slate-650 font-semibold text-start leading-relaxed pr-4">
                      {point.old}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-6 border-t border-slate-100 text-start text-xs font-bold text-slate-400 uppercase tracking-widest">
              Loss of efficiency & patients
            </div>
          </motion.div>

          {/* Digital Call360 Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-emerald-600 to-teal-950 text-white p-8 md:p-10 rounded-3xl border border-emerald-500/35 shadow-xl space-y-8 flex flex-col justify-between relative"
          >
            {/* Soft background glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/20 border border-emerald-400/35 rounded-full text-emerald-300 text-xs font-bold mb-6">
                <CheckCircle2 className="w-4 h-4" />
                <span>{dict.digital}</span>
              </div>

              <div className="space-y-6">
                {dict.points.map((point: any, idx: number) => (
                  <div key={idx} className="space-y-2 pb-5 border-b border-emerald-800/40 last:border-0 last:pb-0">
                    <p className="text-xs font-extrabold text-teal-300 uppercase tracking-wider text-start">{point.label}</p>
                    <p className="text-base text-emerald-50 font-semibold text-start leading-relaxed pr-4">
                      {point.new}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-emerald-800/40 text-start text-xs font-bold text-emerald-305 uppercase tracking-widest flex items-center gap-1">
              <span>99% operations streamlined</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
