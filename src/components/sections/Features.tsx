"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Phone, BarChart3, Users, Calendar, MessageCircle, Database } from "lucide-react";

interface FeaturesProps {
  dict: any;
}

export default function Features({ dict }: FeaturesProps) {
  const features = [
    {
      title: dict.routingTitle,
      icon: <Phone className="w-6 h-6 text-primary" />,
      description: dict.routingDesc,
    },
    {
      title: dict.analyticsTitle,
      icon: <BarChart3 className="w-6 h-6 text-secondary" />,
      description: dict.analyticsDesc,
    },
    {
      title: dict.mgmtTitle,
      icon: <Users className="w-6 h-6 text-primary" />,
      description: dict.mgmtDesc,
    },
    {
      title: dict.schedulingTitle,
      icon: <Calendar className="w-6 h-6 text-secondary" />,
      description: dict.schedulingDesc,
    },
    {
      title: dict.socialTitle,
      icon: <MessageCircle className="w-6 h-6 text-primary" />,
      description: dict.socialDesc,
    },
    {
      title: dict.centralizedTitle,
      icon: <Database className="w-6 h-6 text-secondary" />,
      description: dict.centralizedDesc,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="features" className="py-20 md:py-32 bg-white relative">
      {/* Background soft glow to eliminate white space emptiness */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {dict.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {dict.subtitle}
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
              <Card className="h-full border border-slate-100/80 shadow-md hover:shadow-xl hover:border-primary/20 transition-all duration-300 group cursor-pointer bg-white">
                <CardHeader className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-sky-50 transition-all duration-300 shadow-sm">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base text-slate-500 leading-relaxed text-start">
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
