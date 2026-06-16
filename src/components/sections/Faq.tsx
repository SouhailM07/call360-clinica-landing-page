"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqProps {
  dict: any;
}

export default function Faq({ dict }: FaqProps) {
  const faqs = [
    {
      question: dict.q1,
      answer: dict.a1,
    },
    {
      question: dict.q2,
      answer: dict.a2,
    },
    {
      question: dict.q3,
      answer: dict.a3,
    },
    {
      question: dict.q4,
      answer: dict.a4,
    },
    {
      question: dict.q5,
      answer: dict.a5,
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight text-start">
                {dict.title}
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed text-start">
                {dict.subtitle}
              </p>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100/80 shadow-sm text-start">
                <h4 className="font-bold text-slate-900 mb-2">{dict.stillQuestions}</h4>
                <p className="text-sm text-slate-500 mb-4 font-semibold">{dict.readyHelp}</p>
                <a href="#contact" className="text-primary font-bold hover:underline inline-flex items-center gap-1.5 hover:text-secondary transition-colors">
                  {dict.contactSupport} &rarr;
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Accordion className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-slate-100 rounded-xl px-6 py-2 shadow-sm data-[state=open]:border-primary/30 data-[state=open]:shadow-md transition-all">
                    <AccordionTrigger className="text-start font-bold text-base md:text-lg hover:no-underline hover:text-primary py-4 transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-500 text-sm md:text-base leading-relaxed pb-4 text-start font-semibold">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
