"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

interface FooterProps {
  dict: any;
}

export default function Footer({ dict }: FooterProps) {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <Image src="/logo.png" alt="Call360 Clinica Logo" width={160} height={40} className="h-10 w-auto brightness-0 invert opacity-90" />
            </Link>
            <p className="text-slate-400 max-w-sm text-sm md:text-base leading-relaxed text-start">
              {dict.desc}
            </p>
            <div className="space-y-4">
              <h4 className="font-bold text-white text-start">{dict.contact}</h4>
              <a href="tel:0982301900" className="flex items-center gap-3 text-slate-300 hover:text-secondary transition-colors text-start">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="dir-ltr">09 82 301 900</span>
              </a>
              <a href="tel:0770283054" className="flex items-center gap-3 text-slate-300 hover:text-secondary transition-colors text-start">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="dir-ltr">07 70 28 30 54</span>
              </a>
            </div>
          </div>

          <div className="text-start">
            <h4 className="text-white font-bold mb-6">{dict.product}</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-secondary transition-colors text-sm font-semibold">{dict.features}</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors text-sm font-semibold">{dict.integrations}</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors text-sm font-semibold">{dict.pricing}</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors text-sm font-semibold">{dict.updates}</Link></li>
            </ul>
          </div>

          <div className="text-start">
            <h4 className="text-white font-bold mb-6">{dict.solutions}</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-secondary transition-colors text-sm font-semibold">{dict.clinics}</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors text-sm font-semibold">{dict.hospitals}</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors text-sm font-semibold">{dict.dental}</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors text-sm font-semibold">{dict.labs}</Link></li>
            </ul>
          </div>

          <div className="text-start">
            <h4 className="text-white font-bold mb-6">{dict.company}</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-secondary transition-colors text-sm font-semibold">{dict.about}</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors text-sm font-semibold">{dict.careers}</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors text-sm font-semibold">{dict.support}</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors text-sm font-semibold">{dict.contactLink}</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-slate-500 font-semibold">
          <p>&copy; {new Date().getFullYear()} Call360 Clinica. {dict.rights}</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">{dict.privacy}</Link>
            <Link href="#" className="hover:text-white transition-colors">{dict.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
