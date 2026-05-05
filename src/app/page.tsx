import type { Metadata } from "next";
import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { ServicesPreviewSection } from "@/components/sections/ServicesPreviewSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { MentorsPreviewSection } from "@/components/sections/MentorsPreviewSection";
import { DestinationsSection } from "@/components/sections/DestinationsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";
import { CTABannerSection } from "@/components/sections/CTABannerSection";

export const metadata: Metadata = {
  title: "HumbleWalking — Global education planning platform",
  description:
    "Discover expert services, connect with mentors, and manage your study abroad journey through one polished planning platform.",
};

export default function HomePage() {
  return (
    <MarketingLayout>
      <HeroSection />
      <SocialProofSection />
      <ServicesPreviewSection />
      <HowItWorksSection />
      <MentorsPreviewSection />
      <DestinationsSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <CTABannerSection />
    </MarketingLayout>
  );
}
