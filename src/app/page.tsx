import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Features from "@/components/sections/Features";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import DashboardShowcase from "@/components/sections/DashboardShowcase";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <WhyChooseUs />
      <DashboardShowcase />
      <Benefits />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
