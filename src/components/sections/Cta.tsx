"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2 } from "lucide-react";

interface CtaProps {
  dict: any;
}

export default function Cta({ dict }: CtaProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden bg-slate-50 border-t border-slate-100">
      {/* Subtle background glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 md:gap-8 lg:gap-16 items-center">
            
            {/* Left Column: Heading and info */}
            <div className="md:col-span-5 space-y-6 text-start">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-slate-900">
                {dict.title}
              </h2>
              <p className="text-base md:text-lg text-slate-500 leading-relaxed">
                {dict.subtitle}
              </p>
              
              {/* Trust elements in contact area */}
              <div className="space-y-4 pt-6 border-t border-slate-200/60 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-slate-650">Response within 24 business hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-slate-650">Tailored medical workflow advice</span>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="md:col-span-7">
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-250/60 shadow-xl relative overflow-hidden">
                
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="contact-form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      {/* Name Field */}
                      <div className="space-y-2 text-start">
                        <label htmlFor="name" className="text-sm font-bold text-slate-700">
                          {dict.nameLabel}
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={dict.namePlaceholder}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-800 text-sm font-medium transition-all"
                        />
                      </div>

                      {/* Email Field */}
                      <div className="space-y-2 text-start">
                        <label htmlFor="email" className="text-sm font-bold text-slate-700">
                          {dict.emailLabel}
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={dict.emailPlaceholder}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-800 text-sm font-medium transition-all"
                        />
                      </div>

                      {/* Message Field */}
                      <div className="space-y-2 text-start">
                        <label htmlFor="message" className="text-sm font-bold text-slate-700">
                          {dict.messageLabel}
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder={dict.messagePlaceholder}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-800 text-sm font-medium transition-all resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/95 text-white font-bold h-12 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <>
                            <span>{dict.submitBtn}</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-message"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="py-10 text-center space-y-4"
                    >
                      <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 mb-2">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {dict.successMsg}
                      </h3>
                      <p className="text-sm text-slate-500 max-w-sm mx-auto">
                        Our medical practice workflow specialist will reach out to you shortly.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                        className="mt-6 border-slate-200 text-slate-650 hover:bg-slate-50 text-sm font-bold px-6 h-10 rounded-xl"
                      >
                        Send another message
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
