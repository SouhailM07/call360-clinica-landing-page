import { notFound } from "next/navigation";
import { getDictionary, hasLocale, Locale } from "@/i18n/dictionaries";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Features from "@/components/sections/Features";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import DashboardShowcase from "@/components/sections/DashboardShowcase";
import Benefits from "@/components/sections/Benefits";
import Statistics from "@/components/sections/Statistics";
import Comparison from "@/components/sections/Comparison";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!hasLocale(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale as Locale);

  return (
    <main className="min-h-screen bg-background font-sans antialiased overflow-x-hidden">
      <Navbar dict={dict.navbar} locale={locale} />
      <Hero dict={dict.hero} />
      <TrustedBy dict={dict.trustedBy} />
      <Features dict={dict.features} />
      <WhyChooseUs dict={dict.whyChooseUs} />
      <DashboardShowcase dict={dict.dashboardShowcase} />
      <Benefits dict={dict.benefits} />
      <Statistics dict={dict.statistics} />
      <Comparison dict={dict.comparison} />
      <Testimonials dict={dict.testimonials} />
      <Faq dict={dict.faq} />
      <Cta dict={dict.cta} />
      <Footer dict={dict.footer} />
    </main>
  );
}
