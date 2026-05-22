import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export default function Home(): JSX.Element {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CTASection />
      <WhyChooseUs />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
