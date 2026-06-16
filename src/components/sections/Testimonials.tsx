"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Sarah Jenkins",
      role: "Head of Cardiology",
      clinic: "City Central Hospital",
      content: "Call360 Clinica completely transformed how we handle patient inquiries. The centralized dashboard is a game-changer for our staff.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Rossi",
      role: "Clinic Manager",
      clinic: "Rossi Dental Center",
      content: "We've seen a 40% reduction in missed appointments since implementing their medical scheduling and automated reminders.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Dr. Emily Chen",
      role: "Clinical Psychologist",
      clinic: "Mind & Wellness Clinic",
      content: "The ability to track our social media interactions alongside phone calls gives us a complete view of our patient communications.",
      rating: 5,
      avatar: "EC"
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted by Healthcare Leaders
          </h2>
          <p className="text-lg text-slate-600">
            See what medical professionals have to say about their experience with Call360 Clinica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="pt-8 px-6 pb-6 flex flex-col h-full">
                  <div className="flex gap-1 mb-6 text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-slate-700 text-lg mb-8 flex-grow leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <Avatar className="h-12 w-12 border-2 border-slate-100">
                      <AvatarFallback className="bg-primary text-white">{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                      <p className="text-sm text-slate-500">{testimonial.role}, {testimonial.clinic}</p>
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
