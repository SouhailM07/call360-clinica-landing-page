"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      title: "Increase Efficiency",
      description: "Reduce administrative work and improve productivity across your entire team.",
    },
    {
      title: "Better Patient Experience",
      description: "Deliver faster and more professional communication to build lasting trust.",
    },
    {
      title: "Real-Time Insights",
      description: "Monitor calls and team performance instantly with dynamic dashboards.",
    },
  ];

  return (
    <section id="solutions" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why Choose <span className="text-primary">Call360 Clinica</span>?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We empower medical teams to focus on what matters most: patient care. By automating repetitive tasks and organizing communication, Call360 Clinica acts as the backbone of your digital transformation.
            </p>
            
            <div className="space-y-6">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-slate-600">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-indigo-900 p-8 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-[url('https://compusave.dz/build/assets/pattern-bg.svg')] opacity-10 bg-cover"></div>
              
              {/* Abstract interface element */}
              <div className="relative w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
                <div className="flex justify-between items-center mb-8">
                  <div className="w-1/2 h-4 bg-white/20 rounded"></div>
                  <div className="w-10 h-10 rounded-full bg-secondary/80"></div>
                </div>
                <div className="space-y-4">
                  <div className="w-full h-3 bg-white/10 rounded"></div>
                  <div className="w-4/5 h-3 bg-white/10 rounded"></div>
                  <div className="w-full h-3 bg-white/10 rounded"></div>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="h-20 bg-white/5 rounded-xl border border-white/10 p-3">
                     <div className="w-8 h-8 rounded-lg bg-secondary/50 mb-2"></div>
                     <div className="w-1/2 h-2 bg-white/20 rounded"></div>
                  </div>
                  <div className="h-20 bg-white/5 rounded-xl border border-white/10 p-3">
                     <div className="w-8 h-8 rounded-lg bg-primary/50 mb-2"></div>
                     <div className="w-1/2 h-2 bg-white/20 rounded"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
