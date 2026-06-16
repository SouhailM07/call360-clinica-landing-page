"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  const faqs = [
    {
      question: "Can Call360 Clinica manage appointments?",
      answer: "Yes, our platform includes a robust medical scheduling system that allows you to easily book, reschedule, and manage patient appointments across multiple calendars and doctors.",
    },
    {
      question: "Does the platform support multiple doctors?",
      answer: "Absolutely. You can manage schedules, patient assignments, and specific communication channels for any number of doctors within your clinic or hospital.",
    },
    {
      question: "Can I monitor team performance?",
      answer: "Yes, our advanced analytics dashboard provides real-time insights into call resolution times, appointment conversion rates, and overall team efficiency.",
    },
    {
      question: "Can social media interactions be tracked?",
      answer: "Yes, Call360 Clinica centralizes messages and inquiries from various social media platforms into a single unified inbox, ensuring no patient query is missed.",
    },
    {
      question: "Is the platform suitable for dental clinics?",
      answer: "Yes, the platform is highly adaptable and is currently used by dental centers, hospitals, psychologists, physiotherapists, and pharmacies.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Frequently Asked <span className="text-secondary">Questions</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Find answers to common questions about Call360 Clinica and how it can transform your healthcare organization's communication.
              </p>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="font-semibold text-slate-900 mb-2">Still have questions?</h4>
                <p className="text-slate-600 mb-4">Our team is ready to help you find the right solution.</p>
                <a href="#contact" className="text-primary font-semibold hover:underline">
                  Contact Support &rarr;
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
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-slate-200 rounded-xl px-6 py-2 shadow-sm data-[state=open]:border-primary/30 data-[state=open]:shadow-md transition-all">
                    <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline hover:text-primary py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 text-base leading-relaxed pb-4">
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
