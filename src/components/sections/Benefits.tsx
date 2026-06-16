"use client";

import { motion } from "framer-motion";

interface BenefitsProps {
  dict: any;
}

export default function Benefits({ dict }: BenefitsProps) {
  const organizations = [
    dict.organizations.clinics,
    dict.organizations.hospitals,
    dict.organizations.dentalPractices,
    dict.organizations.psychologyCenters,
    dict.organizations.physiotherapyCenters,
    dict.organizations.laboratories,
    dict.organizations.pharmacies,
  ];

  return (
    <section id="benefits" className="py-20 md:py-32 bg-slate-900 text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-slate-950 to-slate-950 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/10 blur-3xl rounded-l-full transform translate-x-1/3 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            {dict.title}
          </h2>
          <p className="text-lg md:text-xl text-blue-200">
            {dict.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
          {organizations.map((org, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10 hover:border-secondary/50 rounded-full font-bold text-base md:text-lg cursor-pointer hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-md shadow-black/10"
            >
              {org}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
