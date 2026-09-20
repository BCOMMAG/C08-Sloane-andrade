import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { InstitutionalPillars } from "@/components/InstitutionalPillars";
import { About } from "@/components/About";
import { PracticeAreas } from "@/components/PracticeAreas";
import { EducationalSection } from "@/components/EducationalSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { HowWeWork } from "@/components/HowWeWork";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <InstitutionalPillars />
        <About />
        <PracticeAreas />
        <EducationalSection />
        <ReviewsSection />
        <HowWeWork />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}