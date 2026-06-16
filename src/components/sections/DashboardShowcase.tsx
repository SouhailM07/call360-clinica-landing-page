"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Check, Activity, Calendar, Users, PhoneCall, BarChart3, Database } from "lucide-react";

interface DashboardShowcaseProps {
  dict: any;
}

export default function DashboardShowcase({ dict }: DashboardShowcaseProps) {
  const [activeTab, setActiveTab] = useState<"doctor" | "receptionist" | "admin">("doctor");

  const tabs = [
    {
      id: "doctor" as const,
      label: dict.doctorDashboard,
      points: dict.doctorPoints,
      color: "bg-teal-500",
      textColor: "text-teal-600",
      borderColor: "border-teal-200",
      accentBg: "bg-teal-50/50",
      icon: <Activity className="w-5 h-5" />,
    },
    {
      id: "receptionist" as const,
      label: dict.receptionistDashboard,
      points: dict.receptionistPoints,
      color: "bg-primary",
      textColor: "text-primary",
      borderColor: "border-sky-200",
      accentBg: "bg-sky-50/50",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      id: "admin" as const,
      label: dict.adminDashboard,
      points: dict.adminPoints,
      color: "bg-secondary",
      textColor: "text-secondary",
      borderColor: "border-emerald-200",
      accentBg: "bg-emerald-50/50",
      icon: <Users className="w-5 h-5" />,
    },
  ];

  const currentTabInfo = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute left-[-200px] top-1/4 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {dict.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {dict.subtitle}
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-3xl mx-auto mb-12 p-2 bg-slate-50 border border-slate-100 rounded-2xl shadow-inner">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 flex-1 ${
                  isActive
                    ? "bg-white text-slate-900 shadow-md border border-slate-100"
                    : "text-slate-500 hover:text-slate-800 hover:bg-white/40"
                }`}
              >
                <span className={isActive ? tab.textColor : "text-slate-400"}>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Panel */}
        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-center">
          {/* Left panel: Info & Points list */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-start">
              {currentTabInfo.label}
            </h3>
            
            <div className="space-y-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-start">{dict.featuresLabel}</p>
              <div className="space-y-3.5">
                {currentTabInfo.points.map((point: string, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="flex items-start gap-3 p-3 bg-slate-50/50 rounded-xl border border-slate-100/50 hover:border-slate-200 transition-colors"
                  >
                    <div className={`mt-0.5 p-1 rounded-full ${currentTabInfo.accentBg} ${currentTabInfo.textColor}`}>
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm md:text-base font-semibold text-slate-600 leading-normal text-start">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel: Graphic representation of dashboard */}
          <div className="lg:col-span-7">
            <div className="relative p-2 bg-slate-900/5 rounded-3xl border border-slate-200/50 shadow-inner">
              <div className="relative w-full aspect-[4/3] bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden">
                {/* Dashboard mock header */}
                <div className="h-11 border-b border-slate-100 bg-slate-50/80 flex items-center px-4 justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-[10px] text-slate-400 font-bold select-none tracking-wider">SECURE PLATFORM</div>
                  <div className="w-12"></div>
                </div>

                {/* Dashboard mock body - Dynamic content based on tab */}
                <div className="p-5 h-[calc(100%-2.75rem)] bg-slate-50/20 text-slate-800">
                  <AnimatePresence mode="wait">
                    {activeTab === "doctor" && (
                      <motion.div
                        key="doctor"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4 h-full"
                      >
                        {/* Top bar with summary card */}
                        <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 font-bold">Dr</div>
                            <div className="space-y-1">
                              <p className="text-sm font-bold text-slate-800 text-start">Dr. Sarah Jenkins</p>
                              <p className="text-[10px] text-slate-400 text-start">Cardiology Clinic</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xs font-bold text-teal-600">8 Patients</p>
                            <p className="text-[10px] text-slate-400">Remaining today</p>
                          </div>
                        </div>

                        {/* Split widgets */}
                        <div className="grid grid-cols-12 gap-3 h-[calc(100%-6rem)]">
                          {/* Schedule calendar view */}
                          <div className="col-span-7 bg-white border border-slate-100 p-4 rounded-xl shadow-sm space-y-3">
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider text-start">Schedule</p>
                            <div className="space-y-2">
                              {[
                                { time: "09:00", name: "David Miller", status: "Completed", color: "bg-teal-50 text-teal-600" },
                                { time: "10:30", name: "Emma Watson", status: "In Progress", color: "bg-amber-50 text-amber-600" },
                                { time: "11:15", name: "John Doe", status: "Waiting", color: "bg-slate-50 text-slate-600" },
                              ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-2 rounded-lg border border-slate-50 hover:border-slate-100 transition-colors">
                                  <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">{item.time}</span>
                                    <span className="text-xs font-bold text-slate-700">{item.name}</span>
                                  </div>
                                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${item.color}`}>{item.status}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          {/* Quick access prescriptions & notes */}
                          <div className="col-span-5 bg-white border border-slate-100 p-4 rounded-xl shadow-sm space-y-3">
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider text-start">Active Note</p>
                            <div className="space-y-2">
                              <div className="p-2.5 bg-slate-50/60 rounded-lg border border-slate-100">
                                <p className="text-[10px] font-bold text-slate-700 text-start">Diagnosis: Arrhythmia</p>
                                <p className="text-[9px] text-slate-400 text-start mt-1">Prescribe: Metoprolol 25mg daily.</p>
                              </div>
                              <div className="h-7 bg-teal-500 hover:bg-teal-600 rounded-lg flex items-center justify-center text-white text-[10px] font-bold cursor-pointer transition-colors shadow-sm shadow-teal-500/10">
                                Send to Pharmacy
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "receptionist" && (
                      <motion.div
                        key="receptionist"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4 h-full"
                      >
                        {/* Live Call Widget */}
                        <div className="bg-slate-900 text-white p-4 rounded-xl shadow-sm flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-primary/20 border border-primary/30 rounded-lg flex items-center justify-center text-white animate-pulse">
                              <PhoneCall className="w-4 h-4 text-sky-400" />
                            </div>
                            <div className="space-y-0.5">
                              <p className="text-xs font-bold text-white text-start">Incoming Call: Patient</p>
                              <p className="text-[10px] text-slate-400 text-start">06 70 28 30 54 • (Robert S.)</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <div className="px-3 py-1 bg-secondary text-white text-[10px] font-bold rounded-lg cursor-pointer hover:bg-secondary/90 shadow-sm">Answer</div>
                            <div className="px-3 py-1 bg-red-600 text-white text-[10px] font-bold rounded-lg cursor-pointer hover:bg-red-700 shadow-sm">Decline</div>
                          </div>
                        </div>

                        {/* Split content */}
                        <div className="grid grid-cols-12 gap-3 h-[calc(100%-6rem)]">
                          {/* Calendar view */}
                          <div className="col-span-8 bg-white border border-slate-100 p-4 rounded-xl shadow-sm space-y-3">
                            <div className="flex justify-between items-center">
                              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider text-start">Live Bookings</p>
                              <span className="text-[10px] font-bold text-primary bg-sky-50 px-1.5 py-0.5 rounded">Dr. Jenkins</span>
                            </div>
                            <div className="grid grid-cols-4 gap-1.5 text-center">
                              {["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30"].map((time, idx) => (
                                <div
                                  key={idx}
                                  className={`p-1.5 text-[9px] font-bold rounded-lg border transition-all duration-300 ${
                                    idx === 1
                                      ? "bg-primary text-white border-primary shadow-sm"
                                      : idx === 3
                                      ? "bg-slate-100 text-slate-400 border-slate-100 cursor-not-allowed"
                                      : "bg-white text-slate-600 border-slate-100 hover:border-slate-300 cursor-pointer"
                                  }`}
                                >
                                  {time}
                                </div>
                              ))}
                            </div>
                          </div>
                          {/* Messaging channel */}
                          <div className="col-span-4 bg-white border border-slate-100 p-4 rounded-xl shadow-sm space-y-3 flex flex-col justify-between">
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider text-start">WhatsApp</p>
                            <div className="flex-1 space-y-2 overflow-y-auto">
                              <div className="p-2 bg-slate-50 rounded text-[9px] text-slate-600 text-start leading-normal">
                                "Hello, do you have an opening for a dentist today at 3?"
                              </div>
                            </div>
                            <div className="h-6 bg-slate-100 rounded-md border flex items-center px-2 text-[9px] text-slate-400 select-none text-start">
                              Reply message...
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "admin" && (
                      <motion.div
                        key="admin"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4 h-full"
                      >
                        {/* Audit Log / Admin welcome */}
                        <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-secondary font-bold">
                              <BarChart3 className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                              <p className="text-sm font-bold text-slate-800 text-start">Clinic Analytics Dashboard</p>
                              <p className="text-[10px] text-slate-400 text-start">Overall operations and compliance</p>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold text-secondary bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Shield className="w-3 h-3" /> GDPR Ok
                          </span>
                        </div>

                        {/* Graphs and statistics */}
                        <div className="grid grid-cols-12 gap-3 h-[calc(100%-6rem)]">
                          {/* Missed call statistics chart */}
                          <div className="col-span-8 bg-white border border-slate-100 p-4 rounded-xl shadow-sm space-y-3 flex flex-col justify-between">
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider text-start">Answered vs Missed Calls</p>
                            <div className="flex items-end gap-3 h-20 px-4">
                              {[60, 80, 75, 90, 85, 95, 98].map((h, idx) => (
                                <div key={idx} className="flex-1 flex flex-col gap-1 items-center h-full justify-end">
                                  <div className="w-full bg-slate-100 rounded-t-sm h-full relative overflow-hidden">
                                    <div className="absolute bottom-0 left-0 right-0 bg-secondary rounded-t-sm" style={{ height: `${h}%` }}></div>
                                  </div>
                                  <span className="text-[8px] font-bold text-slate-400">M</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          {/* Compliance and logs */}
                          <div className="col-span-4 bg-white border border-slate-100 p-4 rounded-xl shadow-sm space-y-3 flex flex-col justify-between">
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider text-start">Logs</p>
                            <div className="space-y-2 flex-grow">
                              {[
                                "Dr. J prescription sent",
                                "Call routed to Dental",
                                "API backup completed"
                              ].map((log, idx) => (
                                <div key={idx} className="flex items-center gap-1.5 py-0.5 border-b border-slate-50 last:border-0">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                                  <span className="text-[9px] text-slate-500 font-semibold truncate text-start">{log}</span>
                                </div>
                              ))}
                            </div>
                            <div className="h-6 bg-slate-50 hover:bg-slate-100 border rounded-lg flex items-center justify-center text-slate-700 text-[9px] font-bold cursor-pointer transition-colors">
                              Export Logs
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Outer visual framing elements */}
              <div className="absolute -inset-4 border border-secondary/5 rounded-[2.5rem] pointer-events-none -z-10"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
