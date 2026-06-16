"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-primary text-white">
      {/* Background Shapes */}
      <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-secondary/30 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-blue-600/40 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Transform the Way You Manage Patient Relationships
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Empower your medical teams with a centralized communication platform and step into the future of healthcare.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 text-lg px-8 h-14 group">
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-slate-900 bg-white hover:bg-slate-100 border-white text-lg px-8 h-14">
              Talk to Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
