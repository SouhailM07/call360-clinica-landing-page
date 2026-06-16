"use client";

import { motion } from "framer-motion";

export default function TrustedBy() {
  const items = [
    "Clinics",
    "Hospitals",
    "Dental Centers",
    "Psychologists",
    "Physiotherapists",
    "Laboratories",
  ];

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
          Designed for Healthcare Professionals
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-lg md:text-xl font-bold text-slate-400 hover:text-primary transition-colors cursor-default"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
