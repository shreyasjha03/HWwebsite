import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/shared/AnnouncementBar";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
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
  title: "EduBridge — Your Global Education Partner",
  description:
    "Complete study abroad services — from university selection to post-landing support. Connect with expert mentors and navigate your international education journey.",
};

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SocialProofSection />
        <ServicesPreviewSection />
        <HowItWorksSection />
        <MentorsPreviewSection />
        <DestinationsSection />
        <TestimonialsSection />
        <BlogPreviewSection />
        <CTABannerSection />
      </main>
      <Footer />
    </>
  );
}
