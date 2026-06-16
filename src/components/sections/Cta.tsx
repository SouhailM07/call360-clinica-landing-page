"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CtaProps {
  dict: any;
}

export default function Cta({ dict }: CtaProps) {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-primary text-white">
      {/* Background Shapes */}
      <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            {dict.title}
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            {dict.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 text-base font-bold px-8 h-14 shadow-lg shadow-secondary/20 group">
              {dict.demoBtn}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="text-slate-900 bg-white hover:bg-slate-50 border-white text-base font-bold px-8 h-14 shadow-md">
              {dict.salesBtn}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
