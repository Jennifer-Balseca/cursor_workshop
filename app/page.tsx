import { AboutSection } from "../components/about-section";
import { ContactSection } from "../components/contact-section";
import { FaqSection } from "../components/faq-section";
import { FinalCtaSection } from "../components/final-cta-section";
import { HeroSection } from "../components/hero-section";
import { PortfolioSection } from "../components/portfolio-section";
import { ProcessSection } from "../components/process-section";
import { ServicesSection } from "../components/services-section";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { TestimonialsSection } from "../components/testimonials-section";

export default function Home() {
  return (
    <div className="relative min-h-dvh bg-zinc-950 text-zinc-50">
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-20%,rgba(168,85,247,0.08),transparent_50%)]"
        aria-hidden
      />
      <div className="relative z-10">
        <SiteHeader />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProcessSection />
          <TestimonialsSection />
          <PortfolioSection />
          <FaqSection />
          <ContactSection />
          <FinalCtaSection />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
