"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, HeartHandshake, Compass } from "lucide-react";

interface WhyChooseUsProps {
  dict: any;
}

export default function WhyChooseUs({ dict }: WhyChooseUsProps) {
  const cards = [
    {
      title: dict.efficiencyTitle,
      description: dict.efficiencyDesc,
      icon: <TrendingUp className="w-6 h-6 text-secondary" />,
    },
    {
      title: dict.experienceTitle,
      description: dict.experienceDesc,
      icon: <HeartHandshake className="w-6 h-6 text-primary" />,
    },
    {
      title: dict.insightsTitle,
      description: dict.insightsDesc,
      icon: <Compass className="w-6 h-6 text-secondary" />,
    },
  ];

  return (
    <section id="solutions" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Visual background details to eliminate empty layout feeling */}
      <div className="absolute right-0 top-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute left-0 bottom-10 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Text & Reasons */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                {dict.title.split("Call360 Clinica")[0]}
                <span className="text-primary font-extrabold">Call360 Clinica</span>
                {dict.title.split("Call360 Clinica")[1]}
              </h2>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
                {dict.subtitle}
              </p>
            </div>
            
            <div className="space-y-6">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shadow-inner">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 text-start">
                      {card.title}
                    </h3>
                    <p className="text-slate-500 text-base leading-relaxed text-start">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Visual Instagram Embed Video */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full rounded-3xl overflow-hidden bg-slate-100 flex items-center justify-center shadow-2xl h-[550px] border border-slate-200"
            >
              <iframe
                src="https://www.instagram.com/reel/DTdArEBiL_Z/embed"
                className="w-full h-full border-0"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                allow="encrypted-media"
              ></iframe>
            </motion.div>
            {/* Absolute overlay frames to elevate looks */}
            <div className="absolute -inset-4 border border-primary/5 rounded-[2.5rem] pointer-events-none -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
