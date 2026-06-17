"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlayCircle, ArrowRight, CheckCircle2, Shield, Sparkles, X, PhoneCall, UserCheck, Headset, PhoneOff, Calendar } from "lucide-react";

interface HeroProps {
  dict: any;
}

export default function Hero({ dict }: HeroProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const orbitNodes = [
    {
      id: 0,
      label: "Doctors",
      icon: <UserCheck className="w-5 h-5" />,
      caption: "Dr. Jenkins Connected",
      color: "border-sky-100 bg-sky-50 text-sky-600",
      activeColor: "bg-primary text-white border-primary shadow-lg shadow-primary/20",
      position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
    },
    {
      id: 1,
      label: "Receptionist",
      icon: <Headset className="w-5 h-5" />,
      caption: "Active Call Queue",
      color: "border-emerald-100 bg-emerald-50 text-emerald-600",
      activeColor: "bg-secondary text-white border-secondary shadow-lg shadow-secondary/20",
      position: "top-1/2 left-full -translate-x-1/2 -translate-y-1/2",
    },
    {
      id: 2,
      label: "Scheduling",
      icon: <Calendar className="w-5 h-5" />,
      caption: "Appointment Booked!",
      color: "border-sky-100 bg-sky-50 text-sky-600",
      activeColor: "bg-primary text-white border-primary shadow-lg shadow-primary/20",
      position: "top-full left-1/2 -translate-x-1/2 -translate-y-1/2",
    },
    {
      id: 3,
      label: "Missed Calls",
      icon: <PhoneOff className="w-5 h-5" />,
      caption: "Auto Callback Triggered",
      color: "border-emerald-100 bg-emerald-50 text-emerald-600",
      activeColor: "bg-secondary text-white border-secondary shadow-lg shadow-secondary/20",
      position: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
    },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-36 overflow-hidden bg-slate-900 text-white">
      {/* Background Gradients & Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/30 via-slate-950 to-slate-950"></div>
      
      {/* Subtle Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Decorative Glows */}
      <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-secondary/15 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-200px] left-[-200px] w-[600px] h-[600px] bg-primary/25 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold shadow-inner"
            >
              <Shield className="w-4 h-4" />
              <span>{dict.tagline}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                {dict.title.split(dict.span)[0]}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-teal-400 font-extrabold relative">
                  {dict.span}
                  <span className="absolute left-0 right-0 bottom-1 h-1.5 bg-gradient-to-r from-secondary to-teal-400 rounded-full opacity-35"></span>
                </span>
                {dict.title.split(dict.span)[1]}
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
                {dict.subtitle}
              </p>
            </motion.div>

            {/* Trust Highlights to fill white space */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 max-w-lg pt-2 border-t border-slate-800"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium text-slate-200">Zero Missed Patients</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium text-slate-200">24/7 Smart Automations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium text-slate-200">Centralized Clinic Inbox</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium text-slate-200">Instant SMS Confirmations</span>
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 text-base font-bold px-8 h-14 shadow-lg shadow-secondary/20 group">
                {dict.demoBtn}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setIsVideoOpen(true)}
                className="text-slate-900 bg-white hover:bg-slate-50 border-white text-base font-bold px-8 h-14 shadow-md"
              >
                <PlayCircle className="mr-2 w-5 h-5 text-primary" />
                {dict.videoBtn}
              </Button>
            </motion.div>
          </div>

          {/* Right Visual / Orbit Visual Cluster */}
          <div className="lg:col-span-5 relative w-full h-[450px] flex items-center justify-center select-none">
            
            {/* Background dashed orbit line */}
            <div className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-slate-700/40 pointer-events-none"></div>
            
            {/* Outer rotating decorative dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-secondary/80 rounded-full shadow-lg shadow-secondary/50"></div>
            </motion.div>

            {/* Central Call360 Hub */}
            <div className="relative w-28 h-28 bg-white border border-slate-100 rounded-full flex items-center justify-center shadow-xl z-20">
              <div className="absolute -inset-3 rounded-full border border-secondary/20 animate-ping opacity-60 pointer-events-none"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-extrabold text-lg shadow-inner">
                Call360
              </div>
            </div>

            {/* Connecting flow lines and traveling dot indicators */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Vertical line segment */}
              <div className="absolute top-[75px] bottom-[75px] w-0.5 bg-slate-800/60"></div>
              {/* Horizontal line segment */}
              <div className="absolute left-[75px] right-[75px] h-0.5 bg-slate-800/60"></div>

              {/* Dynamic traveling data packet dots */}
              {activeNode === 0 && (
                <motion.div
                  key="dot-0"
                  initial={{ y: 0 }}
                  animate={{ y: -150 }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeOut" }}
                  className="absolute w-3 h-3 rounded-full bg-primary z-10 shadow-md shadow-primary"
                />
              )}
              {activeNode === 1 && (
                <motion.div
                  key="dot-1"
                  initial={{ x: 0 }}
                  animate={{ x: 150 }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeOut" }}
                  className="absolute w-3 h-3 rounded-full bg-secondary z-10 shadow-md shadow-secondary"
                />
              )}
              {activeNode === 2 && (
                <motion.div
                  key="dot-2"
                  initial={{ y: 0 }}
                  animate={{ y: 150 }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeOut" }}
                  className="absolute w-3 h-3 rounded-full bg-primary z-10 shadow-md shadow-primary"
                />
              )}
              {activeNode === 3 && (
                <motion.div
                  key="dot-3"
                  initial={{ x: 0 }}
                  animate={{ x: -150 }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeOut" }}
                  className="absolute w-3 h-3 rounded-full bg-secondary z-10 shadow-md shadow-secondary"
                />
              )}
            </div>

            {/* Orbiting nodes */}
            {orbitNodes.map((node) => {
              const isActive = activeNode === node.id;
              return (
                <div key={node.id} className={`absolute ${node.position} z-20`}>
                  <motion.div
                    animate={isActive ? { scale: 1.15 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-colors duration-300 shadow-md ${
                      isActive ? node.activeColor : node.color + " border-slate-100 bg-white"
                    }`}
                  >
                    {node.icon}
                  </motion.div>
                  
                  {/* Floating description tooltips */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10 }}
                        className="absolute whitespace-nowrap bg-slate-900 border border-slate-800 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-lg top-16 left-1/2 -translate-x-1/2 z-30"
                      >
                        <div className="absolute w-2 h-2 bg-slate-900 border-l border-t border-slate-800 rotate-45 -top-1 left-1/2 -translate-x-1/2"></div>
                        {node.caption}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden max-w-4xl w-full aspect-video shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 p-2.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-full text-white/80 hover:text-white transition-all shadow-md cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Content */}
              <iframe
                src="https://www.instagram.com/reel/DTdArEBiL_Z/embed"
                className="w-full h-full border-0"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                allow="encrypted-media; autoplay"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
