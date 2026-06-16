"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white">
                Call360<span className="text-secondary">.</span>Clinica
              </span>
            </Link>
            <p className="text-slate-400 mb-8 max-w-sm">
              The leading healthcare communication and clinic management platform. Centralize your calls, appointments, and data in one secure place.
            </p>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Contact Us</h4>
              <a href="tel:0982301900" className="flex items-center gap-3 text-slate-300 hover:text-secondary transition-colors">
                <Phone className="w-5 h-5 text-secondary" />
                <span>09 82 301 900</span>
              </a>
              <a href="tel:0770283054" className="flex items-center gap-3 text-slate-300 hover:text-secondary transition-colors">
                <Phone className="w-5 h-5 text-secondary" />
                <span>07 70 28 30 54</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-secondary transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Integrations</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Updates</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Solutions</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-secondary transition-colors">For Clinics</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">For Hospitals</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">For Dental Centers</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">For Laboratories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Support</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Call360 Clinica. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
