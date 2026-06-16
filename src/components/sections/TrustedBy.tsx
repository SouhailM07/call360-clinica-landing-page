"use client";

import { motion } from "framer-motion";
import { Heart, Activity, ShieldCheck, Award, Smile, Thermometer } from "lucide-react";

interface TrustedByProps {
  dict: any;
}

export default function TrustedBy({ dict }: TrustedByProps) {
  const items = [
    { name: "Clinics", icon: <Heart className="w-5 h-5 text-teal-600" /> },
    { name: "Hospitals", icon: <Activity className="w-5 h-5 text-sky-600" /> },
    { name: "Dentists", icon: <Smile className="w-5 h-5 text-emerald-600" /> },
    { name: "Diagnostics", icon: <ShieldCheck className="w-5 h-5 text-indigo-600" /> },
    { name: "Laboratories", icon: <Award className="w-5 h-5 text-teal-600" /> },
    { name: "Pharmacies", icon: <Thermometer className="w-5 h-5 text-cyan-600" /> },
  ];

  return (
    <section className="py-14 bg-slate-50 border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">
          {dict.title}
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 lg:gap-16">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-center gap-2.5 px-4 py-2 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 cursor-default group"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <span className="text-sm md:text-base font-bold text-slate-600 group-hover:text-primary transition-colors">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
