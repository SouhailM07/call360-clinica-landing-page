"use client";

import { motion } from "framer-motion";

export default function Benefits() {
  const organizations = [
    "Clinics",
    "Hospitals",
    "Dental Practices",
    "Psychology Centers",
    "Physiotherapy Centers",
    "Laboratories",
    "Pharmacies"
  ];

  return (
    <section id="benefits" className="py-20 md:py-32 bg-primary text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/30 blur-3xl rounded-l-full transform translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Built for Every Healthcare Organization
          </h2>
          <p className="text-lg text-blue-100">
            No matter the size or specialty, our platform adapts to your unique workflow requirements.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
          {organizations.map((org, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-semibold text-lg cursor-pointer hover:bg-white hover:text-primary transition-all duration-300"
            >
              {org}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
