"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface TestimonialsProps {
  dict: any;
}

export default function Testimonials({ dict }: TestimonialsProps) {
  const testimonials = [
    {
      name: "Dr. Sarah Jenkins",
      role: dict.jenkinsRole,
      content: dict.jenkinsContent,
      rating: 5,
      avatar: "SJ",
    },
    {
      name: "Michael Rossi",
      role: dict.rossiRole,
      content: dict.rossiContent,
      rating: 5,
      avatar: "MR",
    },
    {
      name: "Dr. Emily Chen",
      role: dict.chenRole,
      content: dict.chenContent,
      rating: 5,
      avatar: "EC",
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {dict.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
            {dict.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="h-full border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="pt-8 px-6 pb-6 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex gap-1 mb-6 text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-slate-600 text-lg mb-8 flex-grow leading-relaxed italic text-start">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto border-t border-slate-50 pt-6">
                    <Avatar className="h-12 w-12 border-2 border-slate-100 shadow-inner">
                      <AvatarFallback className="bg-primary text-white font-bold">{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-slate-900 text-start">{testimonial.name}</h4>
                      <p className="text-xs text-slate-400 text-start font-semibold">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
