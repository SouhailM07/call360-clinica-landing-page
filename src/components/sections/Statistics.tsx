"use client";

import { motion } from "framer-motion";
import { PhoneCall, CalendarRange, Clock, Sparkles } from "lucide-react";

interface StatisticsProps {
  dict: any;
}

export default function Statistics({ dict }: StatisticsProps) {
  const stats = [
    {
      value: dict.stat1Val,
      label: dict.stat1Lbl,
      icon: <PhoneCall className="w-6 h-6 text-primary" />,
      color: "border-sky-100 bg-sky-50/30 text-slate-900",
    },
    {
      value: dict.stat2Val,
      label: dict.stat2Lbl,
      icon: <CalendarRange className="w-6 h-6 text-secondary" />,
      color: "border-emerald-100 bg-emerald-50/30 text-slate-900",
    },
    {
      value: dict.stat3Val,
      label: dict.stat3Lbl,
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      color: "border-teal-100 bg-teal-50/30 text-slate-900",
    },
    {
      value: dict.stat4Val,
      label: dict.stat4Lbl,
      icon: <Clock className="w-6 h-6 text-secondary" />,
      color: "border-emerald-100 bg-emerald-50/30 text-slate-900",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {dict.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {dict.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`p-8 rounded-2xl border ${stat.color} shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between`}
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-6">
                {stat.icon}
              </div>
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 text-start">
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-slate-500 text-start uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
