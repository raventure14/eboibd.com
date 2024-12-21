import { AudienceSection } from "@/components/sections/audience-section";
import { ClauseSection } from "@/components/sections/clause-section";
import { DoYouKnowSection } from "@/components/sections/do-you-know-section";
import FAQSection from "@/components/sections/faq-section";
import { FeaturesSection } from "@/components/sections/feature-section";
import { HeroSection } from "@/components/sections/hero-section";
import PricingSection from "@/components/sections/pricing-section";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <AudienceSection />
      <ClauseSection />
      <DoYouKnowSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
    </main>
  );
}
