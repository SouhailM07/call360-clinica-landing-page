"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Globe, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  dict: any;
  locale: string;
}

export default function Navbar({ dict, locale }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: dict.features, href: "#features" },
    { name: dict.solutions, href: "#solutions" },
    { name: dict.benefits, href: "#benefits" },
    { name: dict.testimonials, href: "#testimonials" },
    { name: dict.faq, href: "#faq" },
    { name: dict.contact, href: "#contact" },
  ];

  const languages = [
    { code: "en", label: "English (EN)" },
    { code: "fr", label: "Français (FR)" },
    { code: "ar", label: "العربية (AR)" },
  ];

  const currentLangLabel = languages.find((lang) => lang.code === locale)?.label || "English (EN)";

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale) return;
    const segments = window.location.pathname.split("/");
    // segments[0] is "", segments[1] is current locale (e.g. "en")
    segments[1] = newLocale;
    window.location.pathname = segments.join("/");
  };

  return (
    <header
      dir="ltr"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
          : "bg-slate-900/40 backdrop-blur-sm py-5 border-b border-white/5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Call360 Clinica Logo"
                width={160}
                height={40}
                className={`h-10 w-auto transition-all ${
                  !isScrolled ? "brightness-0 invert md:brightness-100 md:invert-0" : ""
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors hover:text-secondary ${
                    isScrolled ? "text-slate-600" : "text-slate-100/90"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {/* Phone Number */}
            <a
              href="tel:0982301900"
              className={`flex items-center gap-2 text-sm font-semibold transition-colors hover:text-secondary ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              <Phone className="w-4 h-4 text-secondary" />
              <span className="dir-ltr">09 82 301 900</span>
            </a>

            {/* Language Switcher Dropdown */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-semibold transition-all hover:bg-slate-50/10 ${
                  isScrolled
                    ? "text-slate-700 border-slate-200 hover:bg-slate-100"
                    : "text-white border-white/20 hover:bg-white/10"
                }`}
              >
                <Globe className="w-4 h-4 text-secondary" />
                <span>{locale.toUpperCase()}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isLangMenuOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50 origin-top-right"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          handleLocaleChange(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={`flex items-center justify-between w-full px-4 py-2 text-start text-sm font-medium hover:bg-slate-50 transition-colors ${
                          locale === lang.code ? "text-primary bg-sky-50/40" : "text-slate-600"
                        }`}
                      >
                        <span>{lang.label}</span>
                        {locale === lang.code && <Check className="w-4 h-4 text-secondary" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button className="bg-secondary text-white hover:bg-secondary/90 shadow-md font-semibold px-5">
              {dict.demo}
            </Button>
          </div>

          {/* Mobile Menu Toggle & Language Switcher */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Simple Mobile Language Toggle */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1 p-2 rounded-lg border border-slate-200 bg-white text-slate-700 text-xs font-bold shadow-sm"
              >
                <Globe className="w-3.5 h-3.5 text-secondary" />
                <span>{locale.toUpperCase()}</span>
              </button>
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-40 bg-white border border-slate-100 rounded-xl shadow-lg py-1.5 z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          handleLocaleChange(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={`flex items-center justify-between w-full px-3 py-1.5 text-start text-xs font-semibold ${
                          locale === lang.code ? "text-primary bg-sky-50/40" : "text-slate-600"
                        }`}
                      >
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              className="p-2 text-slate-700 hover:text-primary transition-colors border border-slate-200 rounded-lg bg-white shadow-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-xl"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-700 font-semibold py-2.5 px-2 border-b border-slate-50 last:border-0 hover:text-secondary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-4">
                <a
                  href="tel:0982301900"
                  className="flex items-center justify-center gap-2 text-primary font-bold py-3 bg-slate-50 rounded-xl border border-slate-100"
                >
                  <Phone className="w-4 h-4 text-secondary" />
                  <span className="dir-ltr">09 82 301 900</span>
                </a>
                <Button className="w-full bg-secondary text-white hover:bg-secondary/90 py-6 font-bold shadow-md">
                  {dict.demo}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
