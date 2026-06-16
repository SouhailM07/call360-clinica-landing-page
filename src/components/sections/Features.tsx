"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Phone, BarChart3, Users, Calendar, MessageCircle, Database } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Call Routing and Tracking",
      icon: <Phone className="w-6 h-6 text-primary" />,
      description: "Manage and monitor all patient calls.",
    },
    {
      title: "Analytics and KPIs",
      icon: <BarChart3 className="w-6 h-6 text-secondary" />,
      description: "Track performance with powerful statistics.",
    },
    {
      title: "Doctors and Patients Management",
      icon: <Users className="w-6 h-6 text-primary" />,
      description: "Organize healthcare staff and patient records.",
    },
    {
      title: "Medical Scheduling",
      icon: <Calendar className="w-6 h-6 text-secondary" />,
      description: "Manage appointments efficiently.",
    },
    {
      title: "Social Media Communication",
      icon: <MessageCircle className="w-6 h-6 text-primary" />,
      description: "Handle interactions across social platforms.",
    },
    {
      title: "Centralized Information",
      icon: <Database className="w-6 h-6 text-secondary" />,
      description: "Bring all communication and data together.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything you need to run your clinic smoothly
          </h2>
          <p className="text-lg text-slate-600">
            A comprehensive suite of tools designed specifically for modern healthcare communication.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-base text-slate-500">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
